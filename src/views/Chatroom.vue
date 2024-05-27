<template>
  <div class="container">
    <NavBar></NavBar>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import NavBar from '../components/NavBar'
import { watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { NavBar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push("/")
      }
    });
  }
}
</script>

<style>

</style>