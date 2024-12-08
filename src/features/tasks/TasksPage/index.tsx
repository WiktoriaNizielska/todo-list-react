// import Form from "./Form/index.js";
// import TasksList from "./TasksList/index.js";
// import TasksButtons from "./Buttons/TasksButtons/index.js";
// import ExampleTasksButton from "./Buttons/ExampleTasksButton/index.js";
// import Section from "../../../common/Section/index.js";
// import Header from "../../../common/Header/index.js";
// import Container from "../../../common/Container/index.js";
// import Search from "./Search/index.js";

import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ExampleTasksButton from "./Buttons/ExampleTasksButton";
import TasksButtons from "./Buttons/TasksButtons";
import Form from "./Form";
import Search from "./Search";
import TasksList from "./TasksList";

function TasksPage() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form/>}
                extraHeaderContent={<ExampleTasksButton />}
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
