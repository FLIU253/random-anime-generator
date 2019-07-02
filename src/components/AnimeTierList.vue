<template>
  <div>
  <div class = "background">
      <h1>{{this.$route.params.user}}'s Tier List</h1>
  </div>

   <div class = "tier-section">
     <h1 class = "tier-name">S Tier</h1>
     <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 10})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">A Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 9})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">B+ Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 8})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

         <h1 class = "tier-name">B Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 7})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">C+ Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 6})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">C Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 5})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">D+ Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 4})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">D Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score === 3})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>

      <h1 class = "tier-name">F Tier</h1>
      <div>
        <img v-for = "(anime, i) in animeList.filter(function (anime){ return anime.score < 3 && anime.score > 0})" 
        v-bind:key="i" :src="anime.image_url" alt="anime poster">
     </div>
   </div>
  </div>
</template>

<script>
import getUserAnimeList from "@/api/getUserAnimeList";

export default {
  name: 'AnimeTierList',
  data: () => {
    return{
      animeList: []
    };
  },
 created(){
     getUserAnimeList.getUserAnimeList(this.$route.params.user)
     .then(response => {
        this.animeList = response.anime;
        this.animeList.sort(function(a, b){
          return b.score - a.score
        })
        console.log(this.animeList);
      })
      .catch(err => console.log(err));
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
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
img{
  height: 150px;
  width: 100px;
}
</style>
