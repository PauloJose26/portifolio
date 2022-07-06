import styled from "styled-components";


const Banner = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);

    @media (min-width: 900px){
        flex-direction: row;
        align-items: stretch;
    }
`;

const Image = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
        width: 200px;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    img {
        width: 200px;
    }

    @media (min-width: 900px) {
        width: 30%;
    }
`;

const Description = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    h1 {
        font-size: 35px;
        color: rgb(255, 255, 255);
    }
    p {
        font-size: 20px;
        color: rgb(255, 255, 255);
    }

    @media (min-width: 900px) {
        width: 30%;

        h1 {
            font-size: 47px;
        }
        p{
            font-size: 30px;
        }
    }
`;


export {
    Banner,
    Image,
    Description,
};
