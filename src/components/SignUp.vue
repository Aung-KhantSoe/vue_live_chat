<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">
            <p>{{ error }}</p>
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import {auth} from '../firebase/config';
import useSignUp from "../composables/useSignUp"

export default {
    setup(props,ctx){
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        let {error,createAccount} = useSignUp();
        let signup = async()=>{
            let res = await createAccount(email.value,password.value,displayName.value);
            if(res){
                ctx.emit('enterChat');
            }
        }
        

        return {displayName,email,password,signup,error};
    }
}
</script>

<style>

</style>