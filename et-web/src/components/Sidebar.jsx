
import  { useState } from 'react';
import PropTypes from 'prop-types'; 
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faBars, faHouseChimney,faBookOpenReader,faTrophy,faComments ,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Sidebar = ({ children, userType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const adminMenuItems = [
        {
            path: "/ADHome",
            name: "Home",
            icon:  <FontAwesomeIcon icon={faHouseChimney} />
        },
        {
            path: "/about",
            name: "About Us",
            icon: <FontAwesomeIcon icon={faList} />
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FontAwesomeIcon icon={faTh} />
        },
    ]

    const studentMenuItems = [
        {
            path: "/STHome",
            name: "Home",
            icon:  <FontAwesomeIcon icon={faHouseChimney} />
        },
        {
            path: "/GradeBook",
            name: "GradeBook",
            icon: <FontAwesomeIcon icon={faBookOpenReader} />
        },
        {
            path: "/Achievements",
            name: "Achievements",
            icon:<FontAwesomeIcon icon={faTrophy} />
        },
        {
            path: "/Feedback",
            name: "Feedback",
            icon:<FontAwesomeIcon icon={faComments} />
        }

    ]
    //check wheter the admin or the student is logged in
    const menuItems = userType === 'admin' ? adminMenuItems : studentMenuItems;

    return (
        <div className="container">
            <div className="sidebar" style={{ width: isOpen ? "250px" : "50px" }}>
                <div className="top_sec">
                    {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo" >Edu Tracker</h1> */}
                    <div style={{ marginRight: isOpen ? "10px" : "0px" ,display:isOpen?"none":"block" }} className="bars" onClick={toggle} >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div style={{ marginRight: isOpen ? "10px" : "0px" ,display:isOpen? "block":"none"}} className="bars" onClick={toggle} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                </div>
                {
                    menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclass="active">
                            <div className="icon">{item.icon}</div>
                            <div className="icon_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
};


Sidebar.propTypes = {
    children: PropTypes.node,
    userType: PropTypes.string.isRequired, 
};

export default Sidebar;
