import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";
import datas from "./data/data.js";
import Find from "./components/Find";

function App() {
    const [find, setFind] = useState("");

    const filteredDatas = datas.filter((data) => {
        let number = data.number.toString();
        let numberID = data.studentID.toString();
        return (
            number.includes(find) ||
            data.name.includes(find) ||
            data.sirname.includes(find) ||
            data.university.includes(find) ||
            data.faculty.includes(find) ||
            numberID.includes(find)
        );
    });

    const cardElements = filteredDatas.map((data, index) => {
        return <Card key={data.number} data={data} />;
    });

    return (
        <div className="App">
            <AppHeader />
            <div className="main">
                <Find value={find} onValueChange={setFind} />
                <div className="main-list">{cardElements}</div>
            </div>
        </div>
    );
}

export default App;
