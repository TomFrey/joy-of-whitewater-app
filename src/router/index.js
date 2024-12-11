import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import StateView from '@/views/StateView.vue';
import EventView from '@/views/EventView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/state',
            name: 'state',
            component: StateView,
        },
        {
            path: '/event',
            name: 'event',
            component: EventView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;