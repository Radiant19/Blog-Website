import { useLoaderData } from "react-router-dom"
import { FaUser, FaClock } from 'react-icons/fa'
import SideBar from "../components/SideBar";


export default function SingleBlog() {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0]
    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Single Block Page</h2>
            </div>
            {/* blog details */}
            <div className=" max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-2/3 mx-auto">
                <div>
                    <img src={image} alt="" className="w-full mx-auto rounded" />
                </div>
                <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cusrsor-pointer">{title}</h2>
                <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2" />{author} | {published_date}</p>
                <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2" />{reading_time}</p>

                <p className="text-base text-gray-500 mb-6">{content}</p>
                <div className="text-base text-gray-500 mb-6" >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum praesentium aliquam tempora facere dolore consequuntur fugiat quo placeat modi animi, quia deserunt atque a pariatur magni. Recusandae nam vel ab?</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut tenetur mollitia recusandae nemo ipsum quasi quas, velit ullam eveniet libero molestiae nihil porro architecto commodi, iusto iure cumque quo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus saepe veritatis laudantium officiis repellat ipsum inventore eos non facere rerum rem eligendi reiciendis sint porro, amet ab, doloremque distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum praesentium aliquam tempora facere dolore consequuntur fugiat quo placeat modi animi, quia deserunt atque a pariatur magni. Recusandae nam vel ab?</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut tenetur mollitia recusandae nemo ipsum quasi quas, velit ullam eveniet libero molestiae nihil porro architecto commodi, iusto iure cumque quo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus saepe veritatis laudantium officiis repellat ipsum inventore eos non facere rerum rem eligendi reiciendis sint porro, amet ab, doloremque distinctio.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus saepe veritatis laudantium officiis repellat ipsum inventore eos non facere rerum rem eligendi reiciendis sint porro, amet ab, doloremque distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum praesentium aliquam tempora facere dolore consequuntur fugiat quo placeat modi animi, quia deserunt atque a pariatur magni. Recusandae nam vel ab?</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut tenetur mollitia recusandae nemo ipsum quasi quas, velit ullam eveniet libero molestiae nihil porro architecto commodi, iusto iure cumque quo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta natus saepe veritatis laudantium officiis repellat ipsum inventore eos non facere rerum rem eligendi reiciendis sint porro, amet ab, doloremque distinctio.</p><br />

                </div>
            </div>
            <div className="lg:w-3/4">
                <SideBar/>
            </div>
            </div>
        </div>
    )
}