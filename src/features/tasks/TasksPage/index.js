import Form from "./Form";
import TasksList from "./TasksList";
import TasksButtons from "./Buttons/TasksButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Wyszukiwarka"
                body={<Search />}
            />
            <Section
                title="Lista zadań"
                body={<TasksList />}
                extraHeaderContent={<TasksButtons />}
            />
        </Container>
    );
}

export default TasksPage;
