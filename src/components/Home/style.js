import styled from "styled-components";


const Banner = styled.section`
    width: 100%;
    height: 70vh;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);

    @media (min-width: 900px){
        flex-direction: row;
        align-items: stretch;
        height: 100vh;
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
        width: 100%;
    }

    @media (min-width: 900px) {
        width: 40%;

        figure{
            width: 350px;
            height: 350px;
        }
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
        width: 40%;

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
