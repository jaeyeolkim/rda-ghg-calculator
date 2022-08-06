import Big from './big.mjs';

export default {
  numberFormat(value) {
    return this.comma(this.uncomma(value));
  },
  comma(str) {
    return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  },
  uncomma(str) {
    return String(str).replace(/[^\d]+/g, '');
  },
  formValidThenShowResult(modalId, callback) {
    const forms = document.querySelectorAll('.needs-validation');
    const _this = this;
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault()
          event.stopPropagation()

          if (form.checkValidity()) {
            // ghg 계산
            const formData = new FormData(form)
            let ghg = 0;
            for (let [key, val] of formData.entries()) {
              if (key === 'rowValue' && val) {
                ghg = new Big(Number(ghg)).plus(Number(_this.uncomma(val)))
              }
            }
            callback(_this.comma(ghg));

            // 계산 결과 표시
            new bootstrap.Modal(document.getElementById(modalId), {
              keyboard: false
            }).show()
          }
          
          form.classList.add('was-validated')
        }, false)
      });
  }
}