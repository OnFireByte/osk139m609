import "./Find.css";
import { ReactComponent as FindSvg } from "./find.svg";
let Find = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="find transition-all lg:w-5/12 w-2/3 shadow-inner ">
            <label className="transition-all find-icon flex justify-center items-center focus-within:text-blue-50 text-gray-400 bg-gray-700 h-14 rounded-lg pl-3 shadow-4xl focus-within:ring-2 focus-within:ring-gray-600">
                <FindSvg fill="currentColor" className="icon w-6 h-6 transition-all" />
                <input
                    type="text"
                    className="find-input w-full transition-all outline-none bg-gray-700 text-blue-50 px-2 lg:px-4 text-2xl lg:text-3xl"
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
