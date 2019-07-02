<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import LandingPage from './components/LandingPage';

export default {
  name: 'app',
  components: {
    LandingPage
  },
}
</script>

<style>
*{
  font-family: 'Nunito', sans-serif;
  margin: 0;
}
</style>
