import { call, put, select, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorge } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setLoading(exampleTasks));
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