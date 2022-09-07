import { getAreas, getRowData, getAreaDistanceByRowAreaId, getGridEmissionFactorById } from '../store/store.js';
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
      rowItem: '',
      mainItemFactor: null,
      distance: '',
      addValue: null,
      rowValue: null,
      disabled: true,
    }
  },
  created() {
    this.rowItem = this.rowData.rowItems[0].id
  },
  computed: {
    myAreaDistance() {
      return getAreaDistanceByRowAreaId(this.main.area.id)
    }
  },
  methods: {
    setRowValue() {
      if ((this.rowid !== 'B1' && !this.mainItemFactor) || !this.main.valid) {
        this.distance = ''
        this.addValue = null;
        this.rowValue = null;
        return;
      }
      this.rowValueCalculation();
    },
    rowValueCalculation() {
      const itemFactor = this.rowid === 'B1' ? 1 : this.mainItemFactor;
      const addValue = this.addValue ? Utils.uncomma(this.addValue) : 0;
      const itemInput = this.main.item.itemInput ? Utils.uncomma(this.main.item.itemInput) : 0;
      const areaInput = this.main.area.areaInput ? Utils.uncomma(this.main.area.areaInput) : 0;
      const rowFactor = this.main.picked === '3' ? getGridEmissionFactorById(this.rowItem) : this.rowData.factorAvg;
      const itemUnit = this.main.item.itemUnit === 'kg' ? 1 : 1000;
      const areaUnit = this.main.area.areaUnit === 'm' ? 1 : 3.305785;
      let useValue = 0;
      if (this.rowid === 'C1') {
        useValue = new Big(addValue * (itemInput * 0.001 * itemUnit));
      } else if (this.rowid === 'B1') {
        useValue = new Big(addValue);
      } else {
        useValue = new Big(itemFactor * (areaInput * 0.001 * areaUnit)).plus(addValue);
      }

      this.rowValue = Utils.comma(new Big(useValue * rowFactor).round(3));
    },
    onMainChanged() {
      this.disabled = !this.main.valid
      this.mainItemFactor = this.main.item.factors ? this.main.item.factors[this.rowid]: null;
    },
    onDistanceSelected() {
      this.addValue = this.myAreaDistance[this.distance]
    },
    onAddValueKeyUp(e) {
      this.addValue = Utils.comma(this.addValue);
      this.setRowValue();
    }
  },
  watch: {
    distance() {
      this.onDistanceSelected();
      this.setRowValue();
    },
    rowItem() {
      this.setRowValue();
    },
    main() {
      this.onMainChanged();
      this.setRowValue();
    },
  },
  template: `
  <div class="row" :class="{ 'mb-1': !rowData.isLast }">
    <div class="col-3">
      <label v-if="main.picked !== '3'" class="input-group-text bg-light" for="">{{ rowData.label }}</label>
      <select v-if="main.picked === '3'" class="form-select" id="rowItem" v-model="rowItem" :disabled="disabled" required>
        <option v-for="item in rowData.rowItems" :key="item.id" :value="item.id">{{ item.text }}</option>
      </select>
      <div v-if="main.picked === '3'" class="invalid-feedback">필수 선택입니다.</div>
    </div>
    <div class="col-6 ps-0">
      <div class="input-group">
        <select v-if="rowid === 'C1'" class="form-select" id="distance" v-model="distance" :disabled="disabled" required>
          <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.text }}</option>
        </select>
        <input v-else type="text" class="form-control text-end" placeholder="" 
         :class="{ 'bg-warning bg-opacity-10': mainItemFactor, 'bg-white border-0': rowid === 'B1' }"
         :id="rowid + '_mainItemFactor'" v-model="mainItemFactor" readonly>

        <span v-show="rowid !== 'C1'" class="badge bg-white px-1 pt-3 text-secondary" :style="{width: + (rowid === 'B1'? 21: 20) +'px'}">
          <i v-show="rowid !== 'B1'" class="fa-solid fa-circle-plus"></i>
        </span>
        <input type="text" class="form-control text-end" placeholder="" aria-describedby="button-addon" 
         :id="rowid + '_addValue'" v-model="addValue" :readonly="rowid === 'C1'? true: disabled" @keyup="onAddValueKeyUp">
        <span class="input-group-text fw-lighter p-2 bg-light" style="width: 3em; height: 38px; font-size: 0.9em;">{{ rowData.unit }}</span>

        <div v-if="rowid === 'C1'" class="invalid-feedback">필수 선택입니다.</div>
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