<template>
  <header>
    <ul class="container">
      <li><g-link to="/">Home</g-link></li>
      <li><g-link to="/about/">A propos de moi</g-link></li>
      <li><g-link href="#">Mes projets</g-link></li>
      <li><g-link href="#">Contact</g-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

header {
  position: absolute;
  height: 70px;
  width: 100%;
  background-color: #29456F;
  z-index: 100;
}

ul {
  list-style-type: none;
  display: flex;
  height: 100%;
  align-items: center;
  margin: auto;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: #FFEDCB;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}

li a:hover {
  color: white;
}
</style>
