import "./Find.css";

let Find = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="find w-5/12 shadow-inner">
            <input
                type="text"
                className="find-input"
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
