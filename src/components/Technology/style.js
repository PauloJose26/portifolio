import styled from "styled-components";


const Section = styled.section`
    width: 100%;
    padding: 30px 20px;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    h2{
        font-size: 40px;
        font-weight: 900;
        color: rgb(255, 255, 255);
    }

    @media (min-width: 900px) {
        height: 100vh;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: 900px){
        flex-direction: row;
    }
`;

const Article = styled.article`
    width: 100%;
    max-width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;

    h3 {
        font-size: 25px;
        font-weight: 900;
    }

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-self: stretch;
        gap: 15px;
    }

    img {
        width: 60px;
    }
`;


export {
    Section,
    Article,
    Div,
};
