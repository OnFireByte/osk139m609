let Card = (props) => {
    const { data } = props;

    let Uinfo = "";

    let imgUrl = "assets/" + data.number.toString() + ".JPG";

    if (!!data.university) {
        Uinfo = (
            <div className="info text-md lg:text-xl text-gray-700 flex flex-col lg:justify-center">
                <span className="text-center border-b-2">{data.university}</span>
                <span className="text-center">{data.faculty}</span>
            </div>
        );
    }

    return (
        <div className="transition-all bg-white w-2/5 lg:w-80 rounded-lg m-2 max-h-96 lg:m-4 p-2 lg:p-4 shadow-xl text-gray-900">
            <img
                src={imgUrl}
                alt=""
                className=" rounded-md w-full object-right-top h-36 lg:h-60 object-cover"
            />
            <p className="name text-2xl lg:text-3xl flex flex-col lg:flex-row items-center mt-2 lg:justify-center">
                <span className="firstname lg:mr-2">
                    {data.number}.{data.name}
                </span>
                <span className="second">{data.sirname}</span>
            </p>
            {Uinfo}
        </div>
    );
};

export default Card;
