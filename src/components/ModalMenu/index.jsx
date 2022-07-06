import { IoIosClose } from "react-icons/io"

import { Div, DivMenu, LinkMenu } from "./style";


const ModalMenu = ({ setMenu }) => {
    return (
        <Div>
            <DivMenu>
                <IoIosClose className="closed" onClick={ () => setMenu(false) } />
                <LinkMenu>{ "< Dev / Paulo >" }</LinkMenu>
                <LinkMenu>Sobre</LinkMenu>
                <LinkMenu>Tecnologias</LinkMenu>
                <LinkMenu>Qualificações</LinkMenu>
                <LinkMenu>Projetos</LinkMenu>
            </DivMenu>
        </Div>
    );
};


export default ModalMenu;
