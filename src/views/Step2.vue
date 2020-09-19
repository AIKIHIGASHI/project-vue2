<template>
  <div>
    <div class="container">
      <h4 @click="check()"><span>STEP2</span><font-awesome-icon icon="chalkboard-teacher"/> 以下にお答えください</h4>
      <div class="info-box">
        <p>現在、生命保険に加入されていますか？</p>
        <div div class="radio">
          <input type="radio" value="はい" @click="showQ2 = true" v-model="q1">はい
          <input type="radio" value="いいえ" @click="showQ2 = true" v-model="q1">いいえ
        </div>
        <transition name="fade">
          <p v-if="showQ2">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？</p>
        </transition>
        <transition name="fade">
          <div v-if="showQ2" class="radio">
            <input type="radio" value="はい"   @click="showQ3 = true" v-model="q2">はい
            <input type="radio" value="いいえ" @click="showQ3 = true" v-model="q2">いいえ
          </div>
        </transition>
        <transition name="fade">
          <p v-if="showQ3">過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
        </transition>
        <transition name="fade">
          <div v-if="showQ3" class="radio">
            <input type="radio" value="はい" v-model="q3">はい
            <input type="radio" value="いいえ" v-model="q3">いいえ
          </div>
        </transition>
      </div>
    </div>
    <div class="button-box">
      <router-link class="button is-success" to="/"><font-awesome-icon class="angle-left" icon="angle-left"/>前に戻る</router-link>
      <router-link class="button is-success" @click.native="nextPage()" to="">次に進む<font-awesome-icon  class="angle-right"  icon="angle-right"/></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showQ2: false,
        showQ3: false
      };
    },
    computed: {
      q1: {
        get() {
          return this.$store.getters.q1;
        },
        set(value) {
          this.$store.commit('updateQ1', value);
        }
      },
      q2: {
        get() {
          return this.$store.getters.q2;
        },
        set(value) {
          this.$store.commit('updateQ2', value);
        }
      },
      q3: {
        get() {
          return this.$store.getters.q3;
        },
        set(value) {
          this.$store.commit('updateQ3', value);
        }
      }
    },
    methods: { 
      nextPage() {
        if (this.q1 === '' || this.q2 === '' || this.q3 === '') {
          alert('未入力箇所があります');
        } else {
          this.$router.push('/step3');
        }
      }
    }
  };
</script>

<style scoped>
  .radio {
    margin-left: 25px;
  }
</style>