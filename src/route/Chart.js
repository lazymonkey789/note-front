import { useEffect, useState } from "react";
import SetChart from "../component/SetChart";

const Chart = () => {
    const [Datas, setDatas] = useState([]);
    const [ChartX, SetChartX] = useState("");
    const axios = require("axios").default;

    const ChartVal = {};

    const getDatas = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setDatas(json.data);
    };
    useEffect(() => {
        getDatas();
    }, []);

    const onChartClick = (e) => {
        const {
            target: { id },
        } = e;
        /*         if (id === "전용회선") {
            let result = Datas.map((data) => data.LineNo);

            result.forEach((x) => {
                ChartVal[x] = (ChartVal[x] || 0) + 1;
            });
            console.log(ChartVal);
        }
        if (id === "근무자") {
            let result = Datas.map((data) => data.Worker);

            result.forEach((x) => {
                ChartVal[x] = (ChartVal[x] || 0) + 1;
            });
            console.log(ChartVal);
        } */

        let result = [];

        result = [
            Datas.map((data) => data.LineNo),
            Datas.map((data) => data.Worker),
        ];
        result[0].forEach((x) => {
            ChartVal[x] = (ChartVal[x] || 0) + 1;
        });
        console.log(ChartVal);
    };
    return (
        <div>
            <>
                <h2>Chart</h2>
            </>
            <>
                <button id="전용회선" onClick={onChartClick}>
                    전용회선
                </button>
            </>
            <>
                <button id="근무자" onClick={onChartClick}>
                    근무자
                </button>
            </>

            <SetChart />
        </div>
    );
};

export default Chart;
