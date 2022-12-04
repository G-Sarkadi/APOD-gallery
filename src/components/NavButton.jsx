import { useNavigate } from "react-router-dom";

const NavButton = ({ text, route }) => {
    const navigate = useNavigate();
    
    return (
        <p >
            <button className="navButton" onClick={() => navigate(route)}>{text}</button>
        </p>
    )
}

export default NavButton