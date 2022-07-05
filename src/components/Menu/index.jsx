import { Header, DivIcons, DivMenu, LinkIcon, LinkMenu } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Menu = () => {
    return (
        <Header>
            <DivIcons>
                <LinkIcon>
                    <AiFillGithub />
                </LinkIcon>
                <LinkIcon>
                    <AiFillLinkedin />
                </LinkIcon>
            </DivIcons>
            <DivMenu>
                <LinkMenu>{ "< Dev / Paulo >" }</LinkMenu>
                <LinkMenu>Sobre</LinkMenu>
                <LinkMenu>Tecnologias</LinkMenu>
                <LinkMenu>Qualificações</LinkMenu>
                <LinkMenu>Projetos</LinkMenu>
            </DivMenu>
        </Header>
    );
};


export {
    Menu,
};
