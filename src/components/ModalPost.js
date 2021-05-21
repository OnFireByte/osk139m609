import { motion } from "framer-motion";
import "./ModalPost.css";
import { ReactComponent as CloseSvg } from "./close.svg";
import { useState } from "react";
import { ReactComponent as LoadingIcon } from "./loading.svg";

let ModalPost = (props) => {
    const { data, onBgClick } = props;

    let UInfo = null;
    if (!!data.university) {
        UInfo = (
            <div className="flex flex-col items-center w-full transition-all">
                <hr className="border-2 border-pink-400 bg-pink-400 rounded-full h-0 w-2/3 my-4 p-0 mx-auto" />
                <span className="university lg:text-4xl text-3xl w-4/5 text-center">
                    {data.university}
                </span>
                <hr className="border-2 border-blue-400 bg-blue-400 rounded-full h-0 w-1/3 my-2 p-0 mx-auto" />
                <span className="faculty-info lg:text-2xl text-xl text-center">{data.faculty}</span>
                <span className="major lg:text-2xl text-xl text-center">
                    {data.major} | {data.course}
                </span>
            </div>
        );
    }
    let imgUrl = "assets/bigImages/" + data.number + ".JPG";

    const [imgIsLoaded, setImgIsLoaded] = useState(false);
    return (
        <div className="flex z-40 items-center justify-center fixed w-screen h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring" }}
                className="main-box transition-all z-40 fixed bg-white rounded-3xl lg:flex-row lg:h-2/3 xl:h-4/5 lg:w-4/5 w-4/5 table lg:flex flex-col"
            >
                <CloseSvg
                    onClick={() => onBgClick(null)}
                    className="cursor-pointer transition-all duration-300 transform hover:rotate-90 absolute z-10 top-0 right-0 bg-gray-500 lg:bg-transparent bg-opacity-40 opacity-80 lg:opacity-100 box-content p-2 lg:p-0 rounded-full lg:rounded-none m-2 lg:m-6 w-6 h-6 fill-current close text-white lg:text-gray-900  "
                />
                <div className="modal-img relative bg-gray-700 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none w-full lg:w-3/5 flex-grow-0 h-56 lg:h-full ">
                    <img
                        src={imgUrl}
                        alt={data.name + " " + data.sirname}
                        onLoad={() => setImgIsLoaded(true)}
                        className=" object-cover object-bottom lg:object-right-bottom w-full h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                    />
                    <LoadingIcon
                        className="h-24 w-24 loading-icon"
                        style={imgIsLoaded ? { visibility: "hidden" } : { visibility: "visible" }}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="grid content-center lg:flex-1 lg:flex-grow-1 transition-all pb-5"
                >
                    <div className="name flex flex-col items-center  my-3 lg:justify-center transition-all">
                        <span className="firstname lg:text-7xl text-5xl text-center">
                            {data.name}
                        </span>
                        <span className="second text-3xl lg:text-5xl text-center">
                            {data.sirname}
                        </span>
                        <span className="id text-xl lg:text-2xl">
                            เลขที่ {data.number} | รหัสประจำตัวนักเรียน {data.studentID}
                        </span>

                        {UInfo}
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => onBgClick(null)}
                className="w-screen z-30 cursor-pointer h-screen fixed transition-none bg-gray-900 bg-opacity-95"
            />
        </div>
    );
};

export default ModalPost;
