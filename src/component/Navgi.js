import { Link } from "react-router-dom";

const Navi = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="alarm">Alarm</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navi;
