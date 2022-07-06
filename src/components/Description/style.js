import styled from "styled-components";


const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 35px;
        font-weight: 900;
        margin-bottom: 20px;
    }

    p{
        font-size: 20px;
        text-align: justify;
    }

    @media (min-width: 900px){
        flex-direction: row;
        justify-content: space-evenly;

        h2{
            font-size: 47px;
        }

        p{
            width: 50%;
            max-width: 600px;
        }
    }
`;


export {
    Section
};
