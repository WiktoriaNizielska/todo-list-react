import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorge } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!")
  }
}

function* saveTasksInLocalStorgeHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorge, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorgeHandler);
}