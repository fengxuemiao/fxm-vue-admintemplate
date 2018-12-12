import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/',
      component: (reslove) => {
        require(["./views/Home.vue"], reslove)
      },
      meta: {
        title: "首页"
      },
      children: [{
          path: "",
          redirect: "about"
        },
        {
          path: "about",
          component: (reslove) => {
            require(["./views/About.vue"], reslove)
          },
          meta: {
            title: "关于"
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: (reslove) => {
        require(["./views/Login/index.vue"], reslove)
      },
      meta: {
        title: "登录"
      }
    },
    {
      path: '',
      redirect: "/"
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;