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
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
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

            if(this.temp_ref != 'Contact' && this.temp_ref != 'About' && this.temp_ref != 'Shop' && this.temp_ref != 'Home'){
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
            
            
        },

        handleScroll(){

            if(this.temp_ref != 'Contact'){
                console.log(this.$refs)
                if(window.scrollY > this.$refs.Home.offsetHeight && window.scrollY < this.$refs.mainHeight.offsetHeight){
                    this.display = true;

                    this.nav_links.forEach(element => {
                        element.active = false;
                        if(element.link == 'Home'){
                            element.active = true;
                        }
                    });
                }
               
                else{
                    this.display = false;
                }
            }

            
        }
        
        
    }
});