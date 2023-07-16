Vue.createApp({
	data() {
		return {
			products:[],
    		productName:''
		}
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
			this.productName = ''
		},
		toggleActive(product) {
			product.active = !product.active
		},
		removeProduct(product) {
            this.products.splice(this.products.indexOf(product), 1)
        }

	}

}).mount('#app')