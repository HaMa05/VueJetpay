import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/merchant',
      name: 'main'
    },
    {
      path: '/merchant',
      name: 'merchant',
      component: () =>
        import('@/pages/merchants')
    },
    {
      path: '/paymentmethods',
      name: 'paymentmethods',
      component: () =>
        import('@/pages/paymentmethods'),
      children: [{
        path: '',
        name: 'inland',
        component: () =>
            import('@/views/paymentmethods/InLand')
      },
      {
        path: 'global',
        name: 'global',
        component: () =>
            import('@/views/paymentmethods/Global')
      }
      ]
    }
  ]
})
