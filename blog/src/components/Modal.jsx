

export default function Modal({ isOpen, onClose }) {
    return (
        <div className={`fixed top-8 left-8 w-full h-full flex items-center justify-center ${isOpen? "" : "hidden"} `}>
          
                <div className="modal-container">
                    <div className=" bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
                        <h2 className="text-xl font-semibold  mt-6 mb-5 uppercase">Please Login Here</h2>
                    <form>
                        <div className="mb-5">
                            <input type="email" name="email" placeholder="example@gmail.com " required 
                            className="w-full rounded-sm border border-[#e0e0e0] bg-white py-3 px-6 text-base  font-medium text-[#687280]
                            outline-none focus:border-[#6a64f1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <input type="password" name="password" placeholder="enter your password"required
                            className="w-full rounded-sm border border-[#e0e0e0] bg-white py-3 px-6 text-base  font-medium text-[#687280]
                            outline-none focus:border-[#6a64f1] focus:shadow-md" />
                        </div>
                        <div>
                            <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">Login</button>


                        </div>



                    </form>

                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5"
                    onClick={onClose}>
                        Close
                    </button>
                    </div>
                </div>
         
        </div>
    )
}