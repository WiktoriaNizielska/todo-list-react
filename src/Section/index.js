import "./style.css";
import { Wrapper, Container, Body, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Container>
            <Header alignment>{title}</Header>
            {extraHeaderContent}
        </Container>
        <Body>
            {body}
        </Body>
    </Wrapper>
);
export default Section;