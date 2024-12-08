import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorge } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
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
