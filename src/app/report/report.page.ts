import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js"; 

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  private friendsChart: Chart;

  constructor() { }

  async ngOnInit() {

    this.generateCharts();

  }

  generateCharts(){
    const ctx = document.getElementById('friends-chart');
    this.friendsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total', 'Antiguos', 'No Aceptados', 'Nuevos'],
            datasets: [{
                label: 'Friends Range',
                data: [19, 15, 3, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
   }

}
