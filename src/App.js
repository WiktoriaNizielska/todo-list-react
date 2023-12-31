import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"


function App() {
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, content: "zrobić obiad", done: true },
        { id: 2, content: "poćwiczyć", done: false },
    ]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(task => task.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(task => task.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />

            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone}
                    />
                }
            />
        </Container>
    );
}

export default App;
