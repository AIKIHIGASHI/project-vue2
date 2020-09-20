<template>
  <div>
    <div class="container">
      <h4><span>STEP4</span><font-awesome-icon icon="file-alt"/> 以下の内容を確認してください</h4>
      <div class="info-box">
        <p>-性別-</p>
        <div class="answer">{{ gender }}</div>
        <p>-生年月日-</p>
        <div class="answer" >{{ year }}年{{ month }}月{{ date }}日</div>
        <p>-現在、生命保険に加入されていますか？-</p>
        <div class="answer" >{{ q1 }}</div>
        <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？-</p>
        <div class="answer" >{{ q2 }}</div>
        <p>-過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
        <div class="answer" >{{ q3 }}</div>
        <p>-ご相談内容-</p>
        <div class="answer" >{{ consultation }}</div>
      </div>
    </div> 
    <div class="button-box">
      <router-link class="button is-success" to="/step3"><font-awesome-icon class="angle-left" icon="angle-left"/>前に戻る</router-link>
      <router-link class="button is-success" to="">送信<font-awesome-icon class="angle-right" icon="angle-right"/></router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['gender', 'year', 'month', 'date', 'q1', 'q2', 'q3', 'consultation'])
    }
  };
</script>

<style scoped>
  .answer {
    margin: 20px;
  }
</style>