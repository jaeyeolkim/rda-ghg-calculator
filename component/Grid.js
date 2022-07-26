import { getRowData } from '../store/store.js';

export default {
  props: {
    rowid: String
  },
  data() {
    return {
      rowData: getRowData(this.rowid),
      selected: 0,
      selectedObject: {},
      defaultValue: null,
      addValue: null,
      rowValue: null,
      disabled: false
    }
  },
  computed: {
    myOptions() {
      return this.rowData.options;
    }
  },
  methods: {
    setDefaultValue() {
      this.defaultValue = this.selectedObject.defaultValue;
    },
    setSelectedObject() {
      this.selectedObject = this.rowData.options.find(element => element.id === this.selected)
    },
    onClickAdd() {
      this.rowValue = this.defaultValue + this.addValue;
    }
  },
  watch: {
    selected() {
      this.setSelectedObject();
      this.setDefaultValue();
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
        <input type="number" class="form-control" placeholder="" v-model="defaultValue">
        <span class="input-group-text" style="width: 60px;">{{ rowData.unit }}</span>
      </div>
    </div>
    <div class="col ps-0">
      <div class="input-group">
        <input type="number" class="form-control" placeholder="" aria-describedby="button-addon" v-model="addValue">
        <button class="btn btn-outline-secondary" type="button" id="button-addon" @click="onClickAdd">추가</button>
        <input type="text" aria-label="Last name" class="form-control" readonly v-model="rowValue">
      </div>
    </div>
  </div>
  `
}