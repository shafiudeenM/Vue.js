new Vue({
    el:"#vue-app",
    
    data:{
        health:100,
        ended:false,
        start:true
    },
    methods:{
        punch:function()
        {
            this.health-=10;
            if(this.health<=0)
            {
                this.ended=true;
                this.start=false;
            }
        },
        restart:function()
        {
            this.health=100;
            this.ended=false;
            
        }

    },
    computed:{
        
    }
    
});