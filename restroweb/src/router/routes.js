import {createWebHistory, createRouter} from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'



const routes=[
    {  
    name:'home',
    path:'/',
    component: Home

},
{
    name:'sign up',
    path: '/signup',
    component: SignUp
}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
