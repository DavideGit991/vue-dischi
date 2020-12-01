// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

var app = new Vue({
  el:"#app",
  data:{
    playList:[]
  },

  mounted:function () {
    axios
    .get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((risposta) =>{
      this.playList = risposta.data.response
      console.log(risposta.data.response);
      console.log(this.playList);

    })

  },







});
