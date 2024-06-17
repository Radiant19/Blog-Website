import BlogPage from "../components/BlogPage.jsx";

export default function Blogs() {
    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Blog Page</h2>
            </div>
            {/* all blogs container */}
            <div className="max-w-7xl mx-auto">
            <BlogPage/>
            </div>
        </div>
        
    )
}