import { Link } from "react-router-dom";

const Alarmlist = ({ id, LineNo, Worker }) => {
    return (
        <tbody>
            <tr>
                <td>#</td>
                <td>
                    <Link to={`${id}`}>{LineNo}</Link>
                </td>
                <td>{Worker}</td>
            </tr>
        </tbody>
    );
};

export default Alarmlist;
