import { Questions } from '../types/question';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const questions: Questions = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'rock'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'blues'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        genre: 'jazz'
      },
      {
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
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'John Snow'
      },
      {
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'Jack Daniels'
      },
      {
        artist: `${AVATAR_URL}?rnd=${Math.random()}`,
        picture: 'Jim Beam'
      },
    ]
  }
];
