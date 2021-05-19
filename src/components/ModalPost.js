let ModalPost = (props) => {
    const { data, onBgClick } = props;
    let UInfo = null;
    if (!!data.university) {
        UInfo = (
            <div className="flex flex-col items-center w-full transition-all">
                <hr className="border-2 border-pink-400 bg-pink-400 rounded-full h-0 w-2/3 my-4 p-0 mx-auto" />
                <span className="university text-4xl w-4/5 text-center">{data.university}</span>
                <hr className="border-2 border-blue-400 bg-blue-400 rounded-full h-0 w-1/3 my-2 p-0 mx-auto" />
                <span className="faculty-info text-2xl text-center">{data.faculty}</span>
                <span className="major text-2xl text-center">
                    {data.major} | {data.course}
                </span>
            </div>
        );
    }
    let imgUrl = "assets/" + data.number.toString() + ".JPG";
    return (
        <div className="ModalPost z-50 fixed w-screen h-screen l  bg-gray-900 bg-opacity-80 flex items-center justify-center">
            <div
                onClick={() => onBgClick(null)}
                className="w-screen cursor-pointer h-screen fixed transition-none"
            ></div>
            <div className="main-box z-20 transition-all bg-white rounded-3xl  lg:flex-row lg:h-4/5 lg:w-2/3 w-4/5 flex flex-col items-center">
                <img
                    src={imgUrl}
                    className=" rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none w-full lg:w-3/5 flex-grow-0 object-right-down h-56 lg:h-full object-cover"
                />

                <div className="grid content-center flex-1 flex-grow-1 transition-all">
                    <div className="name flex flex-col items-center  my-3 lg:justify-center transition-all">
                        <span className="firstname text-7xl text-center">{data.name}</span>
                        <span className="second text-5xl text-center">{data.sirname}</span>
                        <span className="id text-xl lg:text-2xl">
                            เลขที่ {data.number} | รหัสประจำตัวนักเรียน {data.studentID}
                        </span>

                        {UInfo}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPost;
