import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/components/buttons',
      name: 'buttons',
      component: () => import('@/views/components/buttons/ButtonsView.vue'),
    },
  ],
});

export default router;
