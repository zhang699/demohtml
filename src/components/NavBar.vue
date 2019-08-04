<template>
  <div class="nav-bar">
  
    <div class="nav-bar-content">
      <div class="center-vertical title">
          <h2>{{title()}}</h2>
      </div>
      <div class="content center-vertical">
       
        <div class="push"></div>

        <div class="shopping-cart center-vertical close-to-full-height">
          
        </div>
      </div>
   
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  const { buildTime } = process.env;
  export default {
    name: 'NavBar',
    data() {
      return {
        buildTime,
  
      };
    },
    created() {

    },
    computed: {
      ...mapGetters({
        numberOfShopping: 'numberOfMerchandisesInCart',
      }),
    },
    methods: {
      title() {
        return this.$route.meta.title;
      },
    },
  };
</script>

<style lang="scss">

  @import '~scss-utils/scss-utils.scss';
  @import '../assets/theme.scss';
  @import '../assets/common.scss';
  @import '../assets/button.scss';
.title {
  color: white;
}

  .nav-bar {
    position: fixed;
    background-color: #74d1db;
    top: 0;
    z-index: 99;
    height: $nav-bar-height;
    width: 100%;
    .info {
      position: fixed;
      top: 0;
      right: 0;
    }
    .nav-bar-content {
       display: flex;
       margin: 0 70px;
       height: 100%;
      .content {
        flex: 1;
        .address {
          height: 100%;
        }
      }

    }
    .logo {

    }

    .control {
      display: flex;
      align-items: center;

      button {
        height: 90%;
        width: 100px;
      }
      .shopping-cart {
        width: 300px;
      }
    }
  }
  .nav-bar + * {
    margin-top: $nav-bar-height;
  }
</style>
