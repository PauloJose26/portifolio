import { Section, Article, Div, } from "./style";
import {
    html,
    css,
    javascript,
    typescript,
    react,
    python,
    flask,
    django,
    express,
    nodejs,
    postgresql,
} from "../../image";


const Technology = () => {
    return (
        <Section id="technology">
            <h2>Tecnologias</h2>
            <Div>
                <Article>
                    <h3>Front-End</h3>
                    <div>
                        <img src={ html } alt="HTML5" />
                        <img src={ css } alt="CSS3" />
                        <img src={ javascript } alt="JavaScript" />
                        <img src={ typescript } alt="TypeScript" />
                        <img src={ react } alt="React" />
                    </div>
                </Article>
                <Article>
                    <h3>Back-End</h3>
                    <div>
                        <img src={ python } alt="Python" />
                        <img src={ flask } alt="Flask" />
                        <img src={ django } alt="Django" />
                        <img src={ nodejs } alt="NodeJs" />
                        <img src={ express } alt="Express" />
                        <img src={ typescript } alt="TypeScript" />
                        <img src={ postgresql } alt="PostGreSQL" />
                    </div>
                </Article>
            </Div>
        </Section>
    );
};


export default Technology;
