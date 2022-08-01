import { getRowData } from '../store/store.js';
import Big from '../static/js/big.mjs';

export default {
  props: {
    rowid: String,
    main: Object,
  },
  data() {
    return {
      rowData: getRowData(this.rowid),
      selected: 0,
      selectedObj: {},
      defaultValue: null,
      addValue: null,
      rowValue: null,
      editable: false,
    }
  },
  computed: {
    myOptions() {
      return this.rowData.options;
    }
  },
  methods: {
    setDefaultValue() {
      this.defaultValue = this.selectedObj.defaultValue;
      this.setRowValue();
    },
    setRowValue() {
      if (this.defaultValue === null) {
        this.rowValue = null;
        return;
      }
      this.rowValueCalculation();
      this.addGhg();
    },
    rowValueCalculation() {
      const defaultValue = this.defaultValue ? this.defaultValue : 0;
      const addValue = this.addValue ? this.addValue : 0;
      const mainFactor = new Big(this.main.item.factor.replace(/,/gi, ''));
      this.rowValue = Number((mainFactor * (new Big(defaultValue).plus(addValue))).toFixed(0)).toLocaleString();
    },
    addGhg() {
      this.$emit('add-ghg', this.rowValue.replace(/,/gi, ''));
    },
    onMainChanged() {
      this.editable = this.main.picked !== '1'
    },
    onSelected() {
      this.selectedObj = this.rowData.options.find(element => element.id === this.selected)
    },
    onClickAdd() {
      this.setRowValue();
    }
  },
  watch: {
    selected() {
      this.onSelected();
      this.setDefaultValue();
    },
    main() {
      this.onMainChanged();
    }
  },
  template: `
  <div class="row" :class="{ 'mb-2': !rowData.isLast }">
    <div class="col">
      <div class="input-group">
        <label class="input-group-text bg-light" for="" style="width: 5rem;">{{ rowData.label }}</label>
        <select class="form-select" v-if="rowData.unit !== 'kWh'" v-model="selected">
          <option v-for="options in myOptions" :key="options.id" :value="options.id">{{ options.text }}</option>
        </select>
      </div>
    </div>
    <div class="col ps-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" v-model="defaultValue" :disabled="editable">
        <span class="input-group-text" style="width: 60px;">{{ rowData.unit }}</span>
      </div>
    </div>
    <div class="col ps-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" aria-describedby="button-addon" v-model="addValue">
        <button class="btn btn-outline-secondary px-2 rounded-end" type="button" id="button-addon" @click="onClickAdd">추가</button>
        <input type="text" aria-label="Last name" class="form-control" readonly v-model="rowValue">
      </div>
    </div>
  </div>
  `
}