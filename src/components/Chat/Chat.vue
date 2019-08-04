<template>
  <div class="merchandise-section">
    <div class="conversation">
      <div :key="chat.id" v-for="chat in chats" class="chat-item" :class="{'right': chat.right}">
        <div class="voice-item">
          <h4 class="second">{{chat.seconds}}s</h4>
        </div>
      </div>
    </div>
    <div class="control">
      <button class="primary-button button" @click="record" >錄音</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['title', 'products', 'waiting'],
  data() {
    return {
      chats: [
        {
          seconds: 20,
          right: true,
        },
        {
          seconds: 20,
          left: true,
        },
        {
          seconds: 60,
          right: true,
        },
        {
          seconds: 20,
          right: true,
        },
        {
          seconds: 20,
          right: true,
        },
      ],
    };
  },
  mounted() {
    document.title = '聊天';
  },
  methods: {
    record() {

    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/button.scss';
.chat-item {
  border-radius: 5px;
  background-color:#eee;
  width: 200px;
  height: 50px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .second {
    color: black;
  }
}
.left {
  margin-right: 50vw;
}
.right {
  margin-left: 50vw;
}
.conversation {
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
