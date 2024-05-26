import backgroundImage from "../assets/city-background.jpg";
import fiveMLogo from "../assets/fivemlogo.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-information-background">
                <img src={backgroundImage} alt="background-image" className="background-image" />
            </div>
            <div className="home-information">
                <div className="left-column">
                    <div className="title-rectangle">
                        <img src={fiveMLogo} alt="fivem-logo" className="fivem-logo" />
                        <h1>Bienvenido a [servidor]</h1>
                    </div>
                </div>
                <div className="right-column">
                    <div className="server-information">
                        <h2>Información del servidor</h2>
                        <p>¡Bienvenido a [servidor]! Somos una comunidad de roleplay en español que se esfuerza por brindar una experiencia de juego única y divertida. Nuestro servidor está alojado en [hosting] y cuenta con una amplia variedad de trabajos, vehículos y actividades para que disfrutes. ¡Únete a nosotros y comienza tu aventura en [servidor]!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
