import { Questions } from '../types/question';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const questions: Questions = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [
      {
        _id: String(Math.random()).slice(0, 5),
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'rock'
      },
      {
        _id: String(Math.random()).slice(0, 5),
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'blues'
      },
      {
        _id: String(Math.random()).slice(0, 5),
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'jazz'
      },
      {
        _id: String(Math.random()).slice(0, 5),
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'rock'
      }
    ]
  },
  {
    type: 'artist',
    song: {
      artist: 'Jim Beam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg'
    },
    answers: [
      {
        _id: String(Math.random()).slice(0, 5),
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'John Snow'
      },
      {
        _id: String(Math.random()).slice(0, 5),
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'Jack Daniels'
      },
      {
        _id: String(Math.random()).slice(0, 5),
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'Jim Beam'
      },
    ]
  }
];
