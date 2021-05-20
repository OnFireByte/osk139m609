import "./Find.css";
import { ReactComponent as FindSvg } from "./find.svg";
let Find = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="find">
            <label className=" find-label">
                <FindSvg fill="currentColor" className="icon w-6 h-6 transition-all" />
                <input
                    type="text"
                    className="find-input w-full transition-all outline-none bg-transparent text-blue-50 px-2 lg:px-4 text-2xl lg:text-3xl"
                    placeholder="Find Something!"
                    value={value}
                    onChange={(event) => {
                        onValueChange(event.target.value);
                    }}
                />
            </label>
        </div>
    );
};

export default Find;
