$(".nav-container2").hide()
$(document).ready(function() {
    $(".menu").on("click", function() {
        $(".nav-container2").show()
    })
})
$(".close-btn").on("click", function() {
        $(".nav-container2").hide()
    })
