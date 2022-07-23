import styled from "styled-components";

const Title = styled.div`
    font-family: monospace;
    font-size: 2rem;
    text-align: left;
    width: 50%;
    margin: auto;
    padding: 2%;
`;

const Subtitle = styled(Title)`
    display: flex;
    color: grey;
    font-size: 1rem;
    padding: 0 0 1% 0;
`;

const Loading = styled.pre`
    width: 50%;
    margin: auto;
`;

export { Title, Subtitle, Loading } 