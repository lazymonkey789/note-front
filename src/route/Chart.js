import { useEffect, useState } from "react";
import SetChart from "../component/SetChart";

const Chart = () => {
    const [Datas, setDatas] = useState([]);
    const [ButtonId, SetButtonId] = useState("");
    const [ChartX, SetChartX] = useState("");
    const [Xindex, SetXindex] = useState([]);
    const [Xval, SetXval] = useState([]);

    const axios = require("axios").default;

    const getDatas = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setDatas(json.data);
    };
    useEffect(() => {
        getDatas();
    }, []);
    console.log(Datas.LineNo);
    const onChartClick = (e) => {
        const {
            target: { id },
        } = e;
        SetButtonId(id);
        let res = [];

        if (id === "전용회선") {
            let result = Datas.map((data) => data.LineNo);
            SetXindex(Array.from(new Set(result)));
            result.forEach((x) => {
                res[x] = (res[x] || 0) + 1;
            });
            SetXval(res);

            console.log(Xindex);
            console.log(Xval);
        }

        if (id === "근무자") {
            let result = Datas.map((data) => data.Worker);

            result.forEach((x) => {
                res[x] = (res[x] || 0) + 1;
            });
            SetChartX(result);
            console.log(ChartX);
        }
        /*         if (id === "근무자") {
            let result = Datas.map((data) => data.Worker);

            result.forEach((x) => {
                res[x] = (res[x] || 0) + 1;
            });
            SetChartX(res);
            console.log(res);
        } */
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

            <SetChart ButtonId={ButtonId} Datas={ChartX} />
        </div>
    );
};

export default Chart;
