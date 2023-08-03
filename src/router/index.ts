import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/community'
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/community.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('@/views/security.vue')
    },
    {
      path: '/cim',
      name: 'cim',
      component: () => import('@/views/cim.vue')
    },
    {
      path: '/energy',
      name: 'energy',
      component: () => import('@/views/energy.vue')
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('@/views/analysis.vue')
    }
  ]
})

export default router