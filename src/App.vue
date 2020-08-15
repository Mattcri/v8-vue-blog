<template>
  <div id="app">
    <div id="nav">

     <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                      <router-link to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/sobremi">Sobre mí</router-link> 
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/contacto">Contacto</router-link>  
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/post/1">Último post</router-link> 
                    </li>
                </ul>
        </div>
        </div>
    </nav>
    <router-view/>
    </div>
    
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
</style>
