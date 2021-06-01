import Find from "./Find";
import "./AppHeader.css";

let AppHeader = (props) => {
    const { findValue, onFindValueChange, onLightChange } = props;

    return (
        <div className="AppHeader z-10 shadow-md fixed w-full m-0 h-24 p-10 top-0 flex justify-between items-center">
            <span
                onClick={() => {
                    onFindValueChange("");
                }}
                className="transition-all cursor-pointer header-text text-3xl md:text-4xl text-white"
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
