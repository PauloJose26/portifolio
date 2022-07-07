import styled from "styled-components";


const Section = styled.section`
    width: 100%;
    display: flex;
    padding: 30px;
    background-color: rgb(255, 255, 255);
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
        height: 100vh;

        h2{
            font-size: 47px;
        }

        p{
            width: 50%;
            font-size: 25px;
            max-width: 600px;
        }
    }
`;


export {
    Section,
};
