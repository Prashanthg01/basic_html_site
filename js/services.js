// navigation start
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
    // end
    $("#s_media").hide()
    $("#main_site").hide()
    $("#mob_apps").hide()
    $("#e_com").hide()
    $(document).ready(function() {
        $("#product_specific_btn").on("click", function() {
            $("#product_specific").show()
            $("#s_media").hide()
            $("#main_site").hide()
            $("#mob_apps").hide()
            $("#e_com").hide()
        })

        $("#s_media_btn").on("click", function() {
            $("#s_media").show()
            $("#product_specific").hide()
            $("#main_site").hide()
            $("#mob_apps").hide()
            $("#e_com").hide()
        })

        $("#main_site_btn").on("click", function() {
            $("#main_site").show()
            $("#product_specific").hide()
            $("#s_media").hide()
            $("#mob_apps").hide()
            $("#e_com").hide()
        })

        $("#mob_apps_btn").on("click", function() {
            $("#mob_apps").show()
            $("#product_specific").hide()
            $("#s_media").hide()
            $("#main_site").hide()
            $("#e_com").hide()
        })

        $("#e_com_btn").on("click", function() {
            $("#e_com").show()
            $("#product_specific").hide()
            $("#s_media").hide()
            $("#main_site").hide()
            $("#mob_apps").hide()
        })
    })