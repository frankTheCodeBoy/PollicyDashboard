$(document).ready(function() {
    $('#piechart-div1').sparkline([68,32], {
			type: 'pie',
            Offset: '-90',
			height: '80',
            tooltipChartTitle: "Women-Pie",
	});

    $('#piechart-div2').sparkline([50,50],
        {
            type:'pie',
            height: '80',
            tooltipChartTitle: "Men-Pie",
            sliceColors: ["green", "yellow"],
    });

    $('#scroll-img').hover(
        function() {
            $(this).css(
                {
                    'background-color':'darkred',
                    'border': '2px solid darkorange',
                    'border-radius': '3px',
                });
        },
        function() {
            $(this).css(
                {
                    'background-color':'transparent',
                    'border':'none',
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

})


    