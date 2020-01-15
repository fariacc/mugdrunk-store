import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CarrinhoComponent from './components/carrinho/CarrinhoComponent.vue'
import LoginComponent from './components/login/LoginComponent.vue'
import RegisterComponent from './components/register/RegisterComponent.vue'
import PagamentoComponent from './components/pagamento/PagamentoComponent.vue'
import AdminComponent from './components/admin/AdminComponent.vue'
import QuestionarioComponent from './components/questionario/QuestionarioComponent.vue'
import EmailComponent from './components/email/EmailComponent.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home-component',
    component: HomeComponent
  },
  {
    path: '/admin',
    name: 'admin-component',
    component: AdminComponent
  },
  {
    path: '/carrinho',
    name: 'carrinho-component',
    component: CarrinhoComponent
  },
  {
    path: '/login',
    name: 'login-component',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'register-component',
    component: RegisterComponent
  },
  {
    path: '/pagamento',
    name: 'pagamento-component',
    component: PagamentoComponent
  },
  {
    path: '/questionario',
    name: 'questionario-component',
    component: QuestionarioComponent
  },
  {
    path: '/contato',
    name: 'contato-component',
    component: EmailComponent
  }
];
