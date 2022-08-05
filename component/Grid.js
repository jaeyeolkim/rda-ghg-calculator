import { getRowData } from '../store/store.js';
import Big from '../static/js/big.mjs';
import Utils from '../static/js/utils.js';

export default {
  props: {
    rowid: String,
    main: Object,
  },
  data() {
    return {
      rowData: getRowData(this.rowid),
      selected: '',
      selectedObj: {},
      defaultValue: null,
      addValue: null,
      rowValue: null,
      disabled: true,
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
      const defaultValue = this.defaultValue ? Utils.uncomma(this.defaultValue) : 0;
      const addValue = this.addValue ? Utils.uncomma(this.addValue) : 0;
      const mainItemFactor = new Big(Utils.uncomma(this.main.item.factor));
      const mainAreaFactor = new Big(Utils.uncomma(this.main.area.factor));
      // @TODO 
      console.log('mainAreaFactor', mainAreaFactor.toLocaleString())
      this.rowValue = Utils.comma(mainItemFactor * (new Big(defaultValue).plus(addValue)));
    },
    addGhg() {
      this.$emit('add-ghg', this.rowValue.replace(/,/gi, ''));
    },
    onMainChanged() {
      this.disabled = !(this.main.item.id && this.main.area.id) || this.main.picked !== '1'
    },
    onSelected() {
      this.selectedObj = this.rowData.options.find(element => element.id === this.selected)
    },
    onClickAdd() {
      this.setRowValue();
    },
    onKeyUp(e) {
      this.addValue = Utils.numberFormat(this.addValue);
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
        <select class="form-select" :id="rowid + '_selected'" v-if="rowData.unit !== 'kWh'" v-model="selected" :disabled="disabled" required>
          <option v-for="options in myOptions" :key="options.id" :value="options.id">{{ options.text }}</option>
        </select>
        <div class="invalid-feedback">필수 선택입니다.</div>
      </div>
    </div>
    <div class="col ps-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" :id="rowid + '_defaultValue'" v-model="defaultValue" readonly>
        <span class="input-group-text" style="width: 60px;">{{ rowData.unit }}</span>
      </div>
    </div>
    <div class="col ps-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" aria-describedby="button-addon" 
        :id="rowid + '_addValue'" v-model="addValue" :readonly="disabled || !selected" @keyup="onKeyUp">
        <button class="btn btn-outline-secondary px-2 rounded-end" type="button" id="button-addon" @click="onClickAdd" :disabled="disabled || !selected || !addValue">추가</button>
        <input type="text" aria-label="Last name" class="form-control" :id="rowid + '_rowValue'" v-model="rowValue" readonly>
      </div>
    </div>
  </div>
  `
}