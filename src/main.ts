import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Ben from './components/Ben.vue';
import Ben2 from './components/Ben2.vue';


const history = createWebHashHistory();


const router = createRouter({
  history,
  routes: [
    {path: '/', component: Ben},
    {path: '/xxx', component: Ben2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
