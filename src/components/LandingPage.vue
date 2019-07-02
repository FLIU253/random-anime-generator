<template>
 <div class = "main">
   <div class = "grid-section">
     <div>
      <GithubCorner url='https://github.com/Roeefl/vue-github-corners' cornerColor='#000000' gitColor='#FFFFFF' :size = "120"></GithubCorner>
     <h1>Random Anime Generator</h1>
     <button style = "margin-bottom: 20px"><router-link :to="{ name: 'RandomShow' }" >Generate!</router-link></button>
     <h1 style = "margin: 0">Tier List Generator</h1>
      <div class = "search-section">
        <input type="text" placeholder="enter username here" v-model="user">
        <i class="fas fa-search"></i>
      </div>
      <button style = "margin-top: 20px;"><router-link :to="{ name: 'AnimeTierList', params: {user} }" >Generate Tier List!</router-link></button>
     </div>
     <div>
       <img src="../assets/mitsuha.png" alt="mitsuha poster">
     </div>
   </div>
 </div>
</template>

<script>
import GithubCorner from 'vue-github-corners';

export default {
  name: 'LandingPage',
  components: {
    GithubCorner
  },
  data: () => {
    return{
      user: 'Enter MAL username!'
    };
  },
  created(){
  },
  methods:{
   
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
  width: 100%;
}
.search-section{
  display: inline-flex;
  align-items: center;
  position: relative;
  border: #d8d2d2 1px solid;
  border-radius: 4px;
  margin-top: 20px;
  width: 100%;
}
input{
  width: 100%;
  max-width: 100%;
  flex: 1;
  padding: 7px 14px;
  font-size: 20px;
  margin: 0;
  outline: none;
  border: 0;
}
.search-section i{
  padding: 7px 14px;
  font-size: 22px;
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
.grid-section{
  display: grid;
  grid-template-columns: 75% 25%;
  height: 300px;
  justify-content: center;
  align-items: center;
}
img{
  max-height:300px;
  width:auto;
}

@media screen and (max-width: 800px) {
  img{
    height:0;
    width:0;
  }
  .grid-section{
    display:block;
    text-align: center;
  }
  h1, input, a{
    font-size: 15px;
  }
  .search-section, button{
    width: 80%
  }
  
}

</style>
