// Bar Chart with Chart Js
const ctx = document.getElementById('myChart');
          
var my_bar =  new Chart(ctx, {
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

// Update bar chart
function stackedGraph(chart, data) {
  chart.data.labels = ['Jan 2021', 'Dec 2021'];
  chart.data.datasets[0].data = [21,31];
  chart.data.datasets[1].data = [11,14];
  chart.data.datasets[0].borderRadius = Number.MAX_VALUE;
  chart.options.plugins.title.text = 'TWITTER (%)USAGE DEMOGRAPHICS';
  chart.update();
}

var chart_btn = document.querySelector(".chart-btn");
chart_btn.addEventListener(
  'click', function() {
    stackedGraph(my_bar);
  },
  false
);

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
          color: 'black',
          weight: 'bold',
          font: 'DM Sans, sans serif',
        },
      }
  }
});

// Update the first doughnut chart
function addData(chart, data) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.options.plugins.title.text = '(%)NEGATIVE COMMENTS ON 🇺🇬FACEBOOK';
  chart.update();
}

var update_chart_btn = document.getElementById("update-btn");
update_chart_btn.addEventListener(
  'click', function() {
    addData(myDoughnutChart, [77,23]);
  }, false
);

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
          color: 'black',
          weight: 'bold',
          font: 'DM Sans , sans serif',
        },
      }
  }
});

// Update the second doughnut chart
function putData(chart, data) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.options.plugins.title.text = '(%)NEGATIVE COMMENTS ON 🇺🇬TWITTER';
  chart.update();
}

var refresh_chart_btn = document.getElementById("refresh-btn");
refresh_chart_btn.addEventListener(
  'click', function() {
    putData(mydoughnut, [14,86]);
  }, false
);

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
                  data: [41,8,11,38,43],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Women',
                  data:[50,18,14,34,27],
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
