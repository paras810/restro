<template>
 <router-link to="/">Home</router-link> <br>
 <router-link to="/signup">Sign Up</router-link>
 <router-view></router-view>
</template>

<script >
import SignUp from './components/SignUp.vue';

export default {
    components: { SignUp }
}
</script>



