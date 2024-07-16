import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "../styled";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone, fetchExampleTasks } from "../../../tasksSlice";

const TasksButtons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <Wrapper>
                <Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przyładowe zadania </Button>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </Button >
            </Wrapper>
        ))
};

export default TasksButtons;