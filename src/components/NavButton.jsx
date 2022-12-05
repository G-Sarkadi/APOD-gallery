import { useNavigate } from "react-router-dom";

const NavButton = ({ text, route }) => {
    const navigate = useNavigate();

    return (
        <button className="btn" onClick={() => navigate(route)}>{text}</button>
    )
}

export default NavButton