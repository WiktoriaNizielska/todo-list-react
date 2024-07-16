import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button
      onClick={() => dispatch(fetchExampleTasks())}
      loading={loading}
    >
      {loading ? "Ładowanie..." : "Pobierz przyładowe zadania"}
    </Button>
  )
};

export default ExampleTasksButton;