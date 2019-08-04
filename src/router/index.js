import Vue from 'vue';
import Router from 'vue-router';
import Match from '@/components/Match/Match';
import Chat from '@/components/Chat/Chat';
import Register from '@/components/Register/Register';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Match',
      component: Match,
      meta: {
        title: '配對',
      },
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat,
      meta: {
        title: '聊天',
      },
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
  ],
});
