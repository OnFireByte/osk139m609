import { Doughnut } from "react-chartjs-2";
let ChartBox = (props) => {
    const uniChartData = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 100, 0);

        return {
            backgroundColor: gradient,
            labels: ["จุฬา", "บางมด", "วพม.", "มศว", "มก.", "มธ.", "มหิดล", "มอ.", "นมธ.", "มช."],
            datasets: [
                {
                    data: [21, 7, 3, 3, 2, 2, 2, 1, 1, 1],
                    backgroundColor: [
                        "#cf7cc2",
                        "#f08231",
                        "#2a2d7c",
                        "#ab0606",
                        "#006c67",
                        "#b7301f",
                        "#17468c",
                        "#17468c",
                        "#1e592d",
                        "#8651a3",
                    ],
                },
            ],
        };
    };

    const facultyChartData = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 100, 0);

        return {
            backgroundColor: gradient,
            labels: [
                "วิศวะ",
                "แพทย์",
                "สถาปัตย์",
                "เภสัช",
                "นิติ",
                "ทันตะ",
                "อักษร",
                "เทคนิคการแพทย์",
                "เศรฐศาสตร์",
                "สัตวแพทย์",
                "BBA",
            ],
            datasets: [
                {
                    data: [19, 9, 2, 2, 2, 2, 2, 1, 1, 1],
                    backgroundColor: [
                        "#003f5c",
                        "#58508d",
                        "#bc5090",
                        "#ff6361",
                        "#ffa600",
                        "#4b75de",
                        "#0093ec",
                        "#00abe2",
                        "#00bdca",
                        "#25ccad",
                    ],
                },
            ],
        };
    };

    const chartDataOption = {
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
            tooltip: {
                position: "nearest",
                padding: 12,
                displayColors: false,
                bodySpacing: 6,
                bodyFont: {
                    size: 24,
                    family: "HelvethaicaMon",
                },
            },
            legend: {
                display: false,
                position: "left",
                labels: {
                    font: {
                        size: 24,
                        family: "HelvethaicaMon",
                    },
                    color: "#ffffff",
                    padding: 12,
                },
            },
        },
    };
    return (
        <>
            <div className="transition-all grid lg:grid-cols-3 grid-cols-1 lg:py-12 lg:px-12 xl:px-24 mx-auto bg-white dark:bg-gray-800 rounded-3xl m-12 lg:w-2/3 w-4/5">
                <div className="order-1 w-full h-82 items-center justify-center p-8 lg:p-0">
                    <Doughnut
                        data={uniChartData}
                        className="h-full w-full"
                        options={chartDataOption}
                        plugins={{
                            datalabels: {
                                display: true,
                                color: "white",
                            },
                        }}
                    />
                </div>
                <div className="order-2 col-span-2 xl:text-5xl text-3xl flex items-center dark:text-white text-gray-900 lg:p-12 p-6 w-full">
                    <div className="w-4/5 mx-auto ">
                        <span className="text-4xl">
                            สถิติ: <br />
                        </span>
                        <div className="grid grid-cols-2 ">
                            <div>จุฬา : 21 คน</div>
                            <div>บางมด : 7 คน</div>
                            <div>วพม. : 3 คน</div>
                            <div>มศว : 3 คน</div>
                            <div>มก. : 2 คน</div>
                            <div>มธ. : 2 คน</div>
                            <div>มหิดล. : 2 คน</div>
                            <div>มอ. : 1 คน</div>
                            <div>นมธ. : 1 คน</div>
                            <div>มช. : 1 คน</div>
                        </div>
                    </div>
                </div>

                <div className="order-4 lg:order-3 col-span-2 xl:text-5xl text-3xl flex items-center dark:text-white text-gray-900 p-6 lg:p-12 w-full">
                    <div className="mx-auto w-full">
                        <div className="grid grid-cols-2 ">
                            <div>วิศวะ : 19 คน</div>
                            <div>แพทย์ : 9 คน</div>
                            <div>สถาปัตย์. : 2 คน</div>
                            <div>เภสัช : 2 คน</div>
                            <div>นิติ : 2 คน</div>
                            <div>ทันตะ : 2 คน</div>
                            <div>อักษร : 2 คน</div>
                            <div>MT: 2 คน</div>
                            <div>เศรฐศาสตร์ : 1 คน</div>
                            <div>สัตวแพทย์ : 1 คน</div>
                            <div>BBA : 1 คน</div>
                        </div>
                    </div>
                </div>
                <div className="order-3 lg:order-4 w-full h-82 items-center justify-center p-8 lg:p-0">
                    <Doughnut
                        className="h-full w-full"
                        data={facultyChartData}
                        options={chartDataOption}
                        plugins={{
                            datalabels: {
                                display: true,
                                color: "white",
                            },
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default ChartBox;
