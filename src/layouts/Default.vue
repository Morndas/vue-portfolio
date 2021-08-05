<template>
  <div>
    <header>
      <ul>
        <li><g-link href="#">Home</g-link></li>
        <li><g-link href="#">A Propos de moi</g-link></li>
        <li><g-link href="#">Mes projets</g-link></li>
        <li><g-link href="#">Contact</g-link></li>
      </ul>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import '/static/css/variables.css';

/* CSS reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: Roboto, Poppins, Arial, sans-serif;
}

/* header styles*/
header {
  position: absolute;
  height: 70px;
  width: 100%;
  background-color: #29456F;
}

ul {
  list-style-type: none;
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0;
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
