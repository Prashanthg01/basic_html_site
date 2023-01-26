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

// api mobile share
const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'WebShare API Demo',
      url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});

// end

// share button for laptop
// Query code
$(".share_btn_container").hide()
$(".share_btns").on("click", () => {
  $(".share_btn_container").toggleClass("share_btn_container_none")
})

$(".toggle").on("click", () => {
  $(".toggle-on-off").toggleClass("toggle-off-on")
})
// end

let link = encodeURI(window.location.href);
    const msg = encodeURIComponent('hello prashanth');
    const title = encodeURIComponent(document.querySelector('title').textContent);
    document.getElementById("myInput").value = link;

setShareLinks();

    function socialWindow(url) {
    var left = (screen.width -570) / 2;
    var top = (screen.height -570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;  window.open(url,"NewWindow",params);}

function setShareLinks() {
    let window_url = encodeURI(window.location.href);
    var linkedino = "https://www.linkedin.com/sharing/share-offsite/?url="
    var sharelinkedin = linkedino + window_url;
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

    $(".social-share.facebook").on("click", function() { url="https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
    });

    $(".social-share.twitter").on("click", function() {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
    });
    $(".social-share.linkedin").on("click", function() { url=sharelinkedin;
    socialWindow(url);
    });
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
// end