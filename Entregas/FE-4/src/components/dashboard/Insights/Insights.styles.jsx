import styled from 'styled-components';

export const Section = styled.section`
    box-shadow: 2px -1px 14px -1px #c7c7c7;
    background: #fff;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1rem;


    h3 {
        font-size: x-large;
        font-weight: bold;
        line-height: 2.3rem;
        margin-bottom: 1rem;
    }

    @media(min-width: 768px) {
        p {
            margin-bottom: 0.6rem;
        }
        width: 40%;
    }
`;
