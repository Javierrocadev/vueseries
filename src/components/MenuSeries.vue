<template>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img src="./../assets/images/logoSeries.png"
                  style="width: 40px"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" 
              to="/">
                  Home
              </router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/crearpersonaje">
                      Crear personaje
                  </router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/modificarpersonaje">
                      Modificar personaje
                  </router-link>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Series
              </a>
              <ul class="dropdown-menu">
                  <!-- <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                  <li v-for="serie in series" :key="serie">
                    <router-link class="dropdown-item" :to="'/serie/'+serie.idSerie">{{serie.nombre}}</router-link>
                  </li>
              </ul>
              </li>
          </ul>
          </div>
      </div>
      </nav>

</template>
<script>
//importar axios y global
import Global from './../Global'
import axios from 'axios';
    export default{
        name:"MenuSeries",
        data(){
          return {
            series: []
          }
        },
        methods:{
          loadSeries(){
            var request= "api/Series"
            var url = Global.urlApiSeries + request
            axios.get(url).then(response=>{
              this.series= response.data
            })
          }
        },
        mounted(){
          this.loadSeries();
        }
    }
</script>