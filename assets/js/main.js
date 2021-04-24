var app = new Vue({
    el: '#root',
    data: {
        search: '',
        nav_links: nav_links,
        categories: categories,
        food_type: food,
        products: products,
        testimonials: testimonials,
        tips: tips,
        pop_arr_icons: pop_arr_icons,
        products_arrival: products_arrival,
        shop_by_brand_links: shop_by_brand_links,
        useful_links: useful_links,
        nav_footer: nav_footer,
        social_links: social_links,
        temp_ref: '',
        display: false,
    },

    mounted(){
        console.log(this);
    },

    methods:{
        active_switch: function(link){
          
            this.nav_links.forEach(element => {
                element.active = false;
            });
            link.active= true;
            this.temp_ref = link.link;
            

            if(this.$refs[this.temp_ref] != undefined){
                this.$refs[this.temp_ref].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }

            if(this.temp_ref != 'Contact'){
                this.display = true;
            }
            
        },
        goTop: function()   {
            this.$refs.Home.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            this.nav_links.forEach(element => {
                if(this.$refs.Home){
                    element.active = false;

                    if(element.link === 'Home'){
                        element.active = true;
                    }
                }
            });

            this.display = false;
        }
        
        
    }
});