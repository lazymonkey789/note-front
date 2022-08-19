import { useQuery } from "react-query";

const GetTestAlarms = () => {
    const axios = require("axios").default;

    const { data } = useQuery([`alarms`], async () => {
        await axios.get("http://localhost:8080/detail-list");
        return data;
    });
    console.log(data);
};

export default GetTestAlarms;
