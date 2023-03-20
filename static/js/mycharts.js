// Bar Chart with Chart Js
const ctx = document.getElementById('myChart');
          
new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Daily', 'Multiple', 'Weekly', 'Rarely'],
            datasets: [{
                  label: 'Men',
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: 'blue',
                },
                {
                  label: 'Women',
                  data:[10, 12, 18, 4, 7, 4],
                  borderWidth: 1,
                  borderRadius: Number.MAX_VALUE,
                  borderSkipped: false,
                  backgroundColor: 'darkorange',
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
                  color: 'rgb(44,22,8)',
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
                    color: 'rgb(44,22,8)',
                    weight: 'bold',
                    font: 'Source Pro Code, monospace',
                  },
                }
              }
    });

// Doughnut-Chart with Chart Js         
var doughnutChart = document.getElementById('doughnutChart').getContext('2d');

var myDoughnutChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [20, 30],
      backgroundColor: ['#fdaf4b','#1d7af3']
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
          color: 'royalblue',
          weight: 'bold',
          font: 'Source Pro Code, monospace',
        },
      }
  }
});

// Secondary Doughnut with Chart Js
var doughnut = document.getElementById('doughnut').getContext('2d');

var mydoughnut = new Chart(doughnut, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [15, 40],
      backgroundColor: ['#1d7af3','#f3545d']
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
          color: 'darkgoldenrod',
          weight: 'bold',
          font: 'Source Pro Code, monospace',
        },
      }
  }
});


// Horizontal Chart with Chart Js
var hori_Chart = document.getElementById('horizontalcxt');
          
new Chart(hori_Chart, {
        type: 'bar',
        data: {
            labels: [
              'Trolling', 'Sexual Violence', 'Body Shaming', 
              'Insult or Hate Speech', 'Satire'
            ],
            datasets: [{
                  label: 'Men',
                  data: [12, 19, 3, 5, 2],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: 'green',
                },
                {
                  label: 'Women',
                  data:[10, 12, 18, 4, 7],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: 'violet',
                },
              ]
            },
        options: {
            responsive: true,
            indexAxis: 'y',
            barPercentage: 1.0,
            scales: {
            x: {
                beginAtZero: true,
                ticks: {
                  callback: function(value){return value+ "%"}
              }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    },
                title: {
                    display: true,
                    text: 'OVAWP Illustration Graph',
                    color: 'teal',
                    weight: 'bold',
                    font: 'Source Pro Code, monospace',
                  },
                }
              }
    });
