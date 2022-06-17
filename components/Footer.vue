<template>
  <div id="footer">
    <div id="gw-tl">
      <div class="maintitle"> MITORI.ART > BLOG </div>
      <div id="caption">
        <p>このブログは Nuxt.js を使って開発されています。</p>
        <p>内容についてのお問い合わせは Twitter @kadomache まで。</p>
      </div>
      <div id="copyright"> ©︎ 2022 mitori </div>
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
  #footer {
    position: relative;
    width: 100%;
    background-color: $text;
    #gw-tl {
      display: flex;
      flex-flow: column nowrap;
      padding: 30px;
      color: $accent;
      font-size: medium;
      #caption {
        margin-top: 20px;
        line-height: 50%;
      }
      #copyright {
        margin-top: 20px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: large;
        color: $base;
      }

    }
  }
  .maintitle {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
  }
  a {
    text-decoration: none;
  }
</style>