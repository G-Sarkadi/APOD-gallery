import NavButton from "./NavButton";

const NotFound = () => {
    return (
        <div className="errorContainer">
            <h1>Oops! You seem to be lost.</h1>
            <p>Sorry, the page you're looking for doesn't exists.</p>
            <img className="errorImage" src="/error404.png" alt="error logo"/>
            <NavButton text={"Home"} route={"/"} />
        </div>
    )
}

export default NotFound