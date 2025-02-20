document.addEventListener('DOMContentLoaded', function() {
    $("#navbar").addClass("no-background");
    //const navbar = document.getElementById('navbar');
    document.addEventListener("scroll", (event) => {
        if (scrollY == 0) {
            $("#navbar").addClass("no-background");
        } else {
            $("#navbar").removeClass("no-background");
        }
    })
});