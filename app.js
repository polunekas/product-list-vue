const STORAGE_KEY = 'vue-product-app-storage';


Vue.createApp({
	data() {
		return {
			products:[],
    		productName:''
		}
	},
	created() {
        this.products = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
	},
	computed: {
		sortedProducts() {
		return this.products.sort((a,b) => {
			if(!a.active && b.active) return -1;
			if(a.active && b.active) return 0;
			if(a.active && !b.active) return 1;
		});
		}
	},
	methods: {
		saveProduct() {
			if(this.productName === '') return
			this.products.unshift({
				name:this.productName,
				active:false
			});
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
			this.productName = '';
		},
		toggleActive(product) {
			product.active = !product.active;
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
		},
		removeProduct(product) {
            this.products.splice(this.products.indexOf(product), 1);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
        }

	}

}).mount('#app')