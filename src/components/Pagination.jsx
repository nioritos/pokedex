function Pagination(props) {
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return(
        <div>
            <button onClick={onLeftClick}>◀</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>▶</button>
        </div>
    )
};

export default Pagination;