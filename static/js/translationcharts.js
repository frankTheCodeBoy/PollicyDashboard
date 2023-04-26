var secBarCanva = document.getElementById('secbarcanva');
var secBar_Canva = new Chart(secBarCanva, {
        type: 'bar',
        data: {
            labels: ['Daily', 'Multiple', 'Weekly', 'Rarely'],
            datasets: [{
                  label: 'Men',
                  data: [24.1, 58.2, 11.4, 6.3],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor:  '#f89624',
                },
                {
                  label: 'Women',
                  data:[15.7, 52.9, 11.4, 20],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#822600',
                },
              ]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            barPercentage: 1.0,
            scales: {
            y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value){return value+ "%"},
                  color: 'black',
              }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels : {
                      padding: 20,
                    }
                    },
                title: {
                    display: true,
                    text: 'FACEBOOK USAGE BY GENDER',
                    color: '#272727',
                    weight: 'bold',
                    font: 'DM Sans, sans serif',
                  },
                }
              }
});


// Update bar chart
function transformGraph(chart) {
    chart.data.datasets[0].data = [26.5, 20.6, 8.8, 44.1];
    chart.data.datasets[1].data = [31.4, 7.8, 11.8, 49.0];
    chart.options.plugins.title.text = 'TWITTER USAGE BY GENDER';
    chart.update();
  }
  
  var chart_btn = document.querySelector(".trans-btn");
  chart_btn.addEventListener(
    'click', function() {
      transformGraph(secBar_Canva);
    },
    false
  );
  