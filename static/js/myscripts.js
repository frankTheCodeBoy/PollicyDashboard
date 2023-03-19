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
})