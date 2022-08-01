export function Areas() {
  return [
    {id: 0, text: '선택', factor: '지역을 선택해주세요.'}, 
    {id: 1, text: '서울', factor: '1,000'}, 
    {id: 2, text: '경기', factor: '2,000'}, 
    {id: 3, text: '인천', factor: '3,500'}, 
  ];
};

export function Items() {
  return [
    {id: 0, text: '선택', factor: '아이템을 선택해주세요.'}, 
    {id: 1, text: '사과', factor: '1,000'}, 
    {id: 2, text: '바나나', factor: '2,000'}, 
    {id: 3, text: '수박', factor: '3,500'}, 
  ];
};

const gridRows = [
  {
    rowId: 'A1', group: 'A', label: '1', isLast: false, unit: 'kg',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '사과', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'A2', group: 'A', label: '2', isLast: false, unit: 'kg',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '휘발유', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'A3', group: 'A', label: '3', isLast: false, unit: 'kg',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '경유', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'A4', group: 'A', label: '4', isLast: true, unit: 'kWh',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '전기', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'B1', group: 'B', label: '1', isLast: false, unit: 'kWh',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '사과', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'B2', group: 'B', label: '2', isLast: true, unit: 'kg',
    options: [
      { id: 0, text: '선택', defaultValue: null, factor: 0 }, 
      { id: 1, text: '휘발유', defaultValue: 10, factor: 100 }
    ]
  },
  {
    rowId: 'C1', group: 'C', label: '1', isLast: true, unit: 'km',
    options: [
      { id: 0, text: '지역', defaultValue: null, factor: 0 }, 
      { id: 1, text: '서울', defaultValue: 20, factor: 3 }
    ]
  },
];

export function getRowIdsByGroup(group) {
  return getRowsByGroup(group).map(element => element.rowId)
};
export function getRowData(rowId) {
  return gridRows.find(element => element.rowId === rowId)
};

function getRowsByGroup(group) {
  return gridRows.filter(element => element.group === group)
}