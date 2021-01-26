<script type="text/jsx">
/**
 * @description: 渲染分页组件
 * @param {Object} h
 * @return: 分页template
 */
function paginationRender(h) {
  return (
    <el-pagination
      on-size-change={(val) => {
        this.sizeChangeHandle(val);
      }}
      on-current-change={(val) => {
        this.currentChangeHandle(val);
      }}
      current-page={this.pageIndex}
      page-sizes={[10, 20, 50, 100]}
      page-size={this.pageSize}
      total={this.totalCount}
      layout="prev, pager, next, total, sizes"
      class="grid-pagination"
    ></el-pagination>
  );
}

/**
 * @description: 判断对象是否是function类型
 * @param { Any } obj
 * @return: Boolean 是｜否
 */
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "object Function";
}

/**
 * @description: 渲染表格列和行
 * @param {Object} item
 * @param {Object} context
 * @return:表格的列
 */
function tableCell(h, item, context) {
  let slotScope = {
    scopedSlots: {},
  };
  if (item.headerRender && typeof item.headerRender === "function") {
    slotScope.scopedSlots.header = (scope) =>
      item.headerRender.call(context, h, scope);
  }

  if (item.render && typeof item.render === "function") {
    slotScope.scopedSlots.default = (scope) =>
      item.render.call(context, h, scope);
    return (
      <el-table-column
        type={item.type}
        width={item.width + "" || ""}
        min-width={item.minWidth || ""}
        prop={item.prop || ""}
        label={context.$t(item.label)}
        fixed={item.fixed || false}
        sortable={item.sortable || false}
        header-align={item.headerAlign || "center"}
        align={item.align || "center"}
        show-overflow-tooltip={item.tooltips || true}
        {...slotScope}
      ></el-table-column>
    );
  }
  return (
    <el-table-column
      width={item.width + "" || ""}
      min-width={item.minWidth || ""}
      type={item.type}
      prop={item.prop || ""}
      label={context.$t(item.label)}
      fixed={item.fixed || false}
      sortable={item.sortable || false}
      reserve-selection={item.reserve || false}
      header-align={item.headerAlign || "center"}
      align={item.align || "center"}
      show-overflow-tooltip={item.tooltips || true}
      {...slotScope}
    >
      {item.children
        ? item.children.map((childItem) => tableCell(h, childItem, context))
        : ""}
    </el-table-column>
  );
}

/**
 * @description: 渲染表格组件
 * @param {Object} h
 * @return: 表格template
 */
function tableRender(h) {
  const table = this.columns.map((item) => tableCell(h, item, this.$parent));
  return (
    <el-table
      data={this.list}
      v-loading={this.dataListLoading}
      stripe
      ref="table"
      height={this.tableH || undefined}
      row-key={this.rowKey || undefined}
      highlight-current-row
      span-method={this.spanMethod || undefined}
      on-select={(val, row) => {
        this.selectHandle(val, row);
      }}
      on-selection-change={(val) => {
        this.selectionChangeHandle(val);
      }}
      on-select-all={(val) => {
        this.selectAll(val);
      }}
      // on-row-click={(val, column) => {
      //   if (column.label !== 'Operate' && column.label !== '操作') {
      //     this.handleClickTableRow(val, column);
      //   }
      // }}
      on-cell-dblclick={(val) => {
        this.bccelldblclick(val);
      }}
      style="width: 100%;margin-top:20px;"
      header-row-class-name={"grid-table-head"}
      class="grid-table"
    >
      {table}
    </el-table>
  );
}

/**
 * @description: 渲染图表切换组件
 * @param {Object} h
 * @return: 表格template
 */
function graphTableRender(h) {
  const graph = this.$slots.graph || "";
  if (this.dataType === 1) {
    return graph;
  } else {
    const table = tableRender.call(this, h);
    const pagination = paginationRender.call(this, h);
    return [table, pagination];
  }
}

/**
 * @description: 渲染查询表单
 * @param {Object} h
 * @return: 查询表单template
 */
function formRender(h) {
  const more = (
    <div
      class={["more-select", this.moreStatus ? "down" : "up"]}
      on-click={() => {
        this.moreSelect();
      }}
    >
      <span
        domPropsInnerHTML={
          this.moreStatus
            ? String(this.$t("statusMore"))
            : String(this.$t("statusLess"))
        }
      ></span>
      <i
        class={
          this.moreStatus
            ? "icon-ic_shuangjiantou-xia"
            : "icon-ic_shuangjiantou-shang"
        }
      ></i>
    </div>
  );
  return (
    <div class="form-content">
      <div
        ref="contentForm"
        id="contentForm"
        class={[
          "grid-search-form-box",
          "has-shadow",
          this.moreStatus ? "grid-more" : "grid-less",
        ]}
        style={
          this.moreStatus ? "height:" + this.singleLineFormHeight + "px" : ""
        }
      >
        <div style="display:flex;" class="grid-search-form">
          <el-form
            ref="searchForm"
            class="search-form"
            inline={true}
            {...{
              props: {
                model: this.model,
              },
            }}
          >
            {this.$slots.form ? this.$slots.form : ""}
          </el-form>
          <el-form style="min-width:224px;width:224px">
            <el-form-item>
              <el-button
                size="mini"
                type="primary"
                on-click={() => {
                  this.getDataList(1);
                }}
              >
                {this.$t("btn.search")}
              </el-button>
              <el-button
                size="mini"
                on-click={() => {
                  this.resetFormData();
                }}
              >
                {this.$t("btn.clear")}
              </el-button>
              {this.$slots.formBtn ? this.$slots.formBtn : ""}
            </el-form-item>
          </el-form>
        </div>
        {!!this.hasMoreBtn ? more : ""}
      </div>

      <div
        class={[
          "grid-search-form-box",
          "has-shadow",
          "grid-hide-form",
          this.moreStatus ? "grid-more" : "grid-less",
        ]}
      >
        <div style="display:flex;width：100%" class="grid-search-form">
          <el-form ref="gridHideForm" class="search-form" inline={true}>
            <el-form-item label="hide">
              <el-input size="mini" placeholder="hide" clearable></el-input>
            </el-form-item>
          </el-form>
          <el-form style="min-width:224px;width:224px">
            <el-form-item>
              <el-button
                size="mini"
                type="primary"
                on-click={() => {
                  this.getDataList(1);
                }}
              >
                {this.$t("btn.search")}
              </el-button>
              <el-button
                size="mini"
                on-click={() => {
                  this.resetFormData();
                }}
              >
                {this.$t("btn.clear")}
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  );
}

/**
 * @description: 渲染工具栏
 * @param {type} h
 * @return: 工具栏template
 */
function toolbarRender(h) {
  let toolbar = "";
  if (this.hasGraphTable) {
    toolbar = this.$slots.toolbar ? (
      <div class="graph-toolbar">
        <el-button-group class="data-type">
          <el-button
            size="mini"
            type={this.dataType === 0 ? "primary" : ""}
            icon="el-icon-s-grid"
            on-click={() => {
              this.changeDatType(0);
            }}
          ></el-button>
          <el-button
            size="mini"
            type={this.dataType === 1 ? "primary" : ""}
            icon="el-icon-s-data"
            on-click={() => {
              this.changeDatType(1);
            }}
          ></el-button>
        </el-button-group>
        {this.$slots.toolbar}
      </div>
    ) : (
      <el-button-group class="data-type">
        <el-button
          size="mini"
          type={this.dataType == 0 ? "primary" : ""}
          icon="el-icon-s-grid"
          on-click={() => {
            this.changeDatType(0);
          }}
        ></el-button>
        <el-button
          size="mini"
          type={this.dataType == 1 ? "primary" : ""}
          icon="el-icon-s-data"
          on-click={() => {
            this.changeDatType(1);
          }}
        ></el-button>
      </el-button-group>
    );
  } else {
    toolbar = this.$slots.toolbar ? <div>{this.$slots.toolbar}</div> : "";
  }
  const toolbox = <div class={"grid-tool-box"}>{toolbar}</div>;
  return toolbox;
}

/**
 * @description: 自定义内容显示
 * @param {type} h
 * @return: 工具栏template
 */
function monitorRender(h) {
  const minitorSlot = this.$slots.monitor;
  let monitor = this.$slots.monitor ? minitorSlot : "";
  return monitor;
}

/**
 * @description: 渲染左侧树
 * @param {type} h
 * @return: 左侧树状template
 */
function treeRender(h) {
  const tree = (
    <div class={["grid-lefttree", this.showTree ? "" : "undisplay"]}>
      <feelview-tree
        ref="feeltree"
        on-selectNode={(e) => {
          this.gridselectNode(e);
        }}
        on-topDept={(e) => {
          this.gridgetTopDept(e);
        }}
      ></feelview-tree>
    </div>
  );
  return tree;
}

import FeelviewTree from "./feelview-tree.vue";

export default {
  name: "grid",
  components: { FeelviewTree },
  mixins: [],
  props: {
    layout: {
      type: Array,
      default() {
        return ["form", "toolbar", "table", "pagination"];
      },
    },
    methods: {
      type: String,
      default: "get",
    },
    apiType: {
      type: String,
      default: "",
    },
    api: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    model: {
      type: Object,
      default: () => {},
    },
    rowKey: {
      type: String,
      default: "id",
    },
    autoGetData: {
      type: Boolean,
      default: true,
    },
    treeAutoGetData: {
      type: Boolean,
      default: true,
    },
    requestCallback: {
      type: Function,
    },
    spanMethod: {
      type: Function,
    },
    //checkbox选中行数据
    multiSelectedArr: {
      type: Array,
      default: () => [],
    },
    returnDataKey: {
      type: String,
      default: "data",
    },
    resetDataFormType: {
      type: String,
    },
    // 左侧机构树
    hasTree: {
      type: Boolean,
      default: false,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    hasBoxShadow: {
      type: Boolean,
      default: true,
    },
    // 是否默认表格行点击
    isDefaultTableColClick: {
      type: Boolean,
      default: true,
    },
    // 需要反选数组  为一维数组 页面内先处理只剩下rowkey的一维数组集合
    selectKeysArray: {
      type: Array,
      default: () => [],
    },
    gridFixedHeight: {
      //grid固定高度设置  单位px
      type: [Number, String],
    },
    getChartData: {
      type: Function,
    },
  },
  data() {
    return {
      originForm: "",
      pageIndex: 1, // 分页参数-页索引
      pageSize: 10, // 分页参数-每页数
      totalCount: 0, // 分页参数-总数
      list: [], // 表格数据
      dataListLoading: true, // 表格局部刷新
      moreStatus: true, // 表单查询展开
      hasMoreBtn: true, // 是否有展开按钮
      foldStatu: false, // 展开收缩状态
      singleLineFormHeight: "", // 单行表单高度，用于计算要不要显示展开按钮
      tableH: undefined,
      contentFormH: 0,
      contentH: 0,
      dataType: 0, // 图表切换 0 是表， 1是图
      ids: [], // 全选用数组
      isCheckedAll: false, // 全选状态
      dataListSelections: [], // 复选选中数据 multiSelectedArr !== dataListSelections multiSelectedArr包含dataListSelections
      cancleArr: [], // multiSelectedKeysArray被取消的
    };
  },
  computed: {
    dataListKeysArray() {
      const keyName = this.rowKey;
      return this.dataListSelections.map((i) => i[keyName]);
    },
    multiSelectedKeysArray() {
      const keyName = this.rowKey;
      return this.multiSelectedArr.map((i) => i[keyName]);
    },
    legacyKeysArray() {
      const a = new Set(this.multiSelectedKeysArray);
      const b = new Set(this.dataListKeysArray);
      return Array.from(
        new Set(
          [...a].filter((x) => !!!b.has(x) && this.cancleArr.indexOf(x) === -1)
        )
      );
    },
    legacyListSelections() {
      return this.multiSelectedArr.filter((i) => {
        const index = this.legacyKeysArray.indexOf(i[this.rowKey]);
        if (index !== -1) {
          return i;
        }
      });
    },
    showTree: {
      // 有树的展开收缩控制
      get() {
        return this.$store.state.common.isShowGridTree;
      },
      set(val) {
        this.$store.commit("common/updateShowGridTree", val);
      },
    },
    hasPagination() {
      if (this.hasGraphTable) {
        // 图表暂时只支持分页的
        return true;
      } else {
        return this.layout.indexOf("pagination") >= 0;
      }
    },
    hasGraphTable() {
      if (this.layout.indexOf("graphTable") >= 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.setOriginForm(this.model);
  },
  mounted() {
    if (this.autoGetData) {
      this.$nextTick(() => {
        this.getDataList(0);
      });
    }
    let _this = this;
    this.calcTableH();
    if (_this.layout.indexOf("form") !== -1) {
      // 有表单才需要算按钮
      _this.calcing();
      window.addEventListener(
        "resize",
        _this.throttling(_this.calcing, 500, true)
      );
    }
  },
  methods: {
    clearCancleArr() {
      this.cancleArr = [];
    },
    setOriginForm(obj) {
      const temp = JSON.stringify(obj); // 这里必须要存json，js对象存的是指针呀， 不然你会发现他一直在变
      this.originForm = temp;
    },
    /// 前缘throttling
    throttling(fn, wait, immediate) {
      let timer,
        timeStamp = 0;
      let context, args;

      let run = () => {
        timer = setTimeout(() => {
          if (!immediate) {
            fn.apply(context, args);
          }
          clearTimeout(timer);
          timer = null;
        }, wait);
      };

      return function () {
        context = this;
        args = arguments;
        if (!timer) {
          if (immediate) {
            fn.apply(context, args);
          }
          run();
        } else {
        }
      };
    },
    calcing() {
      this.calcBtnStatus();
    },
    // 计算table高度
    calcTableH() {
      this.$nextTick(() => {
        if (this.tableFixedHeight) {
          this.tableH = this.tableFixedHeight;
          return;
        }
        if (typeof this.$refs.table !== "undefined") {
          const tableWraper = window.getComputedStyle(this.$refs.table.$el)
            .height;
          this.tableH = tableWraper;
        }
      });
    },
    calcBtnStatus() {
      this.$nextTick(() => {
        if (!this.$refs.gridHideForm || !this.$refs.searchForm) {
          return;
        }
        const reference = window.getComputedStyle(this.$refs.gridHideForm.$el)
          .height;
        const referenceHeight = parseInt(reference);
        this.singleLineFormHeight = referenceHeight - 1; // 单行表单高度， 为了隐藏第二行input的框，牺牲1px
        const heightTxt = window.getComputedStyle(this.$refs.searchForm.$el)
          .height;
        const realHeight = parseInt(heightTxt);
        if (realHeight > referenceHeight) {
          this.hasMoreBtn = true;
        } else {
          this.hasMoreBtn = false;
        }
      });
    },
    keyupHandler(e) {
      if (e.keyCode === 13) {
        this.getDataList(0);
      }
    },
    // 双击进详情操作 emit
    bccelldblclick(row) {
      this.$emit("dbClickCell", row);
    },
    // 点击行选中
    handleClickTableRow(row, column) {
      if (this.isDefaultTableColClick) {
        this.$refs.table.toggleRowSelection(row);
      } else {
        this.$emit("tableRowClick", row);
      }
    },
    // 全选
    selectAll(arr) {
      this.toggleAllSelection(arr);
    },
    handleSelectionChange(selection) {
      this.ids = selection.map((obj) => obj.id);
      this.single = selection.length !== 1;
      this.multiple = !selection.length;
    },
    handleSelectAllChange(selection) {
      this.toggleAllSelection(selection);
    },
    toggleAllSelection(selectedData) {
      this.isCheckedAll = !this.isCheckedAll;
      if (this.isCheckedAll) {
        selectedData.forEach((subRow) => {
          if (subRow.children) {
            this.toggleSelection(subRow["children"]);
          }
        });
      } else {
        this.$refs["table"].clearSelection();
      }
    },
    toggleSelection(rows, flag) {
      if (rows === null || !rows.length) {
        return;
      }
      rows.forEach((row) => {
        if (!this.rowHasSelected(row)) {
          if (flag) {
            this.$refs["table"].toggleRowSelection(row, flag);
          } else {
            this.$refs["table"].toggleRowSelection(row);
          }
        }
        if (row["children"]) {
          if (flag) {
            this.toggleSelection(row["children"], flag);
          } else {
            this.toggleSelection(row["children"]);
          }
        }
      });
    },
    rowHasSelected(row) {
      let index = this.ids.indexOf(row.id);
      return ~index;
    },
    // 左侧机构树展开收缩
    showTreeHandle() {
      this.showTree = !this.showTree;
      this.$emit("treeToggle", this.showTree);
    },
    // 表格中树展开收缩
    toggleRowExpansion(isExpansion) {
      this.toggleRowExpansion_forAll(this.list, isExpansion);
    },
    toggleRowExpansion_forAll(data, isExpansion) {
      data.forEach((item) => {
        this.$refs.table.toggleRowExpansion(item, isExpansion);
        if (item.children !== undefined && item.children !== null) {
          this.toggleRowExpansion_forAll(item.children, isExpansion);
        }
      });
    },
    // 重置
    resetFormData() {
      this.$emit("update:model", JSON.parse(this.originForm));
      // this.selectArrayCopy = []
      this.$emit("update:multiSelectedArr", []);
      this.closeAndclearSelection();
      setTimeout(() => {
        if (this.hasTree) {
          this.$refs.feeltree.resetTree();
          this.$refs.feeltree.$children[2].$children[0].$el.click();
        } else {
          this.getDataList(1);
        }
      });
    },
    // 搜索的展开、收缩
    moreSelect() {
      this.moreStatus = !this.moreStatus;
      this.$nextTick(function () {
        this.contentFormH = this.$refs.contentForm.clientHeight;
        // document.getElementById('boxContent').style.height = (this.contentH - this.contentFormH) + 'px'
        // console.error(this.contentFormH, this.contentH);
      });
    },
    // 切换每页数量
    sizeChangeHandle(val) {
      this.pageIndex = 1;
      this.pageSize = val;
      this.getDataList(0);
    },
    // 切换分页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList(0);
    },
    selectHandle(selection, row) {
      const hasSelection = this.$refs.table.selection.filter(
        (item) => item[this.rowKey] === row[this.rowKey]
      );
      const isSelect = !!hasSelection.length;
      if (isSelect) {
        if (this.singleSelect) {
          // 此流程为单选控制
          if (selection.length > 1) {
            setTimeout(() => {
              this.$refs.table.toggleRowSelection(selection[0], false);
            }, 0);
          } else {
          }
        } else {
          if (row && row.children && row.children.length) {
            this.$nextTick(() => {
              this.toggleSelection(row.children, true);
            });
          }
        }
      } else {
        this.cancleArr.push(row[this.rowKey]);
        if (row && row.children && row.children.length) {
          row.children.forEach((i) => {
            this.$nextTick(() => {
              this.toggleSelection(row.children, false);
            });
          });
        }
      }
      if (this.multiSelectedArr) {
        this.$emit("update:multiSelectedArr", this.dataListSelections);
      }
    },
    // select-change
    selectionChangeHandle(val) {
      this.dataListSelections = val;
      if (this.singleSelect) {
        this.$emit("update:multiSelectedArr", this.dataListSelections);
        return;
      }
      let arr = [...this.dataListSelections, ...this.legacyListSelections];
      this.$emit("update:multiSelectedArr", arr);
    },
    // 获取多选项
    getMulSelection() {
      return this.dataListSelections || [];
    },
    // 获取数据列表
    getDataList(reflesh = 1) {
      let needRefresh = reflesh;
      if (this.getChartData) {
        this.getChartData();
      }
      if (needRefresh) {
        this.pageIndex = 1;
        this.$emit("update:multiSelectedArr", []);
        // this.selectArrayCopy = []
        this.closeAndclearSelection();
      }
      let params = {};
      if (this.hasPagination) {
        params = {
          page: this.pageIndex,
          limit: this.pageSize,
          current: this.pageIndex,
          size: this.pageSize,
          ...this.model,
        };
      } else {
        params = {
          ...this.model,
        };
      }
      let requestUrl = this.$http.adornUrl(this.api);
      switch (this.apiType) {
        case "auth":
          requestUrl = this.$http.adornAuthUrl(this.api);
          break;
        case "plat":
          requestUrl = this.$http.adornPlatformUrl(this.api);
          break;
        case "console":
          requestUrl = this.$http.adornConsoleUrl(this.api);
          break;
        case "scheduler":
          requestUrl = this.$http.adornSchedulerUrl(this.api);
          break;
        case "file":
          requestUrl = this.$http.adornFileUrl(this.api);
          break;
        case "itx":
          requestUrl = this.$http.adornItxUrl(this.api);
          break;
        default:
          requestUrl = this.api;
          break;
      }
      const requestParams = {
        url: requestUrl,
        method: this.methods,
      };
      if (this.methods === "post") {
        this.$set(requestParams, "data", this.$http.adornData(params, true));
      } else {
        this.$set(
          requestParams,
          "params",
          this.$http.adornParams(params, true)
        );
      }
      this.list = []; // 清空数据
      this.dataListLoading = true;
      this.$http(requestParams)
        .then(({ data }) => {
          if (this.requestCallback) {
            this.requestCallback(this, data); // 不用默认的数据处理情况
            this.$nextTick(() => {
              if (typeof this.$refs.table !== "undefined") {
                this.$refs.table.doLayout();
                setTimeout(() => {
                  this.setSelectArray();
                }, 200);
              }
            });
          } else {
            if (data && data.code === 0) {
              if (this.hasPagination) {
                this.list =
                  data[this.returnDataKey].list ||
                  data[this.returnDataKey].records ||
                  [];
                this.totalCount =
                  data[this.returnDataKey].totalCount ||
                  data[this.returnDataKey].total ||
                  0;
              } else {
                this.list = data[this.returnDataKey] || [];
              }
              this.$nextTick(() => {
                if (this.$refs.table) {
                  this.$refs.table.doLayout();
                  setTimeout(() => {
                    this.setSelectArray();
                  }, 200);
                }
              });
            } else {
              this.list = [];
              if (this.hasPagination) {
                this.totalCount = 0;
              }
              if (data.msg) {
                this.$message.error(data.msg);
              }
            }

            if (this.hasGraphTable) {
              this.$emit("listLoaded", data);
              //   关闭切换机构后切换会列表界面
              //   this.dataType = 0;
            } else {
              this.$emit("listLoaded");
            }
          }
          this.dataListLoading = false;
        })
        .catch((error) => {
          if (
            error.message.indexOf(
              `Cannot read property 'data' of undefined`
            ) === -1
          ) {
            this.list = [];
            this.dataListLoading = false;
          }
        });
    },
    // 切换图表
    changeDatType(index) {
      if (this.dataType !== index) {
        this.dataType = index;
        if (this.dataType === 0) {
          this.getDataList(0);
        } else {
          this.$emit("changeGraph");
        }
      }
    },
    // 切换机构
    gridselectNode(e) {
      this.model.orgCode = e.orgCode;
      this.model.orgPath = e.orgPath;
      this.model.orgName =
        (this.$store.state.systemSetting.locale || "zh") === "zh"
          ? e.label
          : e.deptI18nCode;
      // 切换机构 重置查询参
      this.$emit("update:model", this.model);
      setTimeout(() => {
        // 换机构 要重置必要参数
        this.getDataList(1);
      });
      if (this.selectNode) {
        this.selectNode();
      } else {
        this.model.deptId = e.id;
        this.model.deptPath = e.deptPath;
        this.model.deptName =
          (this.$store.state.systemSetting.locale || "zh") === "zh"
            ? e.label
            : e.deptI18nCode;
        // 切换机构不重置查询参
        this.$emit("update:model", this.model);
        setTimeout(() => {
          this.getDataList(1);
        });
      }
    },
    // 加载树后自动触发并传递顶级数据，需要
    gridgetTopDept(e) {
      let originForm = JSON.parse(this.originForm);
      if (this.resetDataFormType === "init") {
        originForm["deptId"] = "";
        originForm["deptPath"] = "";
        originForm["deptName"] = "";
      } else {
        originForm["deptId"] = e.id || "";
        originForm["deptPath"] = e.deptPath || "";
        originForm["deptName"] =
          (this.$store.state.systemSetting.locale || "zh") === "zh"
            ? e.label
            : e.deptI18nCode;
      }
      this.originForm = JSON.stringify(originForm);

      this.$emit("update:model", JSON.parse(this.originForm));
      setTimeout(() => {
        if (this.treeAutoGetData) {
          this.getDataList(1);
        }
      });
    },
    setSelectArray() {
      this.multiSelectedKeysArray.forEach((row) => {
        for (let item of this.list) {
          if (row === item[this.rowKey]) {
            this.$refs.table.toggleRowSelection(item, true);
            return;
          } else if (
            typeof item.children !== "undefined" &&
            item.children !== null &&
            item.children.length > 0
          ) {
            // 表格树子节点回选
            for (let i in item.children) {
              if (item.children[i][this.rowKey] === row) {
                this.$refs.table.toggleRowSelection(item.children[i], true);
                return;
              }
            }
          }
        }
      });
    },
    // 翻页记忆  调用清空当前选中数据
    closeAndclearSelection() {
      this.$nextTick(() => {
        this.clearCancleArr = [];
        if (typeof this.$refs.table !== "undefined") {
          this.$refs.table.clearSelection();
          this.pageIndex = 1;
          this.pageSize = 10;
          this.totalCount = 0;
          this.list = [];
        }
      });
    },
    // 翻页记忆当前所选的数组
    // changePageSaveSelect () {
    //   this.selectArrayCopy = this.dataListSelections.map((item) => {
    //     return item[this.rowKey];
    //   });
    // }
  },
  filters: {},
  watch: {
    // 监听那个原始数据的变化，只有一次初始化，之后就不变才对
    originForm: {
      deep: true,
      handler(val) {},
    },
    showTree() {
      this.calcBtnStatus();
    },
    // selectKeysArray: {
    //   handler (val) {
    //     // this.setSelectArray()
    //     this.selectArrayCopy = val
    //   },
    //   immediate: true
    // },
    multiSelectedArr: {
      handler(val) {
        if (val && val.length === 0) {
          // this.$refs.table.clearSelection();
          this.dataListSelections = [];
          // this.$refs.table.doLayout();
        }
      },
      immediate: true,
    },
  },
  render(h) {
    const TEMPLATE_MAP = {
      form: formRender.call(this, h),
      toolbar: toolbarRender.call(this, h),
      table: tableRender.call(this, h),
      graphTable: graphTableRender.call(this, h),
      pagination: paginationRender.call(this, h),
      monitor: monitorRender.call(this, h),
    };
    // 页面渲染是原则上按照layout数组顺序的，但是实际考虑from放在首个
    const l = this.layout.map((item) => TEMPLATE_MAP[item]);
    const formIndex = this.layout.indexOf("form");
    if (formIndex === -1) {
      // 没有查询条件
      return (
        <div
          id="s-grid"
          style={"height:" + this.gridFixedHeight + "px"}
          class={["grid-box", this.hasBoxShadow ? "hasShadow" : ""]}
        >
          {this.height}

          {this.hasTree ? (
            <div
              class={[
                this.showTree
                  ? "icon-ic_shuangjiantou-zuo show-tree-btn"
                  : "icon-ic_shuxingzujian show-tree-btn",
              ]}
              on-click={() => {
                this.showTreeHandle();
              }}
            ></div>
          ) : (
            ""
          )}
          {this.hasTree ? treeRender.call(this, h) : ""}
          <div
            class={[
              "grid-content",
              this.hasTree && this.showTree ? "hastree" : "notree",
            ]}
          >
            {" "}
            {l}
          </div>
        </div>
      );
    } else if (formIndex === 0) {
      // 有form查询条件
      return (
        <div
          id="s-grid"
          style={"height:" + this.gridFixedHeight + "px"}
          class={["grid-box", this.hasBoxShadow ? "hasShadow" : ""]}
        >
          {this.height}

          {this.hasTree ? (
            <div
              class={
                this.showTree
                  ? "icon-ic_shuangjiantou-zuo show-tree-btn"
                  : "icon-ic_shuxingzujian show-tree-btn"
              }
              on-click={() => {
                this.showTreeHandle();
              }}
            ></div>
          ) : (
            ""
          )}
          {this.hasTree ? treeRender.call(this, h) : ""}
          <div
            class={[
              "grid-content",
              this.hasTree && this.showTree ? "hastree" : "notree",
            ]}
            id="boxContent"
          >
            {l[0]}
            {l.slice(1)}
          </div>
        </div>
      );
    } else {
      // 纠正form不在第一个的位置
      temp = l.splice(formIndex, 1);
      return (
        <div
          id="s-grid"
          style={"height:" + this.gridFixedHeight + "px"}
          class={["grid-box", this.hasBoxShadow ? "hasShadow" : ""]}
        >
          {this.height}
          {this.hasTree ? (
            <div
              class={
                this.showTree
                  ? "icon-ic_shuangjiantou-zuo show-tree-btn"
                  : "icon-ic_shuxingzujian show-tree-btn"
              }
              on-click={() => {
                this.showTreeHandle();
              }}
            ></div>
          ) : (
            ""
          )}
          {this.hasTree ? treeRender.call(this, h) : ""}
          <div
            class={[
              "grid-content",
              this.hasTree && this.showTree ? "hastree" : "notree",
            ]}
          >
            {temp}
            {l}
          </div>
        </div>
      );
    }
  },
};
</script>
<style scoped>
.grid-box ::v-deep .el-table:hover .el-table__fixed-right {
  right: 12px !important;
  bottom: 12px !important;
}
.grid-box {
  display: flex;
  align-items: stretch;
  height: 100%;
  position: relative;
  background-color: transparent;
}

.hasShadow {
  box-shadow: 0px 5px 20px 0px rgba(40, 63, 88, 0.05);
}

/* 左侧树 */
.grid-lefttree {
  position: relative;
  box-sizing: border-box;
  max-width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: rgba(249, 251, 255, 1);
  padding: 0 0px 20px 15px;
  border: 1px solid #fff;
  border: 1px solid #fff;
  border-right: 1px solid rgba(224, 228, 242, 1);
  border-radius: 0 0 0 5px;
  overflow-y: hidden;
}

/* 顶层伪类  盖住机构树垂直滚动条 */
.grid-lefttree::after {
  content: '';
  position: absolute;
  z-index: 2;
  right: 2px;
  top: 92px;
  height: calc(100% - 78px);
  width: 2px;
  background: rgba(249, 251, 255, 1);
}
/* 右侧 [表单，表格，工具栏，分页随机组合] */
.grid-content {
  padding: 22px 30px 10px 30px;
  overflow: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.grid-content.hastree {
  width: calc(100% - 230px);
  border-radius: 0 5px 5px 0;
}
.grid-content.notree {
  width: 100%;
  border-radius: 0 5px 5px 5px;
}
/* 查询表单 */
.form-content {
  height: auto;
  position: relative;
  margin-bottom: 28px;
  padding-bottom: 5px;
}
.form-content::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 7px;
  background: #fff;
  z-index: 2;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid rgba(224, 228, 242, 1);
}
.grid-search-form-box {
  background: #fff;
  /* border-bottom: 1px solid rgba(224, 228, 242, 1); */
}

.grid-search-form-box.grid-less {
  height: auto;
}
.grid-search-form-box.grid-more {
  /* height: 45px; */
  overflow: hidden;
}
.search-form {
  border: none;
  flex: 1;
}
/* 按钮样式 */

.grid-content .grid-tool-box ::v-deep .el-upload .el-button,
.grid-content .grid-tool-box .el-button {
  border-width: 1px;
  border-style: solid;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  padding: 0 13px;
  color: #1d84ef;
  background: transparent;
  border-color: #1d84ef;
  /* border-radius: 3px; */
  margin-bottom: 20px;
  margin-right: 12px;
}
@media screen and (max-width: 1540px) {
  .grid-content .grid-tool-box ::v-deep .el-upload .el-button,
  .grid-content .grid-tool-box .el-button {
    border-width: 1px;
    border-style: solid;
    height: 30px;
    line-height: 26px;
    font-size: 12px;
  }
}
.grid-content .grid-tool-box .el-button-group > .el-button:not(:last-child) {
  margin-right: -1px;
}

.grid-content .grid-tool-box .el-button + .el-button {
  margin: 0 12px 20px 0;
}
.grid-content .grid-tool-box ::v-deep .el-upload .el-button.el-button--primary,
.grid-content .grid-tool-box .el-button.el-button--primary {
  color: #ffffff;
  background: linear-gradient(90deg, #007dff 0%, #00a6fb 100%);
  border-color: #1d84ef;
  border: none;
  padding: 1px 14px;
}
.grid-content .grid-tool-box .data-type .el-button.el-button--primary {
  padding: 1px 14px;
}
.grid-content .grid-tool-box .el-button.el-button--primary:hover,
.grid-content .grid-tool-box .el-button.el-button--primary:active {
  background: #007dff;
}

.grid-content .grid-tool-box ::v-deep .el-upload .el-button.is-plain,
.grid-content .grid-tool-box .el-button.el-button--primary.is-plain {
  color: #1d84ef;
  background: transparent;
  border-color: #1d84ef;
}

.grid-content .grid-tool-box .el-button-group .el-button.el-button--primary {
  background: #007dff;
}

/* 隐藏用于测算单行的表单 */
.grid-hide-form {
  /* float: left;
    margin-left: -100000px; */
  visibility: hidden;
  /* padding-bottom: 8px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: red;
}
/* toolbar 和 toolbar融合的按鈕樣式 */
.graph-toolbar {
  /* margin-top: 12px; */
  /* margin-bottom: 18px; */
}
.graph-toolbar,
.graph-toolbar div {
  display: flex;
}

/* 机构树展开收缩控制按钮 */
.show-tree-btn {
  position: absolute;
  cursor: pointer;
  z-index: 30;
  left: -18px;
  top: 0;
  font-size: 14px;
  color: #1d84ef;
  width: 18px;
  height: 34px;
  line-height: 34px;
  text-indent: 4px;
  background: #fff;
  text-align: center;
  border-radius: 4px 0px 0px 4px;
}
.undisplay {
  display: none;
}
/* 表格 */
.el-table {
  height: 100%;
  min-height: 150px;
  overflow: auto;
}
.grid-table-head {
  background-color: #fff;
}
.grid-box .el-table .is-disabled {
  border: none !important;
}

/* 分页 */
.grid-pagination {
  margin-top: 15px;
  text-align: center;
  padding: 0;
}

.grid-tool-box + .el-table,
.form-content + .el-table {
  margin-top: 0px !important;
}
/* 图表 的表格和分页 */
.graph-table-pagination {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 表格竖向滚动条 */
.grid-box ::v-deep .el-table__body-wrapper {
  overflow: scroll;
}
.grid-box ::v-deep .grid-table .el-table__header-wrapper {
  overflow-y: scroll;
}
</style>
