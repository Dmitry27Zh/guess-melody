export type Id = string

export type Src = string

export type FormDataState<T = string | number | boolean> = {
  [name: Id]: T;
}

export const isBooleanFormDataState = (data: FormDataState): data is FormDataState<boolean> => {
  if (data === null) {
    return false;
  }

  return Object.values(data).every((value) => typeof value === 'boolean');
};
