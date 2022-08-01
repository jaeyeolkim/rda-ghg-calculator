export default {
  props: {
    ghg: String
  },
  template: `
  <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light bg-gradient">
        <div class="modal-header border-0">
          <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-5">
          <div class="d-flex justify-content-center">
            <h3 class="display-1">
              🪴 {{ ghg }}
              <small class="text-muted">kg</small>
            </h3>
          </div>
        </div>
        <div class="modal-footer border-0">
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button> -->
        </div>
      </div>
    </div>
  </div>
  `
}