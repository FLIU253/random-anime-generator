<template>
  <div v-if = "loading === false" class="main-section">
    <div v-if="show != undefined"  class="grid-section">
      <img v-if="show.image_url != null"  :src="show.image_url" alt="">
     <div>
        <h1>{{show.title}}</h1>
        <div style = "text-align: left;">
          <span v-for = "(genre, i) in show.genres" v-bind:key="i" class = "genre">{{genre.name}}, </span>
        </div>
        <p class = "synopsis">{{show.synopsis}}</p>
     </div>
     <div style = "text-align:left;">
       <p v-if = "show.score != null || show.score != undefined"><strong>score: </strong> {{show.score}}</p>
       <p v-if = "show.rank != null || show.rank != undefined"><strong>ranking: </strong>{{show.rank}}</p>
       <p v-if = "show.popularity != null || show.popularity != undefined"><strong>popularity: </strong>{{show.popularity}}</p>
       <p v-if = "show.members != null || show.members != undefined"><strong>members: </strong>{{show.members}}</p>
       <p v-if = "show.favorites != null || show.favorites != undefined"><strong>favorites: </strong>{{show.favorites}}</p>
       <p v-if = "show.status != null || show.status != undefined"><strong>status: </strong>{{show.status}}</p>
       <p v-if = "show.source != null || show.source != undefined"><strong>source: </strong>{{show.source}}</p>
     </div>
    </div>
  </div>
  <div v-else class = "main-section">
    <img src="../assets/loader.gif" alt="loader">
    <h1>Loading.....</h1>
  </div>
</template>

<script>
import getAnime from "@/api/getAnime";

export default {
  name: 'RandomShow',
  data: () => {
    return{
      show: [],
      loading: true
    };
  },
 created(){
  getAnime.getRandomShow()
    .then(response => {
      this.show = response;
      this.loading = false;
    })
    .catch(err => console.log(err));      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin: 0 180px;
}
.grid-section{
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  background: #F5F5F5;
  padding: 2em;
}

h1{
  margin: 0;
  max-height: 100px;
  font-size: 20px;
  text-align: left;
}
img{
  height: 300px;
  width: auto;
  max-width:270px;
}
P{
  margin-top: 0px;
  margin-bottom: 15px;
}
.genre{
  font-size:14px;
}
.synopsis{
    max-height: 200px;
    overflow-y: hidden; 
    text-align: left;
}
.synopsis:hover{
    overflow-y: scroll; 
}
.synopsis::-webkit-scrollbar-track
{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

.synopsis::-webkit-scrollbar
{
    width: 6px;
    background-color: #F5F5F5;
}

.synopsis::-webkit-scrollbar-thumb
{
     box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #D62929;
}
</style>
