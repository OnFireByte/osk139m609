import Find from "./Find";
import "./AppHeader.css";

let AppHeader = (props) => {
    const { findValue, onFindValueChange, onLightChange } = props;

    return (
        <div className="AppHeader dark:bg-[#151f2e] bg-pink-100 opacity-[98%] z-10 shadow-md fixed w-full m-0 h-24 p-10 top-0 flex justify-between items-center">
            <span
                onClick={() => {
                    onFindValueChange("");
                }}
                className="transition-all cursor-pointer lg:text-5xl text-4xl break-word dark:text-white text-gray-900"
            >
                OSK139 / M609
            </span>
            <Find
                value={findValue}
                onValueChange={onFindValueChange}
                onThemeChange={onLightChange}
            />
        </div>
    );
};
export default AppHeader;
