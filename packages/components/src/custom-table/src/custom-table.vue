<template>
  <div>
    <!-- 有整一行 -->
    <div class="custom-table" v-if="fullLine && newList.length !== 0">
      <div v-for="(ItemArray, IndexArrray) in newList" :key="IndexArrray">
        {{ ItemArray }}
        <div class="line" v-for="(item3, index3) in ItemArray" :key="index3">
          <div class="row" v-for="(item4, index4) in item3" :key="index4">
            <template v-if="item3 && item3.length && item3.length === 1">
              <div class="col" style="flex: 1">
                <span v-html="item4.label"></span>
              </div>
              <div class="col" :style="{ flex: autoflex }">
                <span v-html="item4.value"></span>
              </div>
            </template>
            <template v-else>
              <div class="col"><span v-html="item4.label"></span></div>
              <div class="col"><span v-html="item4.value"></span></div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ newList }}
      <div class="custom-table" v-if="newList.length !== 0">
        <div class="line" v-for="(item, index) in newList" :key="index">
          <div class="row" v-for="(item2, index2) in item" :key="index2">
            <div class="col"><span v-html="item2.label"></span></div>
            <div class="col" v-if="!item2.hasSlot">
              <span v-html="item2.value"></span>
            </div>
            <div class="col" v-else><span v-html="item2.value"> </span></div>
          </div>
          <template v-if="index === newList.length - 1 && emptyArr.length > 0">
            <div
              class="row"
              v-for="(itemEmpty, index3) in emptyArr"
              :key="'empty' + index3"
            >
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomTable",
  data() {
    return {
      emptyArr: [],
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    }, // 传入数组，可为单个数组，应用在只需要简单的划分的情况；也可为多个数组集合，应用在多种划分相结合的方式上
    fullLine: {
      type: Boolean,
      default: false,
    }, // 存在多种划分方式的表格
    subGroupLength: {
      type: Number,
      default: 3,
    }, // 一行划分为几组数据
  },
  computed: {
    autoflex() {
      return this.subGroupLength * 3 - 1;
    },
    newList() {
      let index = 0;
      let newArray = [];
      if (this.fullLine) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].length === 1) {
            let arrary1 = [];
            arrary1.push(this.list[i]);
            newArray.push(arrary1);
          } else {
            let itemArray = [];
            while (index < this.list[i].length) {
              itemArray.push(
                this.list[i].slice(index, (index += this.subGroupLength))
              );
            }
            newArray.push(itemArray);
          }
        }
      } else {
        while (index < this.list.length) {
          newArray.push(this.list.slice(index, (index += this.subGroupLength)));
        }
      }
      return newArray;
    },
  },
  watch: {
    newList: {
      handler(val) {
        if (val) {
          console.log(val);
          this.setSpacing();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    setSpacing() {
      this.emptyArr = [];
      if (this.fullLine && this.newList.length > 0) {
        for (let i = 0; i < this.newList.length; i++) {
          if (this.newList[i].length > 1) {
            let endArr = this.newList[i][this.newList[i].length - 1];
            if (endArr.length !== 0 && endArr.length < this.subGroupLength) {
              for (let i = 0; i < this.subGroupLength - endArr.length; i++) {
                this.emptyArr.push({ label: "", value: "" });
              }
            }
          }
        }
      } else {
        if (this.newList.length > 0) {
          let endArr = this.newList[this.newList.length - 1];
          if (endArr.length !== 0 && endArr.length < this.subGroupLength) {
            for (let i = 0; i < this.subGroupLength - endArr.length; i++) {
              this.emptyArr.push({ label: "", value: "" });
            }
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-table {
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(224, 228, 242, 1);
  border-left: 1px solid rgba(224, 228, 242, 1);
  border-right: 1px solid rgba(224, 228, 242, 1);
  box-sizing: border-box;
  .line {
    display: flex;
    border-bottom: 1px solid rgba(224, 228, 242, 1);
    .row {
      flex: 1;
      display: flex;
      flex-direction: row;
      .col {
        flex: 2;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        // border-right: 1px solid rgba(224,228,242,1);
        box-sizing: border-box;
        position: relative;
        flex-shrink: 0;
        &:after {
          content: "";
          width: 0.1em;
          height: 100%;
          position: absolute;
          background-color: rgba(224, 228, 242, 1);
          top: 0;
          right: 0;
        }
        &:nth-child(1) {
          flex: 1;
          justify-content: flex-end;
          background: rgba(249, 251, 255, 1);
          span {
            padding-right: 20px;
          }
        }
        &:nth-child(2) {
          span {
            padding-left: 20px;
          }
        }
      }
      &:last-child {
        .col {
          flex-shrink: 0;
          &:last-child {
            &:after {
              width: 0;
            }
          }
        }
      }
    }
  }
}
</style>
