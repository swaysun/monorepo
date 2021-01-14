- `auto-select`
  | 组件 | 原组件 |
  | --- | ----- |
  | `auto-select.vue` | `src/components/template/autoSelect.vue` |
- `comfirm-dlg`
  | 组件 | 原组件 |
  | --- | ----- |
  | `comfirm-dlg.vue` | `src/components/template/autoSelect.vue` |
- `grid`
  | 组件 | 原组件 |
  | --- | ----- |
  | `grid.vue` | `src/components/template/grid/grid.vue` |
  | `feelview-tree.vue` | `src/components/template/feelview-tree.vue` |
- `icon-svg`
  | 组件 | 原组件 |
  | --- | ----- |
  | `icon-svg.vue` | `src/components/icon-svg/index.vue` |
- `tree-select`
  | 组件 | 原组件 |
  | --- | ----- |
  | `tree-select.vue` | `src/components/treeSelect.vue` |
  | `dept-tree.vue` | `src/views/components/dept-tree.vue` |
  | `region-tree.vue` | `src/views/components/region-tree.vue` |

* `components`
  - `d2-container`
    ```
      模块：无
    ```
  - `el-tree-for-menu`
    ```
      模块：user
    ```
  - `el-tree-select`
    ```
      模块：user
    ```
  - `icon-svg`
    ```
      模块：@grg/components
      引用：import { IconSvg } from @grg/components
    ```
  - `table-tree-column`
    ```
      模块：无
    ```
  - `template`
    - `comfirmDlg`
      ```
        模块：@grg/components
        引用：import { GrgConfirm } from @grg/components
      ```
    - `grid`
      ```
        模块：@grg/components
        引用：import { Grid } from @grg/components
      ```
    - `autoSelect`
      ```
        模块：@grg/components
        引用：import { AutoSelect } from @grg/components
      ```
    - `baseDlg`
      ```
        模块：@grg/components
        引用：import { BaseDlg } from @grg/components
      ```
    - `complex-grid`
      ```
        模块：operate
        引用：import complexGrid from '@/components/template/complex-grid.vue';
      ```
    - `customTable`
      ```
        模块：无
      ```
    - `feelview-tree`
      ```
        模块：user ｜ @grg/components
        引用：import { FeelviewTree } from @grg/components
        引用：import FeelviewTree from '@/views/template/feelview-tree.vue'
      ```
    - `gridnew`
      ```
        模块：main
        引用：import gridDiv from '@/components/template/gridnew.vue';
      ```
    - `right_menu`
      ```
        模块：main
      ```
    - `tabs-grid`
      ```
        模块：operate
      ```
  - `customTable`
    ```
      模块：operate
    ```
  - `deptTree`
    ```
      模块：无
    ```
  - `devlist`
    ```
      模块：operate
    ```
  - `dictInfo`
    ```
      模块：无
    ```
  - `importExcel`
    ```
      模块：operate ｜ user | @grg/components
    ```
  - `sel-table`
    ```
      模块：operate
    ```
  - `treeSelect`
    ```
      模块：operate | @grg/components
    ```
* `views/components`
  - `d2-icon`
    ```
      模块：main
      已删除，用 html 元素模拟
    ```
  -
  - `header-locales`
    ```
      模块：main
    ```
  - `header-log`
    ```
      模块：main
    ```
  - `i18n`
    ```
      模块：all
    ```
  - `terminal-detail`
    ```
      模块：operate
    ```
  - `dept-tree`
    ```
      模块：main | operate | user | @grg/components
    ```
  - `region-tree`
    ```
      模块：operate | @grg/components
    ```
  - `template/feelview-tree.vue`
    ```
      模块：operate
    ```

<!-- 调整 -->

- 有些像 Sass 之类的预处理器无法正确解析  >>>，可以使用  /deep/  或  ::v-deep  操作符取而代之。
-
