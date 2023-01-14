import { getItems, getAreas } from '../store/store.js';
import Big from '../static/js/big.mjs';
import Utils from '../static/js/utils.js';

export default {
  emits: ['grid-data'],
  data() {
    return {
      picked: '1',
      isPickInit: false,
      items: getItems(),
      item: {},
      itemId: '',
      itemInput: ' ',
      itemUnit: 'kg',
      areas: getAreas(),
      area: {},
      areaId: '',
      areaInput: ' ',
      areaUnit: 'm',
      ghgKgCo2: ' '
    }
  },
  methods: {
    init() {
      this.item = {}
      this.itemId = ''
      this.itemInput = ' '
      this.itemUnit = 'kg'
      this.area = {}
      this.areaId = ''
      this.areaInput = ' '
      this.areaUnit = 'm'
      this.ghgKgCo2 = ' '
    },
    setGridData() {
      this.$emit('grid-data', {
        picked: this.picked, 
        item: this.item,
        area: this.area,
        valid: this.getValid(),
      });
    },
    getValid() {
      if (this.picked === '1' || this.picked === '3') {
        return this.itemId && Utils.uncomma(this.itemInput) > 0 && this.areaId && Utils.uncomma(this.areaInput) > 0
      } else if (this.picked === '2') {
        return this.itemId && Utils.uncomma(this.itemInput) > 0 && this.areaId
      }
      return false
    },
    setLazyFocusItemInput() {
      setTimeout(() => {
        this.$refs.itemInputRef.focus()
      }, 100)
    },
    onFocusItemInput() {
      this.itemInput = this.itemInput === ' ' ? '': this.itemInput;
    },
    onBlurItemInput() {
      this.itemInput = this.itemInput === '' ? ' ': this.itemInput;
    },
    onItemInputKeyUp(e) {
      this.itemInput = Utils.comma(this.itemInput);
    },
    setLazyFocusAreaInput() {
      setTimeout(() => {
        this.$refs.areaInputRef.focus()
      }, 100)
    },
    onFocusAreaInput() {
      this.areaInput = this.areaInput === ' ' ? '': this.areaInput;
    },
    onBlurAreaInput() {
      this.areaInput = this.areaInput === '' ? ' ': this.areaInput;
    },
    onAreaInputKeyUp(e) {
      this.areaInput = Utils.comma(this.areaInput);
    },
    onSelectedItemId() {
      this.item = this.items.find(element => element.id === this.itemId);
      this.item.itemInput = this.itemInput;
      this.item.itemUnit = this.itemUnit;
      const _ghg = this.item.factors.ghg ? new Big(this.item.factors.ghg).toFixed(3): ' ';
      this.ghgKgCo2 = this.picked === '2'? _ghg: ' ';
      this.item.ghgKgCo2 = this.ghgKgCo2
    },
    onSelectedAreaId() {
      this.area = this.areas.find(element => element.id === this.areaId);
      this.area.areaInput = this.areaInput;
      this.area.areaUnit = this.areaUnit;
    },
  },
  watch: {
    picked() {
      this.areaInput = this.picked === '2'? ' ': this.areaInput;
      this.init();
      this.setGridData();
    },
    itemId() {
      this.onSelectedItemId();
      this.setGridData();
      this.setLazyFocusItemInput();
    },
    itemInput() {
      this.item.itemInput = this.itemInput;
      this.setGridData();
    },
    itemUnit() {
      this.item.itemUnit = this.itemUnit;
      this.setGridData();
    },
    areaId() {
      this.onSelectedAreaId();
      this.setGridData();
      this.setLazyFocusAreaInput();
    },
    areaInput() {
      this.area.areaInput = this.areaInput;
      this.setGridData();
    },
    areaUnit() {
      this.area.areaUnit = this.areaUnit;
      this.setGridData();
    }
  },
  template: `
  <div class="row mb-1">
    <div class="btn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="userMode" id="userMode1" autocomplete="off" value="1" v-model="picked">
      <label class="btn btn-outline-primary" for="userMode1">👨‍🌾 생산자</label>
      <input type="radio" class="btn-check" name="userMode" id="userMode2" autocomplete="off" value="2" v-model="picked">
      <label class="btn btn-outline-primary" for="userMode2">🛒 소비자</label>
      <input type="radio" class="btn-check" name="userMode" id="userMode3" autocomplete="off" value="3" v-model="picked">
      <label class="btn btn-outline-primary" for="userMode3">🧪 전문가</label>
    </div>
  </div>
  <div class="callout callout-default">
    <div class="row mb-1">
      <div class="col-12 col-sm-4">
        <div class="form-floating">
          <select class="form-select border-secondary" id="item" aria-label="select" v-model="itemId">
            <option v-for="item in items" :key="item.id" :value="item.id">{{ item.text }}</option>
          </select>
          <label for="item">재배작물</label>
        </div>
      </div>
      <div class="col-8 col-sm-4 ps-sm-0">
        <div class="form-floating">
          <input type="text" class="form-control border-secondary" id="itemInput" v-model="itemInput"
            placeholder="input" :disabled="itemId === ''" 
            @keyup="onItemInputKeyUp" @focus="onFocusItemInput" @blur="onBlurItemInput" ref="itemInputRef">
          <label for="itemInput">전체 생산량</label>
        </div>
      </div>
      <div class="col-6 col-sm-2 ps-0">
        <div class="form-floating">
          <select class="form-select border-secondary" id="itemUnit" v-model="itemUnit" aria-label="select" :disabled="itemId === ''">
            <option value="kg">kg</option>
            <option value="ton">ton</option>
          </select>
          <label for="itemUnit">단위</label>
        </div>
      </div>
      <div class="col-6 col-sm-2 ps-sm-0">
        <div class="form-floating">
          <input type="text" class="form-control border-secondary" id="ghgKgCo2" name="ghgKgCo2" v-model="ghgKgCo2" placeholder="input" :disabled="false" readonly>
          <label for="ghgKgCo2">kgCO<sub>2</sub></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-4">
        <div class="form-floating">
          <select class="form-select border-secondary" id="area" aria-label="select" v-model="areaId">
            <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.text }}</option>
          </select>
          <label for="area">재배지역</label>
        </div>
      </div>
      <div class="col-8 col-sm-4 ps-sm-0">
        <div class="form-floating">
          <input type="text" class="form-control border-secondary" id="areaInput" v-model="areaInput"
            placeholder="input" :disabled="picked === '2' || areaId === ''"
            @keyup="onAreaInputKeyUp" @focus="onFocusAreaInput" @blur="onBlurAreaInput" ref="areaInputRef">
          <label for="areaInput">재배면적</label>
        </div>
      </div>
      <div class="col-4 col-sm-2 ps-0">
        <div class="form-floating">
          <select class="form-select border-secondary" id="areaUnit" v-model="areaUnit" aria-label="select" :disabled="areaId === ''">
            <option value="m">m²</option>
            <option value="py">평</option>
          </select>
          <label for="areaUnit">단위</label>
        </div>
      </div>
    </div>
  </div>
  `
}