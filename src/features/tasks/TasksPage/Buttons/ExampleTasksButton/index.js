import { Button } from "../styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przyładowe zadania
    </Button>
  )
};

export default ExampleTasksButton;