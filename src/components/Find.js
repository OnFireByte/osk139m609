import { useEffect, useState, useRef } from "react";
import "./Find.css";
import { ReactComponent as CloseSvg } from "./close.svg";
import { motion, AnimatePresence } from "framer-motion";

import { ReactComponent as FindSvg } from "./find.svg";
import { ReactComponent as LightSvg } from "./light.svg";

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

let Find = ({ onValueChange }) => {
    const inputDebounce = useRef(
        debounce((nextValue) => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            onValueChange(nextValue);
        })
    ).current;

    const [inputValue, setInputValue] = useState("");

    const [isDark, setIsDark] = useState(localStorage.theme === "dark" ? true : false);

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
            <label className=" find-label flex-grow flex-1 mr-2 shadow-xl ">
                <FindSvg
                    fill="currentColor"
                    className="icon w-6 h-6 transition-all text-slate-800 dark:text-slate-300"
                />
                <input
                    type="text"
                    className="find-input w-full transition-all  outline-none bg-transparent text-slate-800 placeholder-slate-800 dark:placeholder-slate-300 dark:text-slate-300 px-2 lg:px-4 text-2xl lg:text-3xl"
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value);

                        inputDebounce(event.target.value);
                    }}
                />
                <AnimatePresence>
                    {inputValue && (
                        <motion.button
                            initial={{ opacity: 0, x: -20, scale: 0 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0, transition: { duration: 0.2 } }}
                            onClick={() => {
                                setInputValue("");
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                                onValueChange("");
                            }}
                            className="cursor-pointer"
                        >
                            <CloseSvg
                                fill="currentColor"
                                className="icon w-5 h-5 mr-2 transition-all text-slate-800 dark:text-slate-300"
                            />
                        </motion.button>
                    )}
                </AnimatePresence>
            </label>
            <button
                onClick={() => toggleTheme()}
                className="div-light cursor-pointer shadow-xl text-gray-900 w-14 h-14 transition-all bg-white dark:text-white dark:bg-gray-700 box-border p-3 rounded-xl"
            >
                <LightSvg fill="currentColor" className=" icon-light" />
            </button>
        </div>
    );
};

export default Find;
