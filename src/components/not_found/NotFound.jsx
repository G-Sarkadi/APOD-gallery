import NavButton from "../NavButton";

const NotFound = () => {
    document.title = 'Something went wrong'

    return (
        <>
            <div className="errorPage">
                <div className="errorContainer">
                    <h1>Oops! You seem to be lost.</h1>
                    <p>Sorry, the page you&apos;re looking for doesn&apos;t exists.</p>
                    <img className="errorImage" src="/error404.png" alt="error logo" />
                    <NavButton text="Home" route={"/"} />
                </div>
            </div>
        </>
    )
}

export default NotFound