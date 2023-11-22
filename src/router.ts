import { createRouter, createWebHashHistory } from 'vue-router';
import SwitchDemo from "./components/DocUI/SwitchDemo.vue";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/DocUI/ButtonDemo.vue";
import DialogDemo from "./components/DocUI/DialogDemo.vue";
import TabsDemo from "./components/DocUI/TabsDemo.vue";
import RadioDemo from "./components/DocUI/RadioDemo.vue";
import InputDemo from "./components/DocUI/InputDemo.vue";
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import RocketDemo from './views/RocketDemo.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: Intro },
        { path: "get-started", component: GetStarted },
        { path: "install", component: Install },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "rocket", component: RocketDemo },
        { path: "Radio", component: RadioDemo },
        { path: "Input", component: InputDemo },
        
      ],
    },
  ],
});