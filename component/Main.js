import { Items, Areas } from '../store/store.js';

export default {
  props: {
  },
  emits: ['grid-data'],
  data() {
    return {
      picked: '1',
      items: Items(),
      item: {},
      itemId: '',
      areas: Areas(),
      area: {},
      areaId: '',
    }
  },
  created() {
    this.itemInput = this.items[0].factor;
    this.areaInput = this.areas[0].factor;
  },
  methods: {
    onSelectedItemId() {
      this.item = this.items.find(element => element.id === this.itemId);
      this.itemInput = this.item.factor;    
    },
    onSelectedAreaId() {
      this.area = this.areas.find(element => element.id === this.areaId);
      this.areaInput = this.area.factor;
    },
    setGridData() {
      this.$emit('grid-data', {
        picked: this.picked, 
        item: this.item,
        area: this.area,
      });
    }
  },
  watch: {
    picked() {
      this.setGridData();
    },
    itemId() {
      this.onSelectedItemId();
      this.setGridData();
    },
    areaId() {
      this.onSelectedAreaId();
      this.setGridData();
    }
  },
  template: `
  <div class="row callout callout-default">
    <div class="col-4">
      <input class="form-check-input radio-scale-up" type="radio" name="userMode" id="userMode1" value="1" v-model="picked">
      <label class="form-check-label" for="userMode1">
        <h4 :class="{ 'text-primary': picked === '1' }">👨‍🌾 Default</h4>
      </label>
    </div>
    <div class="col-4">
      <input class="form-check-input radio-scale-up" type="radio" name="userMode" id="userMode1" value="2" v-model="picked">
      <label class="form-check-label" for="userMode1">
      <h4 :class="{ 'text-primary': picked === '2' }">🛒 Default</h4>
      </label>
    </div>
    <div class="col-4">
      <input class="form-check-input radio-scale-up" type="radio" name="userMode" id="userMode1" value="3" v-model="picked">
      <label class="form-check-label" for="userMode1">
      <h4 :class="{ 'text-primary': picked === '3' }">👩‍🔧 Default</h4>
      </label>
    </div>
  </div>
  <div class="row mb-1">
    <div class="col-5">
      <div class="form-floating">
        <select class="form-select border-secondary" id="item" aria-label="select" v-model="itemId">
          <option v-for="item in items" :key="item.id" :value="item.id">{{ item.text }}</option>
        </select>
        <label for="item">아이템</label>
      </div>
    </div>
    <div class="col ps-0">
      <div class="form-floating">
        <input type="text" class="form-control border-secondary" id="itemInput" v-model="itemInput"
          placeholder="input" readonly>
        <label for="itemInput">아이템 생산량</label>
      </div>
    </div>
    <div class="col-2 ps-0">
      <div class="form-floating">
        <select class="form-select border-secondary" id="itemUnit" aria-label="select" :disabled="itemId === 0">
          <option value="kg">kg</option>
          <option value="ton">ton</option>
        </select>
        <label for="itemUnit">단위</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-5">
      <div class="form-floating">
        <select class="form-select border-secondary" id="area" aria-label="select" v-model="areaId">
          <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.text }}</option>
        </select>
        <label for="area">지역</label>
      </div>
    </div>
    <div class="col ps-0">
      <div class="form-floating">
        <input type="text" class="form-control border-secondary" id="areaInput" v-model="areaInput"
          placeholder="input" readonly>
        <label for="areaInput">지역 면적</label>
      </div>
    </div>
    <div class="col-2 ps-0">
      <div class="form-floating">
        <select class="form-select border-secondary" id="areaUnit" aria-label="select" :disabled="areaId === 0">
          <option value="m">m³</option>
          <option value="평">평</option>
        </select>
        <label for="areaUnit">단위</label>
      </div>
    </div>
  </div>
  `
}