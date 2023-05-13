Chart.defaults.font.size = 12;
Chart.defaults.font.family = "DM Sans, sans-serif";
function drawChart() {
    var myBarGraph = document.getElementById('myBarGraph');
    var draw_bar =  new Chart(myBarGraph, {
            type: 'bar',
            data: {
                labels: ['Daily', 'Multiple', 'Weekly', 'Rarely'],
                datasets: [{
                      label: 'Men',
                      data: [24.1, 58.2, 11.4, 6.3],
                      borderWidth: 1,
                      borderSkipped: true,
                      backgroundColor:  '#f89624',
                    },
                    {
                      label: 'Women',
                      data:[15.7, 52.9, 11.4, 20],
                      borderWidth: 1,
                      borderSkipped: true,
                      backgroundColor: '#822600',
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
                    display: false,
                    beginAtZero: true,
                    ticks: {
                      callback: function(value){return value+ "%"},
                      color: 'black',
                      display: false,
                  },
                    grid: {
                      display: false,
                    }
                    },
                y: {
                    grid: {
                      display: false,
                    }
                  },
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
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
            position: 'bottom',
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
          position: 'bottom',
          color: 'black',
          weight: 'bold',
          font: 'DM Sans , sans serif',
        },
      }
  }
  });

}

//first horizontal bar graph
function myHorizons() {
  var horizon_graph = document.getElementById('horizongraph');
  new Chart(horizon_graph, {
        type: 'bar',
        data: {
            labels: [
              'Sexual/ Shaming', 'Insult/ Hate speech',
              'Trolling', 'Disinformation',

            ],
            datasets: [{
                  label: 'Women',
                  data: [25.7, 21.4, 45.7, 32.9],
                  borderWidth: 1,
                  borderSkipped: true,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Men',
                  data:[1.3, 13.9, 27.8, 20.3],
                  borderWidth: 1,
                  borderSkipped: true,
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
                display: false,
                beginAtZero: true,
                ticks: {
                  callback: function(value){return value+ "%"},
                  display: false,
              },
                grid: {
                  display: false,
                }
              },
            y: {
              grid: {
                display: false,
              }
            }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                      padding: 30,
                    }
                    },
                title: {
                    display: true,
                    text: 'FACEBOOK ACCOUNTS EXPERIENCING SPECIFIC OVAWP BY GENDER',
                    color: 'black',
                    weight: 'bold',
                    font: 'DM Sans, sans serif',
                  },
                }
              }
  });

}

//second horizontal bar graph
function mySecHorizonGraphy() {
  var sec_horizon_graph = document.getElementById('sec-horizon-graph');
  new Chart(sec_horizon_graph, {
        type: 'bar',
        data: {
            labels: [
              'Sexual/ Shaming', 'Insult/ Hate speech',
              'Trolling', 'Disinformation',

            ],
            datasets: [{
                  label: 'Women',
                  data: [43.1, 58.8, 62.8, 45.1],
                  borderWidth: 1,
                  borderSkipped: true,
                  backgroundColor: '#822600',
                },
                {
                  label: 'Men',
                  data:[1.5, 22.1, 60.3, 23.5],
                  borderWidth: 1,
                  borderSkipped: true,
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
                display: false,
                beginAtZero: true,
                ticks: {
                  callback: function(value){return value+ "%"},
                  display: false,
              },
                grid: {
                  display: false,
                }
                },
            y: {
              grid: {
                display: false,
              }
            }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                      padding: 30,
                    }
                    },
                title: {
                    display: true,
                    text: 'TWITTER ACCOUNTS EXPERIENCING SPECIFIC OVAWP BY GENDER',
                    color: 'black',
                    weight: 'bold',
                    font: 'DM Sans, sans serif',
                  },
                }
              }
  });

}

function tertiaryCharts() {
  var third_dough = document.getElementById('third-dough').getContext('2d');
  var thirdDough = new Chart(third_dough, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [77, 23],
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
            text: '(%)NEGATIVE COMMENTS ON FACEBOOK',
            position: 'bottom',
            color: 'black',
            weight: 'bold',
            font: 'DM Sans, sans serif',
          },
        }
    }
  });

  var fourth_dough = document.getElementById('fourth-dough').getContext('2d');
  var fourthDough = new Chart(fourth_dough, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [14, 86],
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
          text: '(%)NEGATIVE COMMENTS ON TWITTER',
          position: 'bottom',
          color: 'black',
          weight: 'bold',
          font: 'DM Sans , sans serif',
        },
      }
  }
  });

}