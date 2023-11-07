<template>
    <div><h1>serie {{ serie }}</h1>
        <h2>{{ datosSerie.nombre }}</h2>
    </div>
</template>
<script>
import Global from './../Global'
import axios from 'axios'
    export default{
        name:"SerieSeries",
        data(){
            return{
                datosSerie:[]
            }
        },
        mounted(){
            var request = "api/Series/"+ this.$route.params.serie
            var url = Global.urlApiSeries + request
            console.log(url)
            axios.get(url).then(response=>{
                this.datosSerie=response.data
            })
        },
        watch:{
            '$route.params.serie'(nextVal, oldVal){
                if(nextVal != oldVal){
                    this.serie = parseInt(this.$route.params.serie)
                }
            }
        }
    }
</script>