import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../../tasksSlice";
import { Button } from "../styled";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przyładowe zadania"}
    </Button>
  );
};

export default ExampleTasksButton;
