<template>
  <el-dialog
    @close="close"
    :width="width"
    :title="title"
    :visible="dlgVisible"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    :append-to-body="isNesting"
    class="outter"
  >
    <img :src="icon" slot="title" alt="" class="img" />
    <div class="comfirm-tips">{{ comfirmTips }}</div>
    <span slot="footer" class="comfirm-dlg-footer">
      <slot name="footer">
        <el-button @click="cancleThen" size="mini">{{ cancel }}</el-button>
        <el-button type="primary" @click="comfirmThen" size="mini">{{
          sure
        }}</el-button>
      </slot>
    </span>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // 是否嵌套弹窗
    isNesting: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      default: null
    }

  },
  components: {},
  computed: {
    dlgVisible () {
      return this.value
    },
    icon: {
      get () {
        switch (this.type) {
          case 'delete':
            return require('../../assets/img/pop_delete.png');
          case 'arrival':
            return require('../../assets/img/pop_arrived.png');
          case 'scrap':
            return require('../../assets/img/pop_scrap.png');
          case 'transfer':
            return require('../../assets/img/pop_transfer.png');
          case 'weaning':
            return require('../../assets/img/pop_weaning.png');
          case 'recovery':
            return require('../../assets/img/pop_weaning.png');
          case 'strategy':
            return require('../../assets/img/pop_strategy.png');
          case 'pad':
            return require('../../assets/img/pop_pad.png');
          case 'resetPwd':
            return require('../../assets/img/pop_password.png');
          case 'pause':
            return require('../../assets/img/pop_pause.png');
          case 'play':
            return require('../../assets/img/pop_play.png');
          case 'restart':
            return require('../../assets/img/pop_restart.png');
          case 'abort':
            return require('../../assets/img/pop_stop.png');
          case 'redis':
            return require('../../assets/img/pop_redis.png');
          case 'back':
            return require('../../assets/img/pop_back.png');
          case 'backup':
            return require('../../assets/img/pop_backup.png');
          case 'link':
            return require('../../assets/img/pop_link.png');
          case 'save':
            return require('../../assets/img/pop_save.png');
          case 'saveAndIssue':
            return require('../../assets/img/pop_saveIssue.png');
          case 'start':
            return require('../../assets/img/pop_start.png');
          default:
            return require('../../assets/img/pop_delete.png');
        }
      },
      set (val) {
      }
    }
  },
  data () {
    return {
      title: '提示',
      width: '500px',
      comfirmTips: '确认此操作?',
      type: '',
      cancel: '取消',
      sure: '确定'
    }
  },
  created () {
    // console.log(this);
    // console.log(this.$t('btn.cancle'));
  },
  methods: {
    close () {
      this.value = false
      this.$emit('input', false)
    },
    cancleThen () {
      this.close()
      this.callback && this.callback();
    },

    comfirmThen () {
      this.close()
      this.callback && this.callback(true);
    }
  },
  watch: {
    // type (val) {
    //   console.log(this);
    //   console.log(this.$t('btn.cancle'));
    // }
  }
}
</script>

<style scoped>
.outter {
  /* height: 276px; */
}
.comfirm-tips {
  padding-top: 18px;
  text-align: center;
  font-size: 16px;
}

.img {
  position: absolute;
  width: 132px;
  height: 155px;
  top: -87px;
  left: 50%;
  margin-left: -66px;
}
.comfirm-dlg-footer >>> .el-bttton {
  width: 180px;
  height: 38px;
  font-size: 14px;
  line-height: 38px;
}
.outter >>> .el-dialog {
  transform: translate(-50%, calc(-50% + 33px));
}
.outter >>> .el-dialog__footer {
  padding: 50px 0 55px;
}
</style>
