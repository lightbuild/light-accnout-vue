import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue';
import Label from '@/views/Label.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'*',
    name:'NotFound',
    component:NotFound
  },
  {
    path:'/',
    redirect:'money'
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path:'/label',
    name:'label',
    component: Label
  },
  {
    path:'/label/edit/:id',
    name:'edit',
    component:EditLabel
  },
  {
    path:'/statistics',
    name:'statistics',
    component:Statistics
  },
]

const router = new VueRouter({
  routes
})

export default router
