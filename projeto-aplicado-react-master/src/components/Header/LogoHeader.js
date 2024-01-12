import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function LogoHeader() {
    return (

        <div>
            <Link to="/">
                <img className="header-logo" src={logo} alt="" />
            </Link>
        </div>
    )
}

export default LogoHeader;