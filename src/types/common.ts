export type Id = string

export type Src = string

export type FormDataState<T = string | number | boolean> = {
  [name: Id]: T;
}
