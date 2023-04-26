$(document).ready(function() {
    $('#scroll-img').hover(
        function() {
            $(this).css(
                {
                    'background-color':'white',
                    'border': '2px hidden gray',
                    'border-radius': '5px',
                });
        },
        function() {
            $(this).css(
                {
                    'background-color':'#822600',
                    'border':'2px hidden black',
                    'border-radius': '5px',
                });
        },
    );

    $('#scroll-img').on('click',function() {
        window.scrollBy(0,100);
    });

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#dtdatatable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
    window.addEventListener("scroll", reveal);

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    var elColor = $('.custom-hover').css('background-color');
    $('.custom-hover').hover(
      function(){
          $(this).css('background-color','gray');
      },
      function(){
          $(this).css('background-color',elColor);
      }
    );

    var varCol = $('.mycustom-hover').css('background-color');
    $('.mycustom-hover').hover(
      function(){
          $(this).css('background-color','gray');
      },
      function(){
          $(this).css('background-color',varCol);
      }
    );

    var els = $('.tr-hover').css('background-color');
    $('.tr-hover').hover(
      function(){
          $(this).css('background-color','lightgray');
      },
      function(){
          $(this).css('background-color',els);
      }
    );

})



























    