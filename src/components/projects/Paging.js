import React from 'react';

const PagingIcon = ({number, current, getPageProjects}) => {
    return (
        <div className={current === true ? "paging__icon active" : "paging__icon"} onClick={() => getPageProjects(number)}>{number}</div>
    );
};

const PagingUtilIcon = ({number, type, getPageProjects}) => {
    return (
        <div className="paging__icon" onClick={() => getPageProjects(number)}><i className={type}/></div>
    );
};

const makePaging = (projects, getPageProjects) => {

    const pagingItems = [];

    if(projects === null){
        return pagingItems;
    }

    let currentNumber = projects.number + 1;
    let lastNumber = projects.totalPages;
    let key = 0;

    pagingItems.push(<PagingUtilIcon number={1} type="fas fa-angle-double-left" getPageProjects={getPageProjects} key={key++}/>);
    pagingItems.push(<PagingUtilIcon number={currentNumber > 1 ? currentNumber - 1 : 1} type="fas fa-angle-left" getPageProjects={getPageProjects} key={key++}/>);

    for(let i = 1; i <= projects.totalPages; i++){
        let current = false;
        if(projects.number + 1 === i){
            current = true;
        }
        pagingItems.push(<PagingIcon key={i} number={i} current={current} getPageProjects={getPageProjects} key={key++}/>);
    }

    pagingItems.push(<PagingUtilIcon number={lastNumber > currentNumber ? currentNumber + 1 : currentNumber} type="fas fa-angle-right" getPageProjects={getPageProjects} key={key++}/>);
    pagingItems.push(<PagingUtilIcon number={lastNumber === 0 ? 1 : lastNumber} type="fas fa-angle-double-right" getPageProjects={getPageProjects} key={key++}/>);

    return pagingItems;
};

const Paging = ({mode, projects, getPageProjects}) => {
    return (
        <div className={mode === true ? "paging" : "paging dark"}>
            <div className="container">
                {makePaging(projects, getPageProjects)}
            </div>
        </div>
    );
};

export default Paging;
