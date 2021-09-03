import React, {useCallback, useState} from 'react'
import Slider from "react-slick";
import ImageViewer from 'react-simple-image-viewer';

const ProjectGallery = ({project, mode}) => {
    const infinite = project !== null && project.images.length > 3;

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const settings = {
        dots: false,
        infinite: infinite,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="container">
            {project ? <Slider {...settings}>
                {project.images.map((image, index) => {
                    return (
                        <div key={image.id} className={mode === true ? "gallery__image" : "gallery__image dark"}>
                            <img
                                src={image.path}
                                onClick={() => openImageViewer(index)}
                                key={index}
                                alt="gallery image"
                            />
                        </div>
                    );
                })}
            </Slider> : ''}

            {project ? isViewerOpen && (
                <ImageViewer
                    src={project.images.map(image => image.path)}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                />
            ) : ''}
        </div>
    );
}

export default ProjectGallery;