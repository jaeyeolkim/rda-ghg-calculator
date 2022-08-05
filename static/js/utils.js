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
  formValidThenShowResult(modalId) {
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()

            if (form.checkValidity()) {
            new bootstrap.Modal(document.getElementById(modalId), {
                keyboard: false
            }).show()
            }

            form.classList.add('was-validated')
        }, false)
        });
  }
}