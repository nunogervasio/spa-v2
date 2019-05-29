import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=PT+Sans");

/* CSS Variables */
:root {
  --primary-color: #b90415;
  --primary-color-hover: #d3071b;
  --secondary-color: #103063;
  --secondary-color-hover: #143f85;
  --light-color: #f4f4f4;
}
*{
  box-sizing:border-box

}

body {
}

img {

}
ul{
  list-style: none;
  padding: 0;
  margins: 0;
}
a {
  text-decoration: none;
/* unvisited link */
:link {
  color: #fff;
  
}

/* visited link */
:visited {
  color: #fff;
}

/* mouse over link */
:hover {
  color: hotpink;
}

/* selected link */
:active {
  color: blue;
}
}

#music:target,
#video:target,
#showcase:target,
#gift-cards:target {
    padding-top: 51px;
    @media (max-width: 576px){
    padding-top: 45px;
  }
}


`;

export default GlobalStyle;

/**
 * // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
 */
