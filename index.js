const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели ? ', '')
let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt("Один из послдених фильмов", ""),
      b = prompt("На сколько оцените его ?", ""),
      c = prompt("Один из послдених фильмов", ""),
      n = prompt("На сколько оцените его ?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = n;

console.log(personalMovieDB);