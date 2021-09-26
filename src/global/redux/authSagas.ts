import { call, put, takeLatest } from "redux-saga/effects";
import { requestLogin, setAuth } from "./authSlice";
import axios from "axios";
import { ILoginWorkerSaga, LoginRequestPayload } from "./types";

export const authApiCalls = {
  login: (payload: LoginRequestPayload) => axios.post(`/auth/login`, payload),
};

export function* loginWorkerSaga({ payload }: ILoginWorkerSaga) {
  try {
    const { data } = yield call(authApiCalls.login, payload);

    if (data.isSuccess) {
      yield put(setAuth(data.data));
    }
  } catch {}
}

export function* authWatcherSaga() {
  yield takeLatest(requestLogin().type, loginWorkerSaga);
}
