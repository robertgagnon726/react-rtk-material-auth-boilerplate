import { all } from "redux-saga/effects";
import { authWatcherSaga } from "../global/redux/authSagas";

export default function* rootSaga() {
  yield all([authWatcherSaga()]);
}
