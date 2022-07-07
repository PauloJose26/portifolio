import { Section, Article } from "./style";
import {
    html,
    css,
    javascript,
    typescript,
    react,
    python,
    flask,
} from "../../image";


const Technology = () => {
    return (
        <Section>
            <h2>Tecnologias</h2>
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
                </div>
            </Article>
        </Section>
    );
};


export default Technology;
