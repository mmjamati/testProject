﻿var LineChart = {
    labels: ["1.0", "2.0", "3.0", "4.0", "5.0"],
    datasets: [

    /*
    {
        fillColor: "rgba(151,249,190,0.5)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        data: [10, 20, 30, 40, 50]
    },*/

    
    {
        fillColor: "rgba(252,147,65,0.5)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(173,173,173,1)",
        pointStrokeColor: "#fff",
        data: [28, 68, 40, 19, 96]
    }
    
    ]
}

var myLineChart = new Chart(document.getElementById("canvasLine").getContext("2d")).Line(LineChart, { scaleFontSize: 13, scaleFontColor: "#ffa45e", responsive: true });

