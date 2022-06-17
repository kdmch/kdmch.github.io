<template>
  <div id="header">
    <div id="gw-ti">
      <a href="./">
        <div id="topicon">
        </div>
      </a>
    </div>

    <div id="gw-tl">
      <div class="maintitle">
        MITORI.ART
      </div>
      <div class="subtitle">
        &nbsp;> BLOG
      </div>
    </div>

    <div id="gw-l1">
      <a href="./">
        <div class="links">
          TOP
        </div>
      </a>
    </div>
    <div id="gw-l2">
      <a href="./blog/">
        <div class="links">
          BLOG
        </div>
      </a>
    </div>
    <div id="gw-l3">
      <a href="./blog/">
        <div class="links">
          SEARCH
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default{
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
  @import "assets/cssvar.scss";

  @media (prefers-color-scheme: dark) {
    $header-bg: #216e79;
  }


  #header {
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr repeat(3, fit-content(50px));
    grid-template-rows: 20px 20px;
    background-color: $accent;
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    #gw-ti {
      grid-column: 1/2;
      grid-row: 1/3;
      margin: 5px;
      #topicon {
        width: 100%;
        height: 100%;
        padding: 5px;
        background-image: url('./assets/home.png');
        background-size: contain;
      }
    }
    #gw-tl {
      grid-column: 2/3;
      grid-row: 1/3;
      display: flex;
      margin-left: 15px;
      margin-top: auto;
      margin-bottom: auto;
      text-align: left;
    }

    #gw-l1 {
      grid-column: 3/4;
      grid-row: 2/3;
    }
    #gw-l2 {
      grid-column: 4/5;
      grid-row: 2/3;
    }
    #gw-l3 {
      grid-column: 5/6;
      grid-row: 2/3;
    }
  }
  a {
    text-decoration: none;
  }
  .maintitle {
    display: table-cell;
    color: $base;
  }
  .subtitle {
    display: table-cell;
    color: $text;
  }
  .links {
    margin: 0 15px;
    text-align: center;
    color: $base;
  }
</style>