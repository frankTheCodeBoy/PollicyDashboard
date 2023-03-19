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
    })

})