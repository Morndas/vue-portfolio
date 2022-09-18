<template>
  <header>
    <nav>
      <ul>
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/about/">A propos de moi</g-link></li>
        <li><g-link href="#">Mes projets</g-link></li>
        <li><g-link href="#">Contact</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">

header {
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: #294570;
  z-index: 100;
  transition: .7s;

  nav, ul {
    height: 100%;
  }

  ul {
    width: 1140px;
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 0;

    li a {
      display: block;
      color: #FFEDCB;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 18px;

      &:hover {
        color: white;
      }
    }
  }
}

@media (max-width:$mobile-breakpoint) {
  .menu-open header {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear;
  }

  header {
    position: fixed;
    height: 100%;
    mix-blend-mode: luminosity;
    backdrop-filter: blur(20px);
    background-color: #7575754d;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;

    ul {
      width: unset;
      flex-direction: column;
      align-items: flex-start;
      // used unquote to circumvent Sass compile error : 'Incompatible units', may replace later
      padding: unquote("min(50px, 15vh)");
      box-sizing: border-box;

      li a {
        text-align: left;
        text-shadow: 1px 1px 3px black;
        font-size: 22px;
        color: #f5f5f5;
      }
    }
  }
}

</style>
