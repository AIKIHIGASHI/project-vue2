<template>
  <div>
    <header>
      <div class="headar-left is-size-4 is-family-monospace">Sample App</div>
      <div class="headar-right">ログイン | 新規登録</div>
    </header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter-to {
    opacity: 1;
  }

  header {
    background: rgb(233, 233, 233);
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .headar-left {
    padding: 20px;
  }

  .headar-right {
    padding-top: 10px;
  }

  .container {
    max-width: 700px;
    border-radius: 4px;
    border-left: 1px solid rgb(7, 209, 209);
    border-right: 1px solid rgb(7, 209, 209);
    border-bottom: 1px solid rgb(7, 209, 209);
  }

  h4 {
    padding: 10px;
    text-align: center;
    background: rgb(207, 255, 219);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    position: relative;
  }

  h4 > span {
    background: rgb(78, 198, 245);
    color: #fff;
    border-radius: 4px;
    padding: 0 5px;
    position: absolute;
    top: -1px;
    left: -1px;
  }

  p {
    color: rgb(4, 197, 197);
    padding: 0 10px;
    font-size: 14px;
  }

  .info-box {
    padding: 10px;
  }

  .radio {
    padding: 20px 0 30px;
  }

  .select {
    margin: 10px 5px;
  }

  span {
    position: relative;
    top: 20px;
  }

  .button-box {
    margin-top: 30px;
    text-align: center;
  }

  .button {
    margin: 0 20px;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    height: 300px;
  }

  .angle-right {
    margin-left: 20px;
  }

  .angle-left {
    margin-right: 20px;
  }
</style>


