import { useState, useEffect } from "react";
import "./Find.css";
import { ReactComponent as FindSvg } from "./find.svg";
import { ReactComponent as LightSvg } from "./light.svg";

let Find = (props) => {
    const { value, onValueChange } = props;

    const [isDark, setIsDark] = useState(localStorage.theme == "dark" ? true : false);

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

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    const size = useWindowSize();
    let inputPlaceholder = size.width > 550 ? "Find Something!" : "Find";

    return (
        <div className="find">
            <label className=" find-label flex-grow flex-1 mr-2">
                <FindSvg fill="currentColor" className="icon w-6 h-6 transition-all" />
                <input
                    type="text"
                    className="find-input w-full transition-all outline-none bg-transparent text-blue-50 px-2 lg:px-4 text-2xl lg:text-3xl"
                    placeholder={inputPlaceholder}
                    value={value}
                    onChange={(event) => {
                        onValueChange(event.target.value);
                    }}
                />
            </label>
            <div
                onClick={() => toggleTheme()}
                className="div-light cursor-pointer shadow-xl text-gray-900 w-14 h-14 transition-all bg-gray-50 dark:text-white dark:bg-gray-700 box-border p-3 rounded-xl"
            >
                <LightSvg fill="currentColor" className="transition-all icon-light" />
            </div>
        </div>
    );
};

export default Find;
