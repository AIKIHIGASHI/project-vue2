<template>
  <div>
    <div class="container">
      <h4><span>STEP3</span><font-awesome-icon icon="file-alt"/> ご相談内容をご記入ください</h4>
      <div class="info-box">
        <p>-ご相談内容-</p>
        <div>
          <textarea v-model="consultation"></textarea>
        </div>
      </div>
    </div> 
    <div class="button-box">
      <router-link class="button is-success" to="/step2"><font-awesome-icon class="angle-left" icon="angle-left"/>前に戻る</router-link>
      <router-link class="button is-success" to="">次に進む<font-awesome-icon class="angle-right" icon="angle-right"/></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        consultation: ''
      };
    }
  };
</script>

<style scoped>
  .info-box {
    padding: 10px 10px 20px;
  }
</style>