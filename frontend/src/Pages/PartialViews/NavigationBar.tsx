import { Link } from "react-router-dom"
import { UserDataHandler } from "../../Handlers/UserDataHandler";

const NavigationBar = () => {
    const userInfo = UserDataHandler();
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">Assignment</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li style={{ display: (userInfo.success) ? 'none' : 'block' }}>
                        <ul>
                            <li className="active"><Link to="/">Login</Link></li>
                            <li><Link to="/signup">Register</Link></li>
                        </ul>
                    </li>
                    <li style={{ display: (userInfo.success) ? 'block' : 'none' }}>
                        <ul>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavigationBar;