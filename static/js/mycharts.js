// Bar Chart with Chart Js
const ctx = document.getElementById('myChart');
          
new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Daily', 'Multiple', 'Weekly', 'Rarely'],
            datasets: [{
                  label: 'Men',
                  data: [15, 30, 3, 53],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Women',
                  data:[17, 39, 14, 31],
                  borderWidth: 1,
                  borderRadius: Number.MAX_VALUE,
                  borderSkipped: false,
                  backgroundColor: '#f89624',
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

// Doughnut-Chart with Chart Js         
var doughnutChart = document.getElementById('doughnutChart').getContext('2d');

var myDoughnutChart = new Chart(doughnutChart, {
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
          color: '#B3B3B3',
          weight: 'bold',
          font: 'DM Sans, sans serif',
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
          color: '#B3B3B3',
          weight: 'bold',
          font: 'DM Sans , sans serif',
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
                  backgroundColor: '#822600',
                },
                {
                  label: 'Women',
                  data:[10, 12, 18, 4, 7],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#f89624',
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
                    color: 'black',
                    weight: 'bold',
                    font: 'DM Sans, sans serif',
                  },
                }
              }
    });
