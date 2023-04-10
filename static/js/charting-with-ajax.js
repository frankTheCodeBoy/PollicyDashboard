function drawChart() {
    var myBarGraph = document.getElementById('myBarGraph');
    var draw_bar =  new Chart(myBarGraph, {
            type: 'bar',
            data: {
                labels: ['Daily', 'Multiple', 'Weekly', 'Rarely'],
                datasets: [{
                      label: 'Men',
                      data: [15, 30, 3, 53],
                      borderWidth: 1,
                      borderSkipped: false,
                      backgroundColor:  '#f89624',
                    },
                    {
                      label: 'Women',
                      data:[17, 39, 14, 31],
                      borderWidth: 1,
                      borderRadius: Number.MAX_VALUE,
                      borderSkipped: false,
                      backgroundColor: '#822600',
                    },
                  ]
                },
            options: {
                responsive: true,
                barPercentage: 0.8,
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
                        },
                    title: {
                        display: true,
                        text: 'FACEBOOK DEMOGRAPHICS',
                        color: '#272727',
                        weight: 'bold',
                        font: 'DM Sans, sans serif',
                      },
                    }
                  }
    });  
}

function doughGraphs() {
  var newdoughChart = document.getElementById('newdough-chart').getContext('2d');
  var myDChart = new Chart(newdoughChart, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [16, 84],
        backgroundColor: ['#f89624','#822600']
      }],
  
      labels: [
      'Women',
      'Men',
      ]
    },
    options: {
      responsive: true, 
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      },
      plugins: {
        legend: {
            position: 'top',
            },
        title: {
            display: true,
            text: '(%)POSITIVE COMMENTS ON TWITTER',
            color: 'black',
            weight: 'bold',
            font: 'DM Sans, sans serif',
          },
        }
    }
  });

  var dough_plot = document.getElementById('doughChartPlot').getContext('2d');
  var secondDough = new Chart(dough_plot, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [72, 28],
      backgroundColor: ['#822600','#f89624']
    }],

    labels: [
    'Women',
    'Men',
    ]
  },
  options: {
    responsive: true, 
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      }
    },
    plugins: {
      legend: {
          position: 'top',
          },
      title: {
          display: true,
          text: '(%)POSITIVE COMMENTS ON FACEBOOK',
          color: 'black',
          weight: 'bold',
          font: 'DM Sans , sans serif',
        },
      }
  }
  });

}