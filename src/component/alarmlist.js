import { Link } from "react-router-dom";

const Alarmlist = ({ id, LineNo, Worker }) => {
    return (
        <div>
            <>
                <ul>
                    <li>
                        <Link to={`${id}`}>LineNo = {LineNo}</Link>
                    </li>
                    <li>Woker = {Worker}</li>
                </ul>
            </>
        </div>
    );
};

export default Alarmlist;
