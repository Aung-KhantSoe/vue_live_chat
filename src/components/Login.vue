<template>
    <h2>Login</h2>
    <form @submit.prevent="signin">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">
            <p>{{ error }}</p>
        </div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/firebase/config';
import useLogin from '../composables/useLogin';

export default {
    // emits:['enterChat'],
    setup(props,context){
        
        let email = ref('');
        let password = ref('');

        let {error,login} = useLogin();

        let signin = async()=>{
            try {
                let res = await login(email.value,password.value);
                if (res) {
                    context.emit("enterChat");
                }
            } catch (err) {
                error = err.message;
            }
        }
        return {email,password,login,error,signin};
    }
}
</script>

<style>

</style>