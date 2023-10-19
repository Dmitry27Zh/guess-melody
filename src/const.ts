export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKE_COUNT = 1;
export const TIMEOUT_SHOW_ERROR = 3000;

export enum AppRoute {
  Login = '/login',
  Lose = '/lose',
  Result = '/result',
  Root = '/',
  Game = '/game'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum GameType {
  Genre = 'genre',
  Artist = 'artist'
}

export enum APIRoute {
  Questions = '/questions',
  Login = '/login',
  Logout = '/logout'
}
