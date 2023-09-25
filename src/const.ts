export const Setting = {
  ErrorsCount: 4,
};

export enum AppRoute {
  Login = '/login',
  Lose = '/lose',
  Result = '/result',
  Root = '/',
  DevArtist = '/dev-artist',
  DevGenre = '/dev-genre'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
