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
