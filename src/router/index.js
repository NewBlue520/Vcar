import Vue from 'vue'
import Router from 'vue-router'
import routerOpts from './routers'
Vue.use(Router);

function mapRoute(opt) {
  return opt.map((route, i) => {
    /*let {
      path = null,
      name = null,
      redirect = null,
      children = null,
      meta = null,
      component = null,
      components = null
    } = route;*/
    if (!route.children) route.children = [];
    if (!route.redirect) route.redirect = '';
    if (!route.meta) route.meta = {};
    if (!route.folderName) route.folderName = 'pages'; // 默认到/src/pages下去拿组件
    return {
      path: route.path,
      name: route.name,
      redirect: route.redirect,
      children: mapRoute(route.children),
      meta: route.meta,
      component: () => import(`@/${route.folderName}/${route.component}.vue`)
    }
  });
}

const routes = mapRoute(routerOpts);
export default new Router({
  routes
})

