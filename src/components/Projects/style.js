import styled from "styled-components";


const Section = styled.section`
    width: 100%;
    padding: 35px 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    h2{
        font-size: 40px;
        font-weight: 900;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    a{
        width: 100%;
        max-width: 700px;
    }

    img {
        width: 100%;
    }
`;


export {
    Section,
};
