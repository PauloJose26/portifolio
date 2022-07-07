import { Section } from "./style";
import { BurguerKenzie, DoIt, KenzieShop, SmartShop} from "../../image/Qualifications";


const Projects = () => {
    return (
        <Section id="projects">
            <h2>Projetos</h2>
            <div>
                <a target="_blank" rel="noreferrer" href="https://react-entrega-s5-hamburgueria-2-0-com-typescript-jso-psjgypymy.vercel.app">
                    <img src={ BurguerKenzie } alt="Burguer Kenzie" />
                </a>
                <a  target="_blank" rel="noreferrer" href="https://doit-s5.vercel.app">
                    <img src={ DoIt } alt="Do It" />
                </a>
                <a  target="_blank" rel="noreferrer" href="https://react-entrega-s3-kenzishop-com-context-api-paulojose26.vercel.app">
                    <img src={ KenzieShop } alt="Kenzie Shop" />
                </a>
                <a  target="_blank" rel="noreferrer" href="https://react-entrega-s3-kenzieshop-paulojose26.vercel.app">
                    <img src={ SmartShop } alt="Smart Shop" />
                </a>
            </div>
        </Section>
    );
};


export default Projects;