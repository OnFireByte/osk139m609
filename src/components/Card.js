let Card = (props) => {
    const { data, onCardClick } = props;

    let Uinfo = "";

    let imgUrl = "assets/" + data.number.toString() + ".JPG";

    if (!!data.university) {
        Uinfo = (
            <div className="info text-md lg:text-xl mb-3 text-gray-700 flex flex-col lg:justify-center">
                <span className="text-center ">{data.university}</span>
                <hr className="border-b-2 w-2/3 my-o mx-auto " />
                <span className="text-center">{data.faculty}</span>
            </div>
        );
    }

    return (
        <div
            onClick={() => onCardClick(data)}
            className="transition-all cursor-pointer flex flex-col bg-white w-2/5 lg:w-80 rounded-2xl m-2 max-h-96 lg:m-4 p-0 shadow-xl text-gray-900"
        >
            <img
                src={imgUrl}
                alt=""
                className=" rounded-t-2xl w-full flex-grow-0 object-right-top h-36 lg:h-60 object-cover"
            />
            <div className="grid grid-cols-1 content-center flex-1 flex-grow-1 mx-2 my-2">
                <div className="name text-2xl lg:text-3xl flex flex-col lg:flex-row items-center  mb-0 lg:justify-center">
                    <span className="firstname lg:mr-2">
                        {data.number}.{data.name}
                    </span>
                    <span className="second">{data.sirname}</span>
                </div>
                {Uinfo}
            </div>
        </div>
    );
};

export default Card;
