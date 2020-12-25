<template>
  <div class="auoSelect">
    <el-select
      v-model="selected"
      filterable
      clearable
      :placeholder="placeholder"
      :disabled="disabled"
      :multiple="isMultiple"
      @change="change"
    >
      <el-option
        value=""
        :label="$t('status.all')"
        v-if="hasDefaultOption"
      ></el-option>
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item[labelkey]"
        :value="item[valuekey] + ''"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script type="text/jsx">
export default {
  name: 'AutoSelect',
  components: {},
  mixins: [],
  props: {
    placeholder: {},
    value: {
      required: true
    },
    optionsList: {
      type: Array,
      default: () => []
    },
    api: {
      type: String
    },
    params: {
      type: Object
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    defaultProps: {
      type: Object,
      default: () => ({
        enLabel: 'babel',
        label: 'babel',
        value: 'id'
      })
    },
    hasDefaultOption: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      options: []
    }
  },
  computed: {
    selected: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    labelkey () {
      // console.log(this.defaultProps.label);
      if (localStorage.getItem('locale') === 'zh') {
        return this.defaultProps.label
      }
        return this.defaultProps.enLabel || this.defaultProps.label

    },
    valuekey () {
      // console.log(this.defaultProps.value);
      return this.defaultProps.value
    }
  },
  created () {
    // console.log(this.api);
    if (this.api) {
      this.getList(this.api)
    } else {
      this.options = this.optionsList
    }
  },
  mounted () { },
  methods: {
    getList (api) {
      const requestOpt = {
        url: '',
        method: this.methods || 'get',
      }
      console.log(this.apiType);
      switch (this.apiType) {
        case 'auth':
          requestOpt.url = this.$http.adornAuthUrl(this.api);
          break;
        case 'plat':
          requestOpt.url = this.$http.adornPlatformUrl(this.api);
          break;
        case 'console':
          requestOpt.url = this.$http.adornConsoleUrl(this.api);
          break
        case 'scheduler':
          requestOpt.url = this.$http.adornSchedulerUrl(this.api);
          break
        default:
          requestOpt.url = this.$http.adornUrl(this.api);
          break;
      }
      if (this.params) {
        if (this.methods && this.methods === 'post') {
          this.$set(requestOpt, 'data', this.$http.adornData(this.params))
        } else {
          this.$set(requestOpt, 'params', this.$http.adornParams(this.params))
        }
      }
      this.$http(requestOpt)
        .then(({ data }) => {
          if (data && data.code === 0) {
            if (this.hasPagination) {
              this.options = data.data.list
            } else {
              this.options = data.data.list;
            }
          } else {
            this.options = [];
          }

        })
        .catch(error => {
          this.options = [];
        });

    },
    change (val) {
      let arr = ''
      if (val) {
        arr = this.options.filter(i => i[this.valuekey] === val)
        this.$emit('change', arr)
      } else {
        this.$emit('change', [])
      }
    }
  },
  filters: {},
  watch: {
    optionsList (val) {
      if (!this.api) {
        this.options = val
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.auoSelect {
}
</style>
