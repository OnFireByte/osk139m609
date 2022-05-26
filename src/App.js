import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import stringSimilarity from "string-similarity";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";
import ChartBox from "./components/ChartBox";
import { ReactComponent as LoadingIcon } from "./components/loading.svg";
import ModalPost from "./components/ModalPost";
import { motion } from "framer-motion";
import { dataJson } from "./data.js";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(dataJson);
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

        finds.forEach((findKeyword) => {
            if (
                !(
                    number.includes(findKeyword) ||
                    numberID.includes(findKeyword) ||
                    name.includes(findKeyword) ||
                    sirname.includes(findKeyword) ||
                    university.includes(findKeyword) ||
                    faculty.includes(findKeyword) ||
                    major.includes(findKeyword) ||
                    course.includes(findKeyword) ||
                    keywords?.some((keyword) => keyword.includes(findKeyword.toLowerCase())) ||
                    number.includes(findKeyword) ||
                    stringSimilarity.compareTwoStrings(findKeyword, numberID) >= 0.75 ||
                    stringSimilarity.compareTwoStrings(findKeyword, name) >= 0.5 ||
                    stringSimilarity.compareTwoStrings(findKeyword, sirname) >= 0.5 ||
                    stringSimilarity.compareTwoStrings(findKeyword, university) >= 0.5 ||
                    stringSimilarity.compareTwoStrings(findKeyword, faculty) >= 0.75 ||
                    stringSimilarity.compareTwoStrings(findKeyword, major) >= 0.75 ||
                    stringSimilarity.compareTwoStrings(findKeyword, course) >= 0.75 ||
                    keywords?.some(
                        (keyword) =>
                            stringSimilarity.compareTwoStrings(
                                findKeyword.toLowerCase(),
                                keyword
                            ) >= 0.75
                    )
                )
            ) {
                result = false;
            }
        });
        return result;
    });

    const [modal, setModal] = useState(false);
    const onCardOpenClick = (theCard) => {
        setModal(theCard);
    };

    const checkCardElement = () => {
        if (users.length === 0) {
            return (
                <div className=" transition-all h-screen w-full flex items-center justify-center">
                    <LoadingIcon className="w-32 h-32 fill-current text-gray-900 dark:text-white" />
                </div>
            );
        }

        return (
            <motion.div className="main-list min-h-screen pt-24 pb-3 items-center" layout>
                <AnimatePresence>
                    {(filteredDatas.length !== 0 &&
                        filteredDatas.map((data) => (
                            <Card key={data.number} data={data} onCardClick={onCardOpenClick} />
                        ))) || (
                        <div className="text-6xl dark:text-white text-gray-900">
                            Nothing found, Sorry.
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

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
                {checkCardElement()}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="dark:text-gray-900 text-white fill-current"
                >
                    <path
                        fillOpacity="1"
                        d="M0,288L48,250.7C96,213,192,139,288,133.3C384,128,480,192,576,224C672,256,768,256,864,218.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
                <div className="w-full transition-all bg-gradient-to-b from-white to-pink-100 footer py-6">
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
