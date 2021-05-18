import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";
import datas from "./data/data.json";
import Find from "./components/Find";

function App() {
    const [find, setFind] = useState("");
    const filteredDatas = datas.filter((data) => {
        let number = data.number.toString();
        let numberID = data.studentID.toString();
        let name = data.name.toLowerCase();
        let sirname = data.sirname.toLowerCase();
        let university = data.university.toLowerCase();
        let faculty = data.faculty.toLowerCase();
        let keywords = data.keywords?.map((keyword) => keyword.toLowerCase());
        return (
            number.includes(find) ||
            numberID.includes(find) | name.includes(find) ||
            sirname.includes(find) ||
            university.includes(find) ||
            faculty.includes(find) ||
            keywords?.some((keyword) => keyword.includes(find.toLowerCase()))
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
