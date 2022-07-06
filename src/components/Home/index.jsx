import { Banner, Image, Description } from "./style";
import Perfil from "../../image/Perfil.jpg";


const Home = () => {
    return (
        <Banner>
            <Image>
                <figure>
                    <img src={ Perfil } alt="Foto do perfil" />
                </figure>
            </Image>
            <Description>
                <h1>Paulo José</h1>
                <p>Desenvolvedor Full Stack</p>
            </Description>
        </Banner>
    );
};


export default Home;
