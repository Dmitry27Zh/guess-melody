import { Id, Src } from './common';

export type Answer = {
  _id: Id;
}

export type GenreAnswer = Answer & {
  src: Src;
  genre: string;
}

export type ArtistAnswer = Answer & {
  artist: string;
  picture: string;
}

export type Song = {
  artist: string;
  src: Src;
}

export type QuestionGenre = {
  answers: GenreAnswer[];
  genre: string;
  type: string;
}

export type QuestionArtist = {
  answers: ArtistAnswer[];
  type: string;
  song: Song;
}

export type Question = QuestionGenre | QuestionArtist

export type Questions = Question[]
