import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref("");
let login = async (email,password)=>{
    try {
        let res = await auth.signInWithEmailAndPassword(email,password);
        if (!res) {
            throw new Error("can't login");
        } 
        return res;
    } catch (err) {
        error.value = err.message;
    }
}

let useLogin = ()=>{
    return {error,login};
}

export default useLogin;