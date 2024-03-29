import { motion } from "framer-motion";
import "./Card.css";
let Card = (props) => {
    const { data, onCardClick } = props;

    const imgUrl = "assets/smallImages/" + data.number.toString() + ".JPG";

    const Uinfo = (
        <div className="info text-md md:text-lg lg:text-xl mb-3 dark:text-gray-200 text-gray-700 flex flex-col md:justify-center">
            <span className="text-center ">{data.university}</span>
            <hr className="border-b-2 w-2/3 my-o mx-auto " />
            <span className="text-center">{data.faculty}</span>
        </div>
    );

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.2,
                },
            }}
            onClick={() => onCardClick(data)}
            className="transition-color Card cursor-pointer flex flex-col items-center dark:bg-gray-800 bg-white w-2/5 md:w-54 lg:w-72 xl:w-80 rounded-2xl m-2 max-h-96 md:m-4 p-0 shadow-xl text-gray-900"
            layout
        >
            <img
                layoutd
                src={imgUrl}
                alt=""
                loading="lazy"
                className=" rounded-t-2xl w-full flex-grow-0 object-right-top h-36 md:h-60 object-cover"
            ></img>

            <div className="grid grid-cols-1 content-center flex-1 flex-grow-1 mx-2 px-2 my-2 dark:text-white text-gray-900 w-full">
                <div className="name text-2xl flex-warp md:text-2xl lg:text-3xl flex flex-col xl:flex-row items-center  mb-0 md:justify-center">
                    <span className="firstname lg:flex-shrink-0 xl:mr-2">
                        {data.number}.{data.name}
                    </span>
                    <span className="second lg:flex-shrink-0">{data.sirname}</span>
                </div>
                {Uinfo}
            </div>
        </motion.button>
    );
};

export default Card;
