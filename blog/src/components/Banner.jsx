import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6"
export default function Banner() {
    return (
        <div className="px-4 py-32 bg-black mx-auto">
            <div className="text-white text-center">
                <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Welcome to our Blog</h1>
                <p className="text-grey-100 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.
                    We offer everything you need to get started, from healpful tips and tutorials</p>
                <div>
                    <Link to='/' className="font-medium hover:text-orange-500 inline-flex items-center">Learn more
                        <FaArrowRight className="mt-1 ml-2" /></Link>
                </div>
            </div>
        </div>
    )
}