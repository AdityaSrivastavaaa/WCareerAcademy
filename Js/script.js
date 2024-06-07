document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});

resetForm = () =>document.getElementById("myForm").reset();