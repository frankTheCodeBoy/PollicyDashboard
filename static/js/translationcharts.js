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
  
  // Horizontal Chart with Chart Js
var transHorizonCanva = document.getElementById('transhorizoncanva');
new Chart(transHorizonCanva, {
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
var transHoriGraphCanva = document.getElementById('trans-horigraph-canva');
new Chart(transHoriGraphCanva, {
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
