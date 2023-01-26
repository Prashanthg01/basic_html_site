  // menu
  $(".menu_close").hide()
  $(".nav-container2").hide()
  $(document).ready(function() {
    $(".menu").on("click", function() {
    $(".nav-container2").show()
    $(".menu").hide()
    $(".menu_close").show()
  })
  })
  // close button
  $(".menu_close").on("click", function() {
    $(".menu").show()
    $(".nav-container2").hide()
    $(".menu_close").hide()
  })
// products side bar
    $(".products_close_btn").hide()
$(".products_btn").on("click", function() {
    $('.products-grid').show();
    $(".products_btn").hide();
    $(".products_close_btn").show();
})

$(".products_close_btn").on("click", function() {
    $('.products-grid').hide();
    $(".products_btn").show();
    $(".products_close_btn").hide();
})

/* products slide show */

// end