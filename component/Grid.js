import { getAreas, getRowData, getAreaDistanceByRowAreaId } from '../store/store.js';
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
      areas: getAreas(),
      mainItemFactor: null,
      distance: '',
      addValue: null,
      rowValue: null,
      disabled: true,
    }
  },
  computed: {
    myAreaDistance() {
      return getAreaDistanceByRowAreaId(this.main.area.id)
    }
  },
  methods: {
    setRowValue() {
      if (!this.mainItemFactor || !this.main.valid) {
        this.rowValue = null;
        return;
      }
      this.rowValueCalculation();
      this.addGhg();
    },
    rowValueCalculation() {
      const addValue = this.addValue ? Utils.uncomma(this.addValue) : 0;
      const itemInput = this.main.item.itemInput ? Utils.uncomma(this.main.item.itemInput) : 0;
      const areaInput = this.main.area.areaInput ? Utils.uncomma(this.main.area.areaInput) : 0;
      let useValue = 0;
      if (this.rowid === 'C1') {
        useValue = new Big(this.addValue * (itemInput * 0.001));
      } else {
        useValue = new Big(this.mainItemFactor * (areaInput * 0.001)).plus(addValue);
      }
      this.rowValue = Utils.comma(new Big(useValue * this.rowData.factorAvg).round(3));
    },
    addGhg() {
      this.$emit('add-ghg', Utils.uncomma(this.rowValue));
    },
    onMainChanged() {
      this.disabled = !this.main.valid
      this.mainItemFactor = this.main.item.factors ? this.main.item.factors[this.rowid]: null;
      this.setRowValue();
    },
    onDistanceSelected() {
      this.addValue = this.myAreaDistance[this.distance]
    },
    onClickAdd() {
      this.setRowValue();
    },
    onAddValueKeyUp(e) {
      this.addValue = Utils.comma(this.addValue);
    }
  },
  watch: {
    distance() {
      this.onDistanceSelected();
      this.setRowValue();
    },
    main() {
      this.onMainChanged();
    }
  },
  template: `
  <div class="row" :class="{ 'mb-1': !rowData.isLast }">
    <div class="col-3">
      <label class="input-group-text bg-light" for="">{{ rowData.label }}</label>
    </div>
    <div class="col-6 ps-0">
      <div class="input-group">
        <select v-if="rowid === 'C1'" class="form-select" id="distance" v-model="distance" :disabled="disabled" required>
          <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.text }}</option>
        </select>
        <!-- <div class="invalid-feedback">필수 선택입니다.</div> -->
        <input v-else type="text" class="form-control text-end" placeholder="" 
         :class="{ 'bg-warning bg-opacity-10': mainItemFactor, 'bg-white border-0': rowid === 'B1' }"
         :id="rowid + '_mainItemFactor'" v-model="mainItemFactor" readonly>
        <span v-show="rowid !== 'C1'" class="badge bg-white px-1 pt-3 text-secondary" :style="{width: + (rowid === 'B1'? 21: 20) +'px'}">
          <i v-show="rowid !== 'B1'" class="fa-solid fa-circle-plus"></i>
        </span>
        <input type="text" class="form-control text-end" placeholder="" aria-describedby="button-addon" 
         :id="rowid + '_addValue'" v-model="addValue" :readonly="rowid === 'C1'? true: disabled" @keyup="onAddValueKeyUp">
        <span class="input-group-text fw-lighter p-2 bg-light" style="width: 3em; font-size: 0.9em;">{{ rowData.unit }}</span>
      </div>
    </div>
    <div class="col-3 p-0">
      <div class="input-group">
        <input type="text" aria-label="Last name" class="form-control text-end" :id="rowid + '_rowValue'" name="rowValue" v-model="rowValue" readonly>
        <span class="input-group-text fw-lighter p-2 bg-light" style="width: 4em; font-size: 0.9em;">kgCO<sub>2</sub></span>
      </div>
    </div>
  </div>
  `
}