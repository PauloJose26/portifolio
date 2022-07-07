import { IoIosClose } from "react-icons/io"

import { Div, DivMenu, LinkMenu } from "./style";


const ModalMenu = ({ setMenu }) => {
    return (
        <Div>
            <DivMenu>
                <IoIosClose className="closed" onClick={ () => setMenu(false) } />
                <LinkMenu href="#banner">{ "< Dev / Paulo >" }</LinkMenu>
                <LinkMenu href="#description">Sobre</LinkMenu>
                <LinkMenu href="#technology">Tecnologias</LinkMenu>
                <LinkMenu>Qualificações</LinkMenu>
                <LinkMenu href="#projects">Projetos</LinkMenu>
            </DivMenu>
        </Div>
    );
};


export default ModalMenu;
