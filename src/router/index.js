import { createRouter, createWebHistory } from "vue-router";
import AllProducts from '../components/AllProducts.vue';
import SelectedProduct from '../components/SelectedProject.vue';
import ErrorPage from '../views/ErrorPage.vue'


const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/home',
        redirect: '/products'
    },
    {
        path: '/products',
        name: 'Products',
        component: AllProducts
    }, {
        path: '/products/:id',
        name: 'selected-product',
        component: SelectedProduct
    }, {
        path: '/error',
        name: 'error-page',
        component: ErrorPage
    },

    {
        path: '/:catchAll(.*)',
        redirect: '/error',
        component: ErrorPage
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;