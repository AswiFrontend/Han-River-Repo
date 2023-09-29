import { defineStore } from "pinia";
import axios from 'axios';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: null,
        currentProduct: null,
        status: 'LOADING ALL PRODUCTS...',
    }),
    actions: {
        async getProducts() {
            try {
                let data = await axios.get("https://dummyjson.com/products");
                this.products = data.data.products;
                this.status = false
            } catch (e) {
                this.status = e.message;
            }
        }
    }
})
