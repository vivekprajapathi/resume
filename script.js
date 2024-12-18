$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault(); // Prevents form from submitting

        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        // Simple form validation
        if (name && email && subject && message) {
            $("#formMessage").text("Thank you for reaching out, " + name + "! Your message has been sent.");
            $("#contactForm")[0].reset();
        } else {
            $("#formMessage").text("Please fill in all the fields.");
        }
    });
});