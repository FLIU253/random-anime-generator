<template>
 <div class = "main">
   <h1>Random Anime Generator</h1>
   <button v-on:click="generateRandom"><router-link :to="{ name: 'RandomShow' }" >Generate!</router-link></button>
 </div>
</template>

<script>
import getAnime from "@/api/getAnime";

export default {
  name: 'LandingPage',
  data: () => {
    return{

    };
  },
  created(){
  },
   methods:{
    generateRandom: (event)=> {
       getAnime.getRandomShow()
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));      
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
button{
  border: #d8d2d2 1px solid;
  border-radius: 4px;
  background: #DE4F62;
  min-height:40px;
  box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);
  padding: 7px 14px;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: all .4s;
}
button:hover{
  background: #A53244;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: lighter;
}
</style>
