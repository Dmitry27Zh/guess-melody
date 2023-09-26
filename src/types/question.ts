import { Id } from './common';

export type Answer = {
  _id: Id;
}

export type GenreAnswer = Answer & {
  src: string;
  genre: string;
}

export type ArtistAnswer = Answer & {
  artist: string;
  picture: string;
}

export type Song = {
  artist: string;
  src: string;
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
