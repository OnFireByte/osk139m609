import "./Card.css";

let Card = (props) => {
    const { data } = props;

    let Uinfo = "";

    let imgUrl = "assets/" + data.number.toString() + ".jpg";

    if (!!data.university) {
        Uinfo = (
            <p className="info">
                {data.university}
                <br />
                {data.faculty}
            </p>
        );
    }

    return (
        <div className="Card">
            <img src={imgUrl} alt="" />
            <p className="name">
                {data.number}.{data.name} {data.sirname}
            </p>
            {Uinfo}
        </div>
    );
};

export default Card;
