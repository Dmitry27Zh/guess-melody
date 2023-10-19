import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';
import { processErrorHandle } from './process-error-handle';
import { StatusCodes } from 'http-status-codes';


const BACKEND_URL = 'https://13.design.pages.academy/guess-melody';
const REQUEST_TIMEOUT = 5000;

type AxiosErrorResponseData = {
  message: string;
}

const ErrorStatusCodes = [StatusCodes.BAD_REQUEST, StatusCodes.UNAUTHORIZED, StatusCodes.NOT_FOUND];
const shouldDisplayError = (status: StatusCodes) => ErrorStatusCodes.includes(status);

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<AxiosErrorResponseData>) => {
      if (error.response && shouldDisplayError(error.response.status)) {
        const message = error.response.data.message;
        processErrorHandle(message);
      }

      return error;
    }
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};
