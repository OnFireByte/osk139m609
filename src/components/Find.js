let Find = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="find transition-all lg:w-5/12 w-2/3 shadow-inner flex justify-center">
            <input
                type="text"
                className="find-input transition-all outline-none rounded-lg shadow-4xl shadow-inner focus:ring-2 focus:ring-gray-600 transition-all bg-gray-700 text-blue-50 shadow-xl shadow-inner w-full my-10 mx-o py-2 px-2 lg:px-4 text-2xl lg:text-3xl"
                placeholder="Find Something!"
                value={value}
                onChange={(event) => {
                    onValueChange(event.target.value);
                }}
            />
        </div>
    );
};

export default Find;
