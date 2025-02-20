document.addEventListener('DOMContentLoaded', function() {
    $("#navbar").addClass("static");
    //const navbar = document.getElementById('navbar');
    document.addEventListener("scroll", (event) => {
        if (scrollY > 590) {
            $("#navbar").removeClass("static");
        } else {
            $("#navbar").addClass("static");
        }
    })
});