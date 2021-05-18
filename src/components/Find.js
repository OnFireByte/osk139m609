import "./Find.css";

let Find = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="find w-5/12 shadow-inner">
            <input
                type="text"
                className="find-input outline-none focus:ring-2 focus:ring-gray-600 transition-all bg-gray-700 text-blue-50 shadow-xl shadow-inner"
                placeholder="Find something"
                value={value}
                onChange={(event) => {
                    onValueChange(event.target.value);
                }}
            />
        </div>
    );
};

export default Find;
