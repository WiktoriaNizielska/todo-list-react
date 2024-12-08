
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Wiktoria Nizielska"
      body={
        <Wrapper>
          Hej!👋 Jestem Wiktoria, mam 26 lat i jestem frontend developerem. Uwielbiam robić artystyczne rzeczy takie jak rysowanie czy malowanie. Z wykształcenia jestem kosmetologiem, więc estetyka i dokładność leżą w mojej naturze. Bardzo lubię organizację, tworzenie planów dnia i określanie celów. Sporo się nauczyłam pracując na produkcji i magazynach. Oprócz tego lubię spędzać czas spacerując po górach lub lasach. ⛰️🌲
        </Wrapper>
      }
    />
  </Container>
);