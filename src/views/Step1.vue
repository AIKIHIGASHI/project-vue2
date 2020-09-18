<template>
  <div>
    <div class="container">
      <h4><span>STEP1</span><font-awesome-icon icon="address-card"/> お客様の情報を入力してください</h4>
      <div class="info-box">
        <p>-性別-</p>
        <div class="radio">
          <input type="radio" value="男性" v-model="gender">男性
          <input type="radio" value="女性" v-model="gender">女性
        </div>
        <p>-生年月日-</p>
        <div class="select">
          <select v-model="year">
            <option v-for="calender in japaneseCalender" :key="calender.year" :value="calender.year">{{ calender.label }}</option>
          </select>
        </div><span>年</span>
        <div class="select">
          <select v-model="month">
            <option v-for="n in lastMonth" :key="n" :value="n">{{ n }}</option>月
          </select>
        </div><span>月</span>
        <div class="select">
          <select v-model="date">
            <option v-for="n in lastDate()" :key="n" :value="n">{{ n }}</option>
          </select>
        </div><span>日</span>
      </div>
    </div>
    <div class="button-box">
      <router-link class="button is-success" to="/step2">次に進む<font-awesome-icon class="angle-right" icon="angle-right"/></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gender: '男性',
        year: 1990,
        lastMonth: 12,
        month: 1,
        date: 1,
        japaneseCalender: []
      };
    },
    mounted() {
      this.japaneseCalender = this.genereate();
    },
    methods: {
      genereate() {
        const japaneseCalender = [];
        for (let y = 1930; y <= 2020; y++) {
          if (y <=  1988) {
            japaneseCalender.push( {'year': y, 'label': `${y}年 (昭和${y-1925})`} );
          } else if (y <= 2018) {
            japaneseCalender.push( {'year': y, 'label': `${y}年 (平成${y-1988})`} );
          } else {
            japaneseCalender.push( {'year': y, 'label': `${y}年 (令和${y-2018})`} );
          }
        }
        return japaneseCalender;
      },
      lastDate() {
        return new Date(this.year, this.month, 0).getDate();
      }
    }
  };
</script>
