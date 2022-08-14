import { useEffect } from "react";

const TestApi = () => {
    const axios = require("axios").default;

    const testget = async () => {
        const json = await axios.get("http://localhost:8080/break/list");
        console.log(json.data);
    };

    useEffect(() => {
        testget();
    }, []);

    return;
};

export default TestApi;
