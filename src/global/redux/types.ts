export interface LoginRequestPayload {
  email: string;
  password: string;
}

export interface AuthState {
  email: string | null;
  loading: boolean;
}

export interface ILoginWorkerSaga {
  type: string;
  payload: LoginRequestPayload;
}
