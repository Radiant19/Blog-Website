export default function Pagination({ onPageChange, currentPage, blogs, pageSize }) {
    const totalPages = Math.ceil(blogs.length / pageSize)

    function renderPaginationLinks() {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activerPagination " : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
    return (
        <ul className="pagination my-4 flex-wrap gap-4 ">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            <div className="flex gap-1 ">{renderPaginationLinks()}</div>
            <li>
                <button onClick={() => onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>
            </li>
        </ul>
    )
}