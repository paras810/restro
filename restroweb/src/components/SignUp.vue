<template>
<div class="form">
    <img src="../assets/download.png" alt="" class="logo">
    <h2>Sign Up</h2>

</div>
<div class="register">
    <input type="text" :placeholder="enter" v-model="name">
    <input type="email" placeholder="enter your email" v-model="email">
    <input type="password" placeholder="enter your password" v-model="password">
    <button @click="getData">SignUp</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            enter: 'enter your name',
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async getData() {
            // alert('getting data')
            console.log(this.name, this.email, this.password)
            let url = 'http://localhost:3000/users'
            let result = await axios.post(url, {
                email: this.email,
                name: this.name,
                password: this.password
            })
            console.log(result)
            if (result.status === 201) {
                alert('user sign up successfully')
            } else {
                alert('some error occured')
            }
            localStorage.setItem('user_info', JSON.stringify(result.data))
            this.$router.push({name:'home'})
            this.name = ''
            this.email = ''
            this.password = ''

        }
    },
    mounted() {
        console.log('mounted')
        
    },
}
</script>

<style scoped>
.logo {
    width: 60px;
}

.form {
    /* border: 2px salmon solid; */
    text-align: center;
    padding-top: 15px;
}

.register {
    /* border: 2px slateblue solid; */
    text-align: center;
}

.register input {
    border: 2px rgb(245 206 131 / 97%) solid;
    width: 300px;
    height: 40px;
    display: block;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;

}

.register button {
    border: 2px rgb(245 206 131 / 97%) solid;
    background-color: rgb(245 206 131 / 97%);
    color: black;
    padding: 7px 21px;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;
    width: 320px;
    transition: all .3s ease-in;

}

.register button:hover {
    border: 2px rgb(245 206 131 / 97%) solid;
    background-color: white;
    color: orange;
}
</style>
