export default {
  props: {
    ghg: String
  },
  template: `
  <div class="modal fade" id="resultModal" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="resultModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="max-width: 600px">
      <div class="modal-content rounded">
        <div class="row">
          <div class="col-6 modal-bg text-center">
            <div class="modal-custom-header"></div>
            <div class="modal-body py-5">
              <!-- <h2 class="display-1"><i class="fa-solid fa-temperature-three-quarters"></i></h2> -->
              <h2 class="display-1"><i class="fa-solid fa-paw"></i></h2>
              <span class="lead">배출량 계산 결과</span>
            </div>
          </div>
          <div class="col-6 px-0 bg-dark">
            <div class="modal-header border-0">
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-5">
              <div class="modal-text" style="overflow-wrap: break-word;">
                <h2 class="display-2 lead">{{ ghg }}</h2>
                <span class="lead">kgCO<sub>2</sub></span>
              </div>
            </div>
            <div class="modal-footer border-0">
              <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}