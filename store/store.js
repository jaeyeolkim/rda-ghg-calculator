const Areas = [
  {id: '', text: '선택', distance: ''}, 
  {'id': 1, 'text': '수도권(서울)', 'distance': {'1': 30, '2': 125, '3': 138, '4': 161, '5': 212, '6': 296, '7': 288, '8': 395}},
  {'id': 2, 'text': '강원도(원주)', 'distance': {'1': 125, '2': 30, '3': 133, '4': 167, '5': 246, '6': 330, '7': 218, '8': 326}},
  {'id': 3, 'text': '충청북도(청주)', 'distance': {'1': 138, '2': 133, '3': 30, '4': 46, '5': 125, '6': 209, '7': 167, '8': 274}},
  {'id': 4, 'text': '충청남도(대전)', 'distance': {'1': 161, '2': 167, '3': 46, '4': 30, '5': 84, '6': 168, '7': 153, '8': 260}},
  {'id': 5, 'text': '전라북도(전주)', 'distance': {'1': 212, '2': 246, '3': 125, '4': 84, '5': 30, '6': 99, '7': 190, '8': 254}},
  {'id': 6, 'text': '전라남도(광주)', 'distance': {'1': 296, '2': 330, '3': 209, '4': 168, '5': 99, '6': 30, '7': 217, '8': 263}},
  {'id': 7, 'text': '경상북도(대구)', 'distance': {'1': 288, '2': 218, '3': 167, '4': 153, '5': 190, '6': 217, '7': 30, '8': 107}},
  {'id': 8, 'text': '경상남도(부산)', 'distance': {'1': 395, '2': 326, '3': 274, '4': 260, '5': 254, '6': 263, '7': 107, '8': 30}},
];

const Items = [
  {"id": "", "text": "선택", "factors": {"ghg": '', "A1": '', "A2": '', "A3": '', "A4": '', "B1": '', "B2": ''}},
  {"id": 1, "text": "사과(노지)", "factors": {"ghg": 0.372686972540377, "A1": 1, "A2": 2, "A3": 3, "A4": 4, "B1": '', "B2": 5}},
  {"id": 2, "text": "배(노지)", "factors": {"ghg": 0.395072002146347, "A1": 2, "A2": 4, "A3": 6, "A4": 8, "B1": '', "B2": 10}},
  {"id": 3, "text": "복숭아(노지)", "factors": {"ghg": 0.408496713427005, "A1": 3, "A2": 6, "A3": 9, "A4": 12, "B1": '', "B2": 15}},
  {"id": 4, "text": "단감(노지)", "factors": {"ghg": 0.350229594872411, "A1": 4, "A2": 8, "A3": 12, "A4": 16, "B1": '', "B2": 20}},
  {"id": 5, "text": "포도(노지)", "factors": {"ghg": 0.446915249340493, "A1": 5, "A2": 10, "A3": 15, "A4": 20, "B1": '', "B2": 25}},
  {"id": 6, "text": "포도(시설)", "factors": {"ghg": 3.02264207983368, "A1": 6, "A2": 12, "A3": 18, "A4": 24, "B1": '', "B2": 30}},
  {"id": 7, "text": "만감(시설, 한라봉)", "factors": {"ghg": 2.21599677209871, "A1": 7, "A2": 14, "A3": 21, "A4": 28, "B1": '', "B2": 35}},
  {"id": 8, "text": "만감(시설, 세토까(천혜향))", "factors": {"ghg": 1.25387733920688, "A1": 8, "A2": 16, "A3": 24, "A4": 32, "B1": '', "B2": 40}},
  {"id": 9, "text": "참다래(노지)", "factors": {"ghg": 0.574204376488817, "A1": 9, "A2": 18, "A3": 27, "A4": 36, "B1": '', "B2": 45}},
  {"id": 10, "text": "유자(노지)", "factors": {"ghg": 0.378366332992859, "A1": 10, "A2": 20, "A3": 30, "A4": 40, "B1": '', "B2": 50}},
  {"id": 11, "text": "밀감(시설)", "factors": {"ghg": 5.3498512447399, "A1": 11, "A2": 22, "A3": 33, "A4": 44, "B1": '', "B2": 55}},
  {"id": 12, "text": "밀감(비가림)", "factors": {"ghg": 0.230943820999969, "A1": 12, "A2": 24, "A3": 36, "A4": 48, "B1": '', "B2": 60}},
  {"id": 13, "text": "밀감(노지)", "factors": {"ghg": 0.126350580707654, "A1": 13, "A2": 26, "A3": 39, "A4": 52, "B1": '', "B2": 65}},
  {"id": 14, "text": "자두(노지)", "factors": {"ghg": 0.442284110178572, "A1": 14, "A2": 28, "A3": 42, "A4": 56, "B1": '', "B2": 70}},
  {"id": 15, "text": "복분자(노지)", "factors": {"ghg": 0.895324557022358, "A1": 15, "A2": 30, "A3": 45, "A4": 60, "B1": '', "B2": 75}},
  {"id": 16, "text": "매실(노지)", "factors": {"ghg": 0.344598685084127, "A1": 16, "A2": 32, "A3": 48, "A4": 64, "B1": '', "B2": 80}},
  {"id": 17, "text": "벼(노지)", "factors": {"ghg": 2.50996613696211, "A1": 17, "A2": 34, "A3": 51, "A4": 68, "B1": '', "B2": 85}},
  {"id": 18, "text": "보리(노지, 맥주보리)", "factors": {"ghg": 0.791789451667717, "A1": 18, "A2": 36, "A3": 54, "A4": 72, "B1": '', "B2": 90}},
  {"id": 19, "text": "보리(노지, 겉보리)", "factors": {"ghg": 0.966683683049146, "A1": 19, "A2": 38, "A3": 57, "A4": 76, "B1": '', "B2": 95}},
  {"id": 20, "text": "보리(노지, 쌀보리)", "factors": {"ghg": 0.931130531619001, "A1": 20, "A2": 40, "A3": 60, "A4": 80, "B1": '', "B2": 100}},
  {"id": 21, "text": "옥수수(노지, 풋옥수수)", "factors": {"ghg": 0.197617583560829, "A1": 21, "A2": 42, "A3": 63, "A4": 84, "B1": '', "B2": 105}},
  {"id": 22, "text": "고구마(노지)", "factors": {"ghg": 0.269971033321063, "A1": 22, "A2": 44, "A3": 66, "A4": 88, "B1": '', "B2": 110}},
  {"id": 23, "text": "감자(노지, 봄감자)", "factors": {"ghg": 0.248378859157886, "A1": 23, "A2": 46, "A3": 69, "A4": 92, "B1": '', "B2": 115}},
  {"id": 24, "text": "감자(노지, 가을감자)", "factors": {"ghg": 0.251808384153788, "A1": 24, "A2": 48, "A3": 72, "A4": 96, "B1": '', "B2": 120}},
  {"id": 25, "text": "콩(노지, 두류)", "factors": {"ghg": 0.568601845888313, "A1": 25, "A2": 50, "A3": 75, "A4": 100, "B1": '', "B2": 125}},
  {"id": 26, "text": "수박(노지)", "factors": {"ghg": 0.201634666967096, "A1": 26, "A2": 52, "A3": 78, "A4": 104, "B1": '', "B2": 130}},
  {"id": 27, "text": "수박(시설, 반촉성)", "factors": {"ghg": 0.233532792450731, "A1": 27, "A2": 54, "A3": 81, "A4": 108, "B1": '', "B2": 135}},
  {"id": 28, "text": "무(노지, 봄무)", "factors": {"ghg": 0.092793047315403, "A1": 28, "A2": 56, "A3": 84, "A4": 112, "B1": '', "B2": 140}},
  {"id": 29, "text": "무(노지, 가을무)", "factors": {"ghg": 0.105981009635708, "A1": 29, "A2": 58, "A3": 87, "A4": 116, "B1": '', "B2": 145}},
  {"id": 30, "text": "무(노지, 고랭지무)", "factors": {"ghg": 0.0856798239236724, "A1": 30, "A2": 60, "A3": 90, "A4": 120, "B1": '', "B2": 150}},
  {"id": 31, "text": "무(시설)", "factors": {"ghg": 0.118730556426531, "A1": 31, "A2": 62, "A3": 93, "A4": 124, "B1": '', "B2": 155}},
  {"id": 32, "text": "배추(노지, 봄배추)", "factors": {"ghg": 0.086260300170892, "A1": 32, "A2": 64, "A3": 96, "A4": 128, "B1": '', "B2": 160}},
  {"id": 33, "text": "배추(노지, 가을배추)", "factors": {"ghg": 0.111202379169268, "A1": 33, "A2": 66, "A3": 99, "A4": 132, "B1": '', "B2": 165}},
  {"id": 34, "text": "배추(노지, 고랭지배추)", "factors": {"ghg": 0.140612540299302, "A1": 34, "A2": 68, "A3": 102, "A4": 136, "B1": '', "B2": 170}},
  {"id": 35, "text": "배추(시설)", "factors": {"ghg": 0.192159484468986, "A1": 35, "A2": 70, "A3": 105, "A4": 140, "B1": '', "B2": 175}},
  {"id": 36, "text": "대파(노지)", "factors": {"ghg": 1.04953528338543, "A1": 36, "A2": 72, "A3": 108, "A4": 144, "B1": '', "B2": 180}},
  {"id": 37, "text": "쪽파(노지)", "factors": {"ghg": 0.269823451977063, "A1": 37, "A2": 74, "A3": 111, "A4": 148, "B1": '', "B2": 185}},
  {"id": 38, "text": "양배추(노지)", "factors": {"ghg": 0.0969872719311491, "A1": 38, "A2": 76, "A3": 114, "A4": 152, "B1": '', "B2": 190}},
  {"id": 39, "text": "생강(노지)", "factors": {"ghg": 0.473546687932492, "A1": 39, "A2": 78, "A3": 117, "A4": 156, "B1": '', "B2": 195}},
  {"id": 40, "text": "당근(노지)", "factors": {"ghg": 0.734697204490358, "A1": 40, "A2": 80, "A3": 120, "A4": 160, "B1": '', "B2": 200}},
  {"id": 41, "text": "부추(노지)", "factors": {"ghg": 0.306262854982967, "A1": 41, "A2": 82, "A3": 123, "A4": 164, "B1": '', "B2": 205}},
  {"id": 42, "text": "부추(시설)", "factors": {"ghg": 0.436595463874879, "A1": 42, "A2": 84, "A3": 126, "A4": 168, "B1": '', "B2": 210}},
  {"id": 43, "text": "시금치(노지)", "factors": {"ghg": 0.927132087002563, "A1": 43, "A2": 86, "A3": 129, "A4": 172, "B1": '', "B2": 215}},
  {"id": 44, "text": "시금치(시설)", "factors": {"ghg": 0.501334323639265, "A1": 44, "A2": 88, "A3": 132, "A4": 176, "B1": '', "B2": 220}},
  {"id": 45, "text": "참외(시설)", "factors": {"ghg": 0.592012547255087, "A1": 45, "A2": 90, "A3": 135, "A4": 180, "B1": '', "B2": 225}},
  {"id": 46, "text": "딸기(시설, 촉성)", "factors": {"ghg": 1.82002024729545, "A1": 46, "A2": 92, "A3": 138, "A4": 184, "B1": '', "B2": 230}},
  {"id": 47, "text": "딸기(시설, 반촉성)", "factors": {"ghg": 1.64901013961114, "A1": 47, "A2": 94, "A3": 141, "A4": 188, "B1": '', "B2": 235}},
  {"id": 48, "text": "오이(시설, 촉성)", "factors": {"ghg": 1.73870959306144, "A1": 48, "A2": 96, "A3": 144, "A4": 192, "B1": '', "B2": 240}},
  {"id": 49, "text": "오이(시설, 반촉성)", "factors": {"ghg": 0.725953004799465, "A1": 49, "A2": 98, "A3": 147, "A4": 196, "B1": '', "B2": 245}},
  {"id": 50, "text": "오이(시설, 억제)", "factors": {"ghg": 0.46853561781892, "A1": 50, "A2": 100, "A3": 150, "A4": 200, "B1": '', "B2": 250}},
  {"id": 51, "text": "오이(노지)", "factors": {"ghg": 0.196597004659559, "A1": 51, "A2": 102, "A3": 153, "A4": 204, "B1": '', "B2": 255}},
  {"id": 52, "text": "토마토(시설, 촉성)", "factors": {"ghg": 1.0806047166783, "A1": 52, "A2": 104, "A3": 156, "A4": 208, "B1": '', "B2": 260}},
  {"id": 53, "text": "토마토(시설, 반촉성)", "factors": {"ghg": 1.74034978577428, "A1": 53, "A2": 106, "A3": 159, "A4": 212, "B1": '', "B2": 265}},
  {"id": 54, "text": "방울토마토(시설)", "factors": {"ghg": 2.27087325404149, "A1": 54, "A2": 108, "A3": 162, "A4": 216, "B1": '', "B2": 270}},
  {"id": 55, "text": "상추(시설, 쌈채류)", "factors": {"ghg": 0.629615033951423, "A1": 55, "A2": 110, "A3": 165, "A4": 220, "B1": '', "B2": 275}},
  {"id": 56, "text": "고추(노지)", "factors": {"ghg": 2.91997277263231, "A1": 56, "A2": 112, "A3": 168, "A4": 224, "B1": '', "B2": 280}},
  {"id": 57, "text": "고추(시설)", "factors": {"ghg": 2.47092019896646, "A1": 57, "A2": 114, "A3": 171, "A4": 228, "B1": '', "B2": 285}},
  {"id": 58, "text": "호박(시설, 촉성)", "factors": {"ghg": 0.975894126908941, "A1": 58, "A2": 116, "A3": 174, "A4": 232, "B1": '', "B2": 290}},
  {"id": 59, "text": "가지(시설, 촉성)", "factors": {"ghg": 1.87349846289563, "A1": 59, "A2": 118, "A3": 177, "A4": 236, "B1": '', "B2": 295}},
  {"id": 60, "text": "착색단고추(시설, 파프리카)", "factors": {"ghg": 4.49324251688004, "A1": 60, "A2": 120, "A3": 180, "A4": 240, "B1": '', "B2": 300}},
  {"id": 61, "text": "마늘(노지)", "factors": {"ghg": 0.645289754011246, "A1": 61, "A2": 122, "A3": 183, "A4": 244, "B1": '', "B2": 305}},
  {"id": 62, "text": "양파(노지)", "factors": {"ghg": 0.142093937267176, "A1": 62, "A2": 124, "A3": 186, "A4": 248, "B1": '', "B2": 310}},
  {"id": 63, "text": "들깻잎(시설, 촉성)", "factors": {"ghg": 1.33625812391816, "A1": 63, "A2": 126, "A3": 189, "A4": 252, "B1": '', "B2": 315}},
  {"id": 64, "text": "단고추(시설, 촉성, 피망)", "factors": {"ghg": 0.329746618224308, "A1": 64, "A2": 128, "A3": 192, "A4": 256, "B1": '', "B2": 320}},
  {"id": 65, "text": "멜론(시설, 촉성)", "factors": {"ghg": 1.26136672525352, "A1": 65, "A2": 130, "A3": 195, "A4": 260, "B1": '', "B2": 325}},
  {"id": 66, "text": "멜론(시설, 억제)", "factors": {"ghg": 0.15079302848341, "A1": 66, "A2": 132, "A3": 198, "A4": 264, "B1": '', "B2": 330}},
  {"id": 67, "text": "인삼(노지)", "factors": {"ghg": 3.59269946309632, "A1": 67, "A2": 134, "A3": 201, "A4": 268, "B1": '', "B2": 335}},
  {"id": 68, "text": "참깨(노지)", "factors": {"ghg": 3.14933949972941, "A1": 68, "A2": 136, "A3": 204, "A4": 272, "B1": '', "B2": 340}},
  {"id": 69, "text": "느타리버섯(시설)", "factors": {"ghg": 6.48415332533145, "A1": 69, "A2": 138, "A3": 207, "A4": 276, "B1": '', "B2": 345}},
  {"id": 70, "text": "오미자(노지)", "factors": {"ghg": 1.31864353056895, "A1": 70, "A2": 140, "A3": 210, "A4": 280, "B1": '', "B2": 350}},
  {"id": 71, "text": "녹차(노지)", "factors": {"ghg": 1.31699862139276, "A1": 71, "A2": 142, "A3": 213, "A4": 284, "B1": '', "B2": 355}},
  {"id": 72, "text": "더덕(노지)", "factors": {"ghg": 5.65603953456125, "A1": 72, "A2": 144, "A3": 216, "A4": 288, "B1": '', "B2": 360}},
  {"id": 73, "text": "양송이버섯(시설)", "factors": {"ghg": 3.34343938068561, "A1": 73, "A2": 146, "A3": 219, "A4": 292, "B1": '', "B2": 365}},
  {"id": 74, "text": "새송이버섯(시설)", "factors": {"ghg": 0.429565050630226, "A1": 74, "A2": 148, "A3": 222, "A4": 296, "B1": '', "B2": 370}},
  {"id": 75, "text": "땅콩(노지)", "factors": {"ghg": 0.570915883395976, "A1": 75, "A2": 150, "A3": 225, "A4": 300, "B1": '', "B2": 375}}
];

const gridFactors = [
  { "id": '', "rowId": '', "text": '선택', "emissionFactor": null }, 
  { "id": 1, "rowId": 'A1', "text": '단일비료', "emissionFactor": 1.01},
  { "id": 2, "rowId": 'A1', "text": '복합비료', "emissionFactor": 1.27},
  { "id": 3, "rowId": 'A1', "text": '토양계량제', "emissionFactor": 0.206},
  { "id": 4, "rowId": 'A1', "text": '액상비료', "emissionFactor": 1.24},
  { "id": 5, "rowId": 'A1', "text": '부산물비료', "emissionFactor": 0.0161},
  { "id": 6, "rowId": 'A1', "text": '액비', "emissionFactor": 0.026},
  { "id": 7, "rowId": 'A2', "text": '제초제', "emissionFactor": 8.56},
  { "id": 8, "rowId": 'A2', "text": '살균제', "emissionFactor": 9.15},
  { "id": 9, "rowId": 'A2', "text": '살충제', "emissionFactor": 9.36},
  { "id": 10, "rowId": 'A2', "text": '생장조절제', "emissionFactor": 7.59},
  { "id": 11, "rowId": 'A3', "text": '경유(고정)', "emissionFactor": 2.22145},
  { "id": 12, "rowId": 'A3', "text": '경유(이동)', "emissionFactor": 2.2132},
  { "id": 13, "rowId": 'A3', "text": '실내등유(고정)', "emissionFactor": 2.21362},
  { "id": 14, "rowId": 'A3', "text": '실내등유(이동)', "emissionFactor": 2.20565},
  { "id": 15, "rowId": 'A3', "text": '휘발유(고정)', "emissionFactor": 1.63256},
  { "id": 16, "rowId": 'A3', "text": '휘발유(이동)', "emissionFactor": 1.62532},
  { "id": 17, "rowId": 'A3', "text": 'LPG(고정)', "emissionFactor": 2.25185},
  { "id": 18, "rowId": 'A3', "text": 'LPG(이동)', "emissionFactor": 2.24676},
  { "id": 19, "rowId": 'A4', "text": '전기', "emissionFactor": 0.495},
  { "id": 20, "rowId": 'B1', "text": '전기', "emissionFactor": 0.495},
  { "id": 21, "rowId": 'B2', "text": '기타자재', "emissionFactor": 2.24676},
  { "id": 22, "rowId": 'C1', "text": '트럭', "emissionFactor": 0.249}
];
const gridFactorAvg = [
  { "rowId": 'A1', "factorAvg": 0.628017},
  { "rowId": 'A2', "factorAvg": 8.665},
  { "rowId": 'A3', "factorAvg": 2.2132},
  { "rowId": 'A4', "factorAvg": 0.495},
  { "rowId": 'B1', "factorAvg": 0.495},
  { "rowId": 'B2', "factorAvg": 2.24676},
  { "rowId": 'C1', "factorAvg": 0.249}
];

const gridRows = [
  {
    rowId: 'A1', group: 'A', label: '비료', isLast: false, unit: 'kg',
    factorAvg: getGridFactorAvgByRowId('A1'),
    rowItems: getGridFactorsByRowId('A1')
  },
  {
    rowId: 'A2', group: 'A', label: '작물보호제', isLast: false, unit: 'kg',
    factorAvg: getGridFactorAvgByRowId('A2'),
    rowItems: getGridFactorsByRowId('A2')
  },
  {
    rowId: 'A3', group: 'A', label: '면세유류', isLast: false, unit: 'kg',
    factorAvg: getGridFactorAvgByRowId('A3'),
    rowItems: getGridFactorsByRowId('A3')
  },
  {
    rowId: 'A4', group: 'A', label: '전기', isLast: true, unit: 'kWh',
    factorAvg: getGridFactorAvgByRowId('A4'),
    rowItems: getGridFactorsByRowId('A4')
  },
  {
    rowId: 'B1', group: 'B', label: '전기', isLast: false, unit: 'kWh',
    factorAvg: getGridFactorAvgByRowId('B1'),
    rowItems: getGridFactorsByRowId('B1')
  },
  {
    rowId: 'B2', group: 'B', label: '기타자재', isLast: true, unit: 'kg',
    factorAvg: getGridFactorAvgByRowId('B2'),
    rowItems: getGridFactorsByRowId('B2')
  },
  {
    rowId: 'C1', group: 'C', label: '유통지역', isLast: true, unit: 'km',
    factorAvg: getGridFactorAvgByRowId('C1'),
    rowItems: getGridFactorsByRowId('C1')
  },
];


export function getAreas() {
  return Areas;
}

export function getItems() {
  // 유통지역 rowValue 계산시에도 mainItemFactor 값이 undefined 되지 않도록 무의미한 값 1을 설정한다.
  Items.forEach(el => el.factors['C1'] = 1);
  return Items;
}

export function getRowIdsByGroup(group) {
  return getRowsByGroup(group).map(el => el.rowId)
};
export function getRowData(rowId) {
  return gridRows.find(el => el.rowId === rowId)
};
export function getAreaDistanceByRowAreaId(areaId) {
  return Areas.find(el => el.id === areaId).distance
};
export function getGridEmissionFactorById(id) {
  return gridFactors.find(el => el.id === id).emissionFactor
};

function getRowsByGroup(group) {
  return gridRows.filter(el => el.group === group)
}

function getGridFactorsByRowId(rowId) {
  return gridFactors.filter(el => el.rowId === rowId 
    || (rowId !== 'A4' && rowId !== 'B1' && rowId !== 'B2' && rowId !== 'C1' && el.rowId === ''))
}

function getGridFactorAvgByRowId(rowId) {
  return gridFactorAvg.find(el => el.rowId === rowId).factorAvg
}