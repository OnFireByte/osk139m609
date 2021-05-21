import { useState } from "react";
import "./Find.css";
import { ReactComponent as FindSvg } from "./find.svg";
import { ReactComponent as LightSvg } from "./light.svg";

let Find = (props) => {
    const { value, onValueChange } = props;

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark(!isDark);
    localStorage.theme = isDark ? "dark" : "light";
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
        isDark === "dark"
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    return (
        <div className="find">
            <label className=" find-label flex-grow flex-1 mr-2">
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
            <div className="group div-light cursor-pointer shadow-xl hover:text-gray-900 w-14 h-14 transition-all hover:bg-gray-50 text-white bg-gray-700 box-border p-3 rounded-xl">
                <LightSvg
                    fill="currentColor"
                    className="transition-all icon-light"
                    onClick={() => toggleTheme()}
                />
            </div>
        </div>
    );
};

export default Find;
