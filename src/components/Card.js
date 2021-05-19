let Card = (props) => {
    const { data, onCardClick } = props;

    let Uinfo = "";

    let imgUrl = "assets/smallImages/" + data.number.toString() + ".JPG";

    if (!!data.university) {
        Uinfo = (
            <div className="info text-md md:text-lg lg:text-xl mb-3 text-gray-700 flex flex-col md:justify-center">
                <span className="text-center ">{data.university}</span>
                <hr className="border-b-2 w-2/3 my-o mx-auto " />
                <span className="text-center">{data.faculty}</span>
            </div>
        );
    }

    return (
        <div
            onClick={() => onCardClick(data)}
            className="transition-all cursor-pointer flex flex-col bg-white w-2/5 md:w-54 lg:w-72 xl:w-80 rounded-2xl m-2 max-h-96 md:m-4 p-0 shadow-xl text-gray-900"
        >
            <img
                src={imgUrl}
                alt=""
                loading="lazy"
                className=" rounded-t-2xl w-full flex-grow-0 bg-gray-500 object-right-top h-36 md:h-60 object-cover"
            />

            <div className="grid grid-cols-1 content-center flex-1 flex-grow-1 mx-2 my-2">
                <div className="name text-2xl flex-warp md:text-2xl lg:text-3xl flex flex-col xl:flex-row items-center  mb-0 md:justify-center">
                    <span className="firstname lg:flex-shrink-0 xl:mr-2">
                        {data.number}.{data.name}
                    </span>
                    <span className="second lg:flex-shrink-0">{data.sirname}</span>
                </div>
                {Uinfo}
            </div>
        </div>
    );
};

export default Card;
