<template>
    <div class="header-main">
        <router-link to="/" id="title-logo">
            <img src="@/assets/img/CCAT_logo.png" title="Sitio Principal" alt="Sitio Principal">
            <span>Centro Cultural Avanzada Tecnología</span>
        </router-link>
        <div class="toggle-btn" @click="btnMenu = !btnMenu">
            <span>&#9776;</span>
        </div>
        <nav class="nav">
            <ul class="nav-listItems">
                <li><router-link to="/"> Inicio </router-link></li>
                <li><router-link to="/about"> ¿Quiénes somos? </router-link></li>
                <li><router-link to="/areas"> Áreas </router-link></li>
                <li><router-link to="/proyectos"> Proyectos </router-link></li>
                <li><router-link to="/productos"> Productos </router-link></li>
                <li><router-link to="/proxEventos"> Próximos Eventos </router-link></li>
            </ul>
        </nav>
        <nav class="mini-nav" v-show="btnMenu">
            <ul class="nav-listItems">
                <li><router-link to="/"> Inicio </router-link></li>
                <li><router-link to="/about"> ¿Quiénes somos? </router-link></li>
                <li><router-link to="/areas"> Áreas </router-link></li>
                <li><router-link to="/proyectos"> Proyectos </router-link></li>
                <li><router-link to="/productos"> Productos </router-link></li>
                <li><router-link to="/proxEventos"> Próximos Eventos </router-link></li>
            </ul>
        </nav>
        <div class="nav-shadow" v-show="btnMenu" @click="btnMenu = !btnMenu"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            btnMenu: false
        }
    },
}
</script>

<style scope>
/* Toda la Cabecera */
.header-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(225, 240, 240);
    box-shadow: -1px 2px 8px black;
    /* border: 2px solid black; */
    /* background: rgba(158, 240, 158, 0.521); */
    z-index: 1000;
}

/* Title */
#title-logo {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    /* border: 1px red solid; */
    width: 18%;
    height: 100%;
}

#title-logo img {
    height: 100%;
}

#title-logo span {
    width: 170px;
    height: 100%;
    color: #2c3e50;
    font-size: 1rem;
    /* border: 1px solid rgb(214, 128, 15); */
}
.toggle-btn{
    display: none;
}
.mini-nav{
    display: none;
}
.nav-shadow{
    display: none;
}
/* NAV */
.nav {
    position: relative;
    width: 60%;
    height: 100%;
    overflow: hidden;
    /* border: 1px solid rgb(214, 128, 15); */
}
.nav-listItems {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid rgb(81, 15, 214); */
}

.nav-listItems li a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
  /* text-decoration: none; */
}

.nav-listItems li a.router-link-exact-active {
  color: #42b983;
}
@media (max-width: 930px) and (min-width: 750px){
    .nav {
        position: relative;
        width: 75%;
        height: 100%;
        overflow: hidden;
        /* border: 1px solid rgb(214, 128, 15); */
    }
}
@media (max-width: 930px) and (min-width: 880px){
    #title-logo {
        width: 20%;
    }
    #title-logo span {
        padding-top: 5px;
        font-size: .8rem;
    }
}
@media (max-width: 880px) and (min-width: 700px){
    #title-logo {
        width: 22%;
    }
    #title-logo span {
        padding-top: 5px;
        font-size: .7rem;
    }
}
@media (max-width: 780px){
    .toggle-btn{
        display: flex;
        justify-content: center;
        position: absolute;
        right: 10px;
        width: 30px;
        cursor:pointer;
        border: #000 1px solid;
    }
    .nav{
        display: none;
    }
    .nav-shadow{
        display: block;
        position: absolute;
        width: 100vw;
        height: 200vw;
        left: 0;
        top: 0;
        background: rgba(77, 71, 50, 0.255);
        z-index: 1050;
    }
    .mini-nav{
        display: block;
        position: absolute;
        right: 0;
        overflow: hidden;
        margin-top: 250px;
        width: 50%;
        height: 200px;
        background: #293f52;
        z-index: 1100;
    }
    .nav-listItems{
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        /* border: 1px solid rgb(81, 15, 214); */
    }
    .nav-listItems li{
        /* width: 100%; */
        padding-left: 10px;
        /* border: 1px solid rgb(214, 15, 15); */
    }
    .nav-listItems li a {
        color: #f0dfdf;
        font-size: .8rem;
        text-decoration: none;
        /* border: 1px solid rgb(81, 15, 214); */
    }
}

@media (max-width: 700px){
    #title-logo span {
        display: none;
    }
} 
</style>