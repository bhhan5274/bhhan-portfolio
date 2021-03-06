import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import bannerDark from '../../img/banner_dark.png';
import bannerWhite from '../../img/banner_white.png';
import TextLoop from "react-text-loop";

const Banner = ({mode}) => {
    const [ontions, setOptions] = useState([
        'μΉ κ°λ°μ π» μλλ€.',
        'ν΄λ¦°μ½λ π μμ±μ λΈλ ₯ν©λλ€.',
        'νμ€ν κ°λ°μλ₯Ό π κΏκΏλλ€.',
        'μ λ’°μ νλμ πͺ μ€μμν©λλ€.'
    ]);

    return (
        <section className={mode === true ? "banner" : "banner dark"}>
            <div className="container">
                <div className="banner__intro">
                    <div className={mode === true ? "banner__subject" : "banner__subject dark"}>
                        <span><h1 className="banner__title">μλνμΈμ.</h1>
                            &nbsp;&nbsp;
                            <TextLoop mask={true} children={ontions} />
                        </span>
                        <p>λ§μ΄ν¬λ‘μλΉμ€μ DevOpsμ κ΄μ¬μ΄ λ§μ΅λλ€.</p>
                        <p>μ΄μ λ³΄λ€ λ λμ κ°λ°μλ‘ μ±μ₯νκΈ° μν΄</p>
                        <p>κΎΈμ€ν λΈλ ₯νκ³  μμ΅λλ€.</p>
                    </div>
                </div>
                <div className="banner__gallery">
                    <img src={mode === true ? bannerWhite : bannerDark} alt="banner image" className="banner__image"/>
                </div>
            </div>
        </section>
    );
};

export default Banner;
