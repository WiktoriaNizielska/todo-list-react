
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Container from '../../../common/Container';
import Header from '../../../common/Header';
import Section from '../../../common/Section';

function TaskPage() {
interface IdType {
  id: string;
}

  const { id } = useParams<IdType>();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "❌ Nie znaleziono zadania "}
        body={task && (
          <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
        )}
      />
    </Container>
  );
}

export default TaskPage;
