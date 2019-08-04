<template>
  <div class="merchandise-section">
    <a class="title-header">
      <h2 class="title flex-item">
        {{title}}
      </h2>
      <div class="push"></div>
      <div class="header-tail flex-item">
       
      </div>
    </a>
    <div class="content container">
      <h3>{{rounds[index % rounds.length]}}</h3>
    </div>
    <div class="control">
      <button class="primary-button button" @click="next" >下一位</button>
      <button class="primary-button button" @click="next" >開始聊天</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Match',
  props: ['title', 'products', 'waiting'],
  data() {
    return {
      title: document.title,
      rounds: [
        '他跟你有相同的血尿症狀，你要跟他聊天嗎',
        '他跟你的床號相近(VVV98)，你要跟他聊天嗎',
        '他跟你的出院日期接近(1051250)，你要跟他聊天嗎',
      ],
      index: 0,
    };
  },
  methods: {
    next() {
      this.index += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/button.scss';
.container {
  flex: 1;
  height: calc(100vh - 120px);
}
.content {
  color: black;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}
.control {
  flex-direction: row;
  display: flex;

}
.button {
  flex: 1;
  margin: 0px 5px;
  padding: 10px;
}
</style>
