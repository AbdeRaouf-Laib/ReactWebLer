import { Link , NavLink} from "react-router-dom";
import Toggle from './toggle'
export default () => {
    return (
        <>
            <header className="hide-when-mobile">
                <h1><Link to="/">Courses 4 Arab</Link></h1>
                <ul className="flex">
                    <li className="main-list">
                        <NavLink className="main-Link" to="/html">
                            HTML
                        </NavLink>
                        <ul className="sub-ul">
                            <li>
                                <Link to="">Full Course</Link>
                            </li>
                            <li>
                                <Link to="">Crash Course</Link>
                            </li>
                            <li>
                                <Link to="">learn in 1h</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="main-list">
                        <NavLink className="main-Link" to="/css">
                            CSS
                        </NavLink>
                        <ul className="sub-ul">
                            <li>
                                <Link to="">Full Course</Link>
                            </li>
                            <li>
                                <Link to="">CSS Examples</Link>
                            </li>
                            <li className="mini-projects">
                                <Link to="">mini projects&nbsp; + </Link>
                                <ul className="sub-sub-ul">
                                    <li>
                                        <Link to="">project 1</Link>
                                    </li>
                                    <li>
                                        <Link to="">project 2</Link>
                                    </li>
                                    <li>
                                        <Link to="">project 3</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="main-list">
                        <NavLink className="main-Link" to="/javascript">
                            JavaScript
                        </NavLink>
                        <ul className="sub-ul sub-of-js">
                            <li>
                                <Link to="">coming soon🔥</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <Toggle/>
            </header>



            <header style={{ backgroundColor: "red" }} className="show-when-mobile">
                <h1>Courses 4 Arab</h1>
                <label className="absolute" htmlFor="burger">
                    <i className="fas fa-bars" />
                </label>
                <input id="burger" type="checkbox" />
                <div className="show-on-click">
                    <div className="main-div">
                        <label htmlFor="html">
                            HTML <i className="fas fa-plus" />
                        </label>
                        <input id="html" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <Link to="">Full Course</Link>
                            </li>
                            <li>
                                <Link to="">Crash Course</Link>
                            </li>
                            <li>
                                <Link to="">learn in 1h</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="main-div">
                        <label htmlFor="css">
                            CSS <i className="fas fa-plus" />
                        </label>
                        <input id="css" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <Link to="">Full Course</Link>
                            </li>
                            <li>
                                <Link to="">CSS Examples</Link>
                            </li>
                            <li>
                                <label className="mini-projects" htmlFor="mini">
                                    mini projects <i className="fas fa-plus" />
                                </label>
                                <input id="mini" type="checkbox" />
                                <ul className="sub-sub-div">
                                    <li>
                                        <Link to="">project 1</Link>
                                    </li>
                                    <li>
                                        <Link to="">project 2</Link>
                                    </li>
                                    <li>
                                        <Link to="">project 3</Link> 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="main-div">
                        <label htmlFor="js">
                            JavaScript <i className="fas fa-plus" />
                        </label>
                        <input id="js" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <Link to="">coming soon🔥</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}