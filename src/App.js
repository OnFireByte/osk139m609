import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";
import ModalPost from "./components/ModalPost";
import { AnimatePresence } from "framer-motion";
import { readString } from "react-papaparse";
import { ReactComponent as LoadingIcon } from "./components/loading.svg";

function App() {
    const [users, setUsers] = useState([]);

    console.log(users);

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

    const [modal, setModal] = useState(false);
    const onCardOpenClick = (theCard) => {
        setModal(theCard);
    };

    const [find, setFind] = useState("");
    const filteredDatas = users.filter((data) => {
        let number = data.number.toString();
        let numberID = data.studentID.toString();
        let name = data.name.toLowerCase();
        let sirname = data.sirname.toLowerCase();
        let university = data.university.toLowerCase();
        let faculty = data.faculty.toLowerCase();
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
                course.includes(finds[i]) ||
                keywords?.some((keyword) => keyword.includes(finds[i].toLowerCase()))
            ) {
            } else {
                result = false;
            }
        }
        return result;
    });

    const cardElements = filteredDatas.map((data) => (
        <Card key={data.number} data={data} onCardClick={onCardOpenClick} />
    ));

    const CheckCardElement = () => {
        if (filteredDatas.length === 0 && users.length != 0) {
            return (
                <div className="text-6xl text-gray-800 transition-all h-screen w-full flex items-center justify-center">
                    Nothing found, Sorry.
                </div>
            );
        }
        if (users.length == 0) {
            return (
                <div className="text-6xl text-gray-800 transition-all h-screen w-full flex items-center justify-center">
                    <LoadingIcon stroke="rgba(31, 41, 55,1)" className="w-32 h-32" />
                </div>
            );
        }
        return (
            <div className="main-list min-h-screen pt-24 pb-3 transition-all ">{cardElements}</div>
        );
    };

    return (
        <div className="App bg-pink-100 bg-gradient-to-b from-blue-200 min-h-screen">
            <AnimatePresence>
                {modal && <ModalPost data={modal} onBgClick={onCardOpenClick} />}
            </AnimatePresence>

            <AppHeader findValue={find} onFindValueChange={setFind} />
            <div className="main">
                <CheckCardElement />
            </div>
        </div>
    );
}

export default App;
