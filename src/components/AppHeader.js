import Find from "./Find";

let AppHeader = (props) => {
    const { findValue, onFindValueChange } = props;

    return (
        <div className="AppHeader shadow-md fixed bg-gray-800  w-full m-0 h-24 p-10 top-0 flex justify-between items-center">
            <h1 className="transition-all font-bold text-3xl lg:text-4xl text-white">
                OSK139 / M609
            </h1>
            <Find value={findValue} onValueChange={onFindValueChange} />
        </div>
    );
};
export default AppHeader;