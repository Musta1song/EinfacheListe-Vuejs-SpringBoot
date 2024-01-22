<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
     <router-link to="/" class="navbar-brand">Liste</router-link>
        <a class="nav-link" href="/add">Eintrag Hinzufügen</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default{
    name: 'VueHeader',
  

}

</script>
<style>
nav{
  padding-top: 0;
}
.container-fluid{
  background-color: aqua;
}
</style>

