
var ctx = document.getElementById('myChart').getContext('2d');
var Renovations= document.getElementById('Renovations').getContext('2d');
var ctx = document.getElementById("myChart").getContext("2d");

var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

var gradientStroke2 = Renovations.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mar01", "Mar15", "Apr01", "Apr15", "May01", "May15"],
    datasets: [{
        label: "Mobile apps",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor:"#7070b8",
        borderWidth: 3,
        backgroundColor: gradientStroke1,
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6

      },
    //   {
    //     label: "Websites",
    //     tension: 0.4,
    //     borderWidth: 0,
    //     pointRadius: 0,
    //     borderColor: "#3A416F",
    //     borderWidth: 3,
    //     backgroundColor: gradientStroke2,
    //     fill: true,
    //     data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    //     maxBarThickness: 6
    //   },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});

// var myChart = new Chart(Renovations, {
//     type: 'line',
//     data: {
//         labels: ['mar 01', 'mar 15', 'Apr 01', 'Apr 15', 'may 01', 'may 15'],
//         datasets: [{
//             label: 'Renovations',
//             data: [10, 15, 50, 50, 60, 70, 80, 90],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 '#0000B6'
//             ],
           
//         }]
//     },
//     options: {
//         responsive:true,
//      }
// });

new Chart(Renovations, {
    type: "line",
    data: {
      labels: ["Mar01", "Mar15", "Apr01", "Apr15", "May01", "May15"],
      datasets: [{
          label: "Mobile apps",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          borderColor: "#7070b8",
          borderWidth: 3,
          backgroundColor: gradientStroke1,
          fill: true,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6
  
        },
        // {
        //   label: "Websites",
        //   tension: 0.4,
        //   borderWidth: 0,
        //   pointRadius: 0,
        //   borderColor: "#3A416F",
        //   borderWidth: 3,
        //   backgroundColor: gradientStroke2,
        //   fill: true,
        //   data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        //   maxBarThickness: 6
        // },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        }
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#b2b9bf',
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            color: '#b2b9bf',
            padding: 20,
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
      },
    },
  });
