import { useEffect, useState } from "react"
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

export default function BlogPage() {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            //filter by category
            if (selectedCategory) {
                url += `$category = ${selectedCategory}`;
            }
            const responce = await fetch(url)
            const data = await responce.json();

            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    //page chnaging function
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function handleCategoryChange(category) {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* //    category section */}
            <div><CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} /></div>

            {/* // blogCards */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageSize={pageSize} />

                {/* sidebar Components */}
                <div>
                    <SideBar />
                </div>
            </div>



            {/* pagination section */}
            <div><Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} /></div>
        </div>
    )
}