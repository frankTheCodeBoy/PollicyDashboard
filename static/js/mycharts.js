// Bar Chart with Chart Js
const ctx = document.getElementById('myChart');
var my_bar =  new Chart(ctx, {
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
function stackedGraph(chart) {
  chart.data.datasets[0].data = [26.5, 20.6, 8.8, 44.1];
  chart.data.datasets[1].data = [31.4, 7.8, 11.8, 49.0];
  chart.options.plugins.title.text = 'TWITTER USAGE BY GENDER';
  chart.update();
}

var chart_btn = document.querySelector(".chart-btn");
chart_btn.addEventListener(
  'click', function() {
    stackedGraph(my_bar);
  },
  false
);

// Horizontal Chart with Chart Js
var hori_Chart = document.getElementById('horizontalcxt');
new Chart(hori_Chart, {
        type: 'bar',
        data: {
            labels: [
              'Sexual/ Shaming', 'Insult/ Hate Speech',
              'Trolling', 'Disinformation',
            ],
            datasets: [{
                  label: 'Women',
                  data:[25.7, 21.4, 45.7, 32.9],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Men',
                  data: [1.3, 13.9, 27.8, 20.3],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#f89624',
                },
              ]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                labels : {
                  padding: 30,
                }
                },
              title: {
                display: true,
                text: "FACEBOOK ACCOUNTS EXPERIENCING SPECIFIC OVAWP BY GENDER",
                color: 'black',
                weight: 'bold',
                font: 'DM Sans, sans-serif',
                },
              }
          }
});


// Second horizontal Chart with Chart Js
var sec_hori_Chart = document.getElementById('sec-horizontal-cxt');
new Chart(sec_hori_Chart, {
        type: 'bar',
        data: {
            labels: [
              'Sexual/ Shaming', 'Insult/ Hate Speech',
              'Trolling', 'Disinformation',
            ],
            datasets: [{
                  label: 'Women',
                  data:[43.1, 58.8, 62.8, 45.1],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Men',
                  data: [1.5, 22.1, 60.3, 23.5],
                  borderWidth: 1,
                  borderSkipped: false,
                  backgroundColor: '#f89624',
                },
              ]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                labels : {
                  padding: 30,
                }
                },
              title: {
                display: true,
                text: "TWITTER ACCOUNTS EXPERIENCING OVAWP BY GENDER",
                color: 'black',
                weight: 'bold',
                font: 'DM Sans, sans-serif',
                },
              }
          }
});

// Below are de-commissioned for this project!

// Doughnut-Chart with Chart Js         
/* var doughnutChart = document.getElementById('doughnutChart').getContext('2d');
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
    maintainAspectRatio: false, 
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
          labels : {
						padding: 20,
					}
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
  chart.options.plugins.title.text = '(%)NEGATIVE COMMENTS ON 🇺🇬 FACEBOOK';
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
    maintainAspectRatio: false, 
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
          labels : {
						padding: 20,
					}
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
  chart.options.plugins.title.text = '(%)NEGATIVE COMMENTS ON 🇺🇬 TWITTER';
  chart.update();
}
var refresh_chart_btn = document.getElementById("refresh-btn");
refresh_chart_btn.addEventListener(
  'click', function() {
    putData(mydoughnut, [14,86]);
  }, false
);

 */