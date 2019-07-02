<template>
  <div v-if = 'loading === false && error === false'>
  <div class = "background">
      <h1>{{this.$route.params.user}}'s Tier List</h1>
  </div>

   <div class = "tier-section">
     <h1 class = "tier-name" style = "background-color:#EFD469">S Tier</h1>
     <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 10})" 
        v-bind:key="i">
          <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name"  style = "background-color:#5ed5d1">A Tier</h1>
     <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 9})" 
        v-bind:key="i">
         <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#5ed5d1">B+ Tier</h1>
   <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 8})" 
        v-bind:key="i">
          <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

         <h1 class = "tier-name" style = "background-color:#45E499">B Tier</h1>
     <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 7})" 
        v-bind:key="i">
         <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#34CDF3">C+ Tier</h1>
 <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 6})" 
        v-bind:key="i">
          <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#9079EC">C Tier</h1>
      <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 5})" 
        v-bind:key="i">
         <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#F06DBF">D+ Tier</h1>
     <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 4})" 
        v-bind:key="i">
     <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#CF6767">D Tier</h1>
   <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 3})" 
        v-bind:key="i">
       <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>

      <h1 class = "tier-name" style = "background-color:#FC5555">F Tier</h1>
      <div>
        <span class = "image-container" v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score  < 3 && anime.score > 0})" 
        v-bind:key="i">
       <a :href="anime.url"  target="_blank" ><img :src="anime.image_url" alt="anime poster">
          <div class="middle"><div class="text">{{anime.title}}</div></div>
          </a>
        </span>
     </div>
   </div>
  </div>

  <div v-else-if="loading === true" class = "loading">
    <img src="../assets/loader.gif" alt="loader">
    <h1>Loading.....</h1>
  </div>

  <div v-else-if = "error === true" class = "loading">
    <h1>404: username does not exist</h1>
     <img src="../assets/shocked.png" alt="shocked face" style = "height: 300px; width:auto;">
  </div>

</template>

<script>
import getUserAnimeList from "@/api/getUserAnimeList";
import { setTimeout } from 'timers';

export default {
  name: 'AnimeTierList',
  data: () => {
    return{
      animeList: [],
      loading: true,
      error: false
    };
  },
 created(){
     getUserAnimeList.getUserAnimeList(this.$route.params.user)
     .then(response => {
          this.animeList = response.anime;
          this.animeList.sort(function(a, b){
            return b.score - a.score
          })
        this.loading = false;
      })
      .catch(err => {
        console.log("uwu");
        this.loading = false;
        this.error = true;
      });
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
}
a{
  text-decoration: none;
  color: black;
}
.background{
  background-color:  #A53244;
  color: white;
  padding: 20px 0;
}
.tier-section{
  display: grid;
  grid-template-columns: 10% 90%;
  grid-column-gap: 15px;
}
h1{
  margin: 0;
  text-align: center;
}
.tier-name{
  min-height: 150px;
}
.image-container{
  position: relative;
}
img{
  opacity: 1;
  height: 150px;
  width: 100px;
  transition: .5s ease;
  backface-visibility: hidden;
}
.middle {
  opacity: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 0;
  width: 100%;
}
.image-container:hover img {
  opacity: 0.3;
  cursor: pointer;
}

.image-container:hover .middle {
  opacity: 1;
  cursor: pointer;
}
.text{
  font-size: 14px;
}
.loading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin: 0 180px;
}
</style>
