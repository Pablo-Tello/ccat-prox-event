<template>
    <div class="footer-main">
        <div class="footer-redesSociales">
            <h6>REDES SOCIALES</h6>
            <router-link to="/addEventos">Agregar Próximos Eventos</router-link>
        </div>
        <div class="footer-menu">
            <h6>MENÚ</h6>
        </div>
        <div class="footer-contactos">
            <h6>CONTACTOS</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer-main {
    position:relative;
    margin-top: 10px;
    width: 100%;
    /* height: 150px; */
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgb(167, 165, 165);
    z-index: 900;
}

.footer-redesSociales,
.footer-menu,
.footer-contactos{
    margin-top: 10px;
    width: 200px;
    height: 120px;
    /* border: 1px solid green; */
}
.footer-redesSociales a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1rem;
    /* text-decoration: none; */
}

.footer-redesSociales a.router-link-exact-active {
  color: #277753;
}

@media (max-width: 700px) and (min-width: 500px){}

@media (max-width: 500px){
    .footer-main {
        flex-direction: column;
    }
}
</style>