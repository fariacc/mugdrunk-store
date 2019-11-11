import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CarrinhoComponent from './components/carrinho/CarrinhoComponent.vue'
// import ContaComponent from './components/conta/ContaComponent.vue'
// import LoginComponent from './components/login/LoginComponent.vue'
// import RegisterComponent from './components/register/RegisterComponent.vue'
// import ResetPasswordComponent from './components/reset/ResetPasswordComponent.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home-component',
    component: HomeComponent
  },
  {
    path: '/carrinho',
    name: 'carrinho-component',
    component: CarrinhoComponent
  },
  // {
  //   path: '/conta',
  //   name: 'conta-component',
  //   component: ContaComponent
  // },
  // {
  //   path: '/login',
  //   name: 'login-component',
  //   component: LoginComponent
  // },
  // {
  //   path: '/register',
  //   name: 'register-component',
  //   component: RegisterComponent
  // },
  // {
  //   path: '/reset',
  //   name: 'reset-component',
  //   component: ResetPasswordComponent
  // },
];
