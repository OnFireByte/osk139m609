import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";
import ModalPost from "./components/ModalPost";
import { AnimatePresence } from "framer-motion";
import { readString } from "react-papaparse";
import { ReactComponent as LoadingIcon } from "./components/loading.svg";
import ChartBox from "./components/ChartBox";

function App() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        let datasCSV = await fetch(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTyNXZNjb1qPTY8eWmIvgsBC4UfASw9QL7DMyPFlKkIzLzXOPS-7GBWQMaGC_JTK75LkHGUjO11JxU/pub?gid=0&single=true&output=csv"
        ).then((r) => r.text());

        const datasJson = readString(datasCSV, { header: true }).data;
        console.log(datasJson);
        setUsers(datasJson);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [find, setFind] = useState("");
    const filteredDatas = users.filter((data) => {
        let number = data.number.toString();
        let numberID = data.studentID.toString();
        let name = data.name.toLowerCase();
        let sirname = data.sirname.toLowerCase();
        let university = data.university.toLowerCase();
        let faculty = data.faculty.toLowerCase();
        let major = data.major.toLowerCase();
        let course = data.course.toLowerCase();
        let keywords = data.keywords?.split(" ").map((keyword) => keyword.toLowerCase());

        let result = true;
        let finds = find.split(" ");
        for (let i = 0; i < finds.length; i++) {
            if (
                number.includes(finds[i]) ||
                numberID.includes(finds[i]) ||
                name.includes(finds[i]) ||
                sirname.includes(finds[i]) ||
                university.includes(finds[i]) ||
                faculty.includes(finds[i]) ||
                major.includes(finds[i]) ||
                course.includes(finds[i]) ||
                keywords?.some((keyword) => keyword.includes(finds[i].toLowerCase()))
            ) {
            } else {
                result = false;
            }
        }
        return result;
    });
    const [modal, setModal] = useState(false);
    const onCardOpenClick = (theCard) => {
        setModal(theCard);
    };

    const cardElements = filteredDatas.map((data) => (
        <Card key={data.number} data={data} onCardClick={onCardOpenClick} />
    ));

    let checkCardElement = (
        <div className="main-list min-h-screen pt-24 pb-3 transition-all ">{cardElements}</div>
    );
    if (filteredDatas.length === 0 && users.length !== 0) {
        checkCardElement = (
            <div className="text-6xl dark:text-white text-gray-900 transition-all h-screen w-full flex items-center justify-center">
                Nothing found, Sorry.
            </div>
        );
    }
    if (users.length === 0) {
        checkCardElement = (
            <div className=" transition-all h-screen w-full flex items-center justify-center">
                <LoadingIcon className="w-32 h-32 fill-current text-gray-900 dark:text-white" />
            </div>
        );
    }

    return (
        <div className="App min-h-screen bg-blue-300 bg-gradient-to-bl from-pink-200 dark:bg-gad-dark dark:via-gad-mid  dark:from-gad-light">
            <AppHeader findValue={find} onFindValueChange={setFind} />
            <AnimatePresence>
                {modal && (
                    <ModalPost
                        data={modal}
                        onBgClick={onCardOpenClick}
                        //onLightChange={() => changeTheme()}
                    />
                )}
            </AnimatePresence>
            <div className="main">
                {checkCardElement}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="dark:text-gray-900 text-white fill-current"
                >
                    <path
                        fill-opacity="1"
                        d="M0,288L48,250.7C96,213,192,139,288,133.3C384,128,480,192,576,224C672,256,768,256,864,218.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
                <div className="w-screen transition-all bg-gradient-to-b from-white to-pink-100 footer py-6">
                    <ChartBox />
                    <div className="text-6xl  dark:text-white text-gray-900 transition-all w-full flex items-center justify-center">
                        <img
                            src="assets/all.jpg"
                            alt="ทำเนียบ"
                            className="lastImg lg:m-12 m-4 rounded-3xl shadow-2xl "
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
