import { useNavigate, useParams } from "react-router-dom";

const DetailAlarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    const axios = require("axios").default;
    const { id } = useParams();
    const navigate = useNavigate();

    const onDeleteClick = () => {
        axios.delete(`http://localhost:8080/detail-list/${id}`);
        navigate("../alarm", { replace: true });
    };
    const onUpdate = () => {
        window.location.replace(`#/alarm/modify/${id}`);
    };

    return (
        <div>
            <>DetailAlarm</>
            <hr></hr>
            <ul>
                <li>전용회선번호= {LineNo}</li>
                <li>근무자= {Worker}</li>
                <li>장애시간= {ReportTime}</li>
                <li>원인= {Cause}</li>
            </ul>

            <footer>
                <button onClick={onDeleteClick}>삭제하기</button>
                <button onClick={onUpdate}>수정하기</button>
                {/*                 <Link to={`/alarm/modify/${id}`}>수정하기</Link>
                 */}{" "}
            </footer>
        </div>
    );
};

export default DetailAlarm;
