import "./Card.css";

let Card = (props) => {
    const { data } = props;

    let Uinfo = "";

    let imgUrl = "assets/" + data.number.toString() + ".JPG";

    if (!!data.university) {
        Uinfo = (
            <p className="info text-xl text-gray-700">
                {data.university}
                <br />
                {data.faculty}
            </p>
        );
    }

    return (
        <div className="bg-white w-80 rounded-lg m-4 p-4 shadow-xl text-gray-900">
            <img src={imgUrl} alt="" className=" rounded-md w-full h-60 object-cover" />
            <p className="name text-3xl">
                {data.number}.{data.name} {data.sirname}
            </p>
            {Uinfo}
        </div>
    );
};

export default Card;
