import { ReactNode } from "react";
import { Wrapper, Container, Body, Header } from "./styled";

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