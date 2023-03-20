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
            barPercentage: 0.5,
            scales: {
            y: {
                beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    },
                title: {
                    display: true,
                    text: 'Facebook Demographics',
                    color: 'teal',
                    font: 'Source Pro Code, monospace',
                  },
                }
              }
    });

          
    