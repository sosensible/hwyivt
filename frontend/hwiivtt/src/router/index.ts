import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HelloWorld.vue"
import AgendaView from "../app/mwv3/AgendaView.vue"
import ComposeView from "../app/mwv3/ComposeView.vue"
import CypressView from "../app/mwv3/CypressView.vue"
import DevtoolsView from "../app/mwv3/DevtoolsView.vue"
import DockerView from "../app/mwv3/DockerView.vue"
import EnvvarView from "../app/mwv3/EnvvarView.vue"
import LocalstoreView from "../app/mwv3/LocalstoreView.vue"
import MirageJSView from "../app/mwv3/MirageJSView.vue"
import PiniaView from "../app/mwv3/PiniaView.vue"
import RouterView from "../app/mwv3/RouterView.vue"
import TypeScriptView from "../app/mwv3/TypeScriptView.vue"
import VitestView from "../app/mwv3/VitestView.vue"
import ViteView from "../app/mwv3/ViteView.vue"
import VolarView from "../app/mwv3/VolarView.vue"
import VuelaborationView from "../app/mwv3/VuelaborationView.vue"

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/mwv3/",
            name: "mwv_agenda",
            component: AgendaView
        },
        {
            path: "/mwv3/devstack",
            name: "mvw_devstack",
            component: DockerView
        },
        {
            path: "/mwv3/compose",
            name: "mwv3_compose",
            component: ComposeView
        },
        {
            path: "/mwv3/cypress",
            name: "mwv3_cypress",
            component: CypressView
        },
        {
            path: "/mwv3/devtools",
            name: "mwv3_devtools",
            component: DevtoolsView
        },
        {
            path: "/mwv3/envvar",
            name: "mwv3_envvar",
            component: EnvvarView
        },
        {
            path: "/mwv3/localstore",
            name: "mwv3_localstore",
            component: LocalstoreView
        },
        {
            path: "/mwv3/miragejs",
            name: "mwv3_miragejs",
            component: MirageJSView
        },
        {
            path: "/mwv3/pinia",
            name: "mwv3_pinia",
            component: PiniaView
        },
        {
            path: "/mwv3/router",
            name: "mwv3_router",
            component: RouterView
        },
        {
            path: "/mwv3/typescript",
            name: "mwv3_typescript",
            component: TypeScriptView
        },
        {
            path: "/mwv3/vitest",
            name: "mwv3_vitest",
            component: VitestView
        },
        {
            path: "/mwv3/vite",
            name: "mwv_vite",
            component: ViteView
        },
        {
            path: "/mwv3/volar",
            name: "mwv3_volar",
            component: VolarView
        },
        {
            path: "/mwv3/vuelaboration",
            name: "mwv3_vuelaboration",
            component: VuelaborationView
        }
    ]
})

export default router