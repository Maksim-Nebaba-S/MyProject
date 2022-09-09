const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели ? ', '')
let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10)
{
    alert("Просмотрено довольно мало фильмов");
    
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель");
}
else if ( personalMovieDB.count >=30){
    alert("Вы киноман");
}
else alert("Ошибка");

let a, b, c,d;
for(let i = 0; i<2; i++){
      for(let y=0; y<1; y--){
      a = prompt("Один из последних фильмов", "");
      if (a !== null && a !== "" && a.length < 50){
      
      break;
      }
      else {alert("Введите снова");}
      }
      for(let u=0; u<1; u--){
      b = +prompt("На сколько оцените его ?", "");
      if (b !== null && b !== ""){
     
      c = a;
      d = b;
      
      break;
      }
      else {
        alert(b);
        alert("Введите снова");
      }
      
      

      }
      
      personalMovieDB.movies[c] = d;
    }




console.log(personalMovieDB);




