document.addEventListener('DOMContentLoaded', function () {
    function menu() {
        const btn = document.getElementById('btn-see-menu');
        btn.addEventListener('click', function () {
            const hideMethod = document.getElementById('hideMethodMenu');
            if (!hideMethod.classList.contains('hideMethodMenu')) {
                hideMethod.classList.add('hideMethodMenu');
                btn.textContent = "See More";

            } else {
                hideMethod.classList.remove('hideMethodMenu');
                btn.textContent = "See Less";
            }

        });
    }
    menu();
});

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "romashggggg@gmail.com",
        Password: "pokhara!@#",
        To: '',
        From: document.getElementById('email').value,
        Subject: "new enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("number").value
            + "<br> Phone: " + document.getElementById("email").value
            + "<br> Suggest: " + document.getElementById("suggest").value
            + "<br> Person: " + document.getElementById("person").value
    }).then(
        message => alert('smessage sent succesfully')
    );
}
Footer
