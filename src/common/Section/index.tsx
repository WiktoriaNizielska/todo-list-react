import { ReactNode } from "react";
import { Body, Container, Header, Wrapper } from "./styled";

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
    <Wrapper>
        <Container>
            <Header $alignment>{title}</Header>
            {extraHeaderContent}
        </Container>
        <Body>
            {body}
        </Body>
    </Wrapper>
);
export default Section;