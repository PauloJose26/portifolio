import styled from "styled-components";


const Section = styled.section`
    width: 100%;
    padding: 80px 20px 30px 20px;
    position: relative;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h2{
        font-size: 40px;
        font-weight: 900;
        color: rgb(255, 255, 255);
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (min-width: 900px) {
        height: 100vh;
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
        justify-content: start;
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
};
