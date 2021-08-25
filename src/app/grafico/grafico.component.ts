import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  @ViewChild('grafico', {static: true}) grafico: ElementRef;
  dados: any

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    

    this.dados = [
      { id: 1, quantidade: 12},
      { id: 2, quantidade: 19},
      { id: 3, quantidade: 3},
      { id: 4, quantidade: 5},
      { id: 5, quantidade: 2},
      { id: 6, quantidade: 3},
    ]
    var myChart = new Chart(this.grafico.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            
            datasets: [{
                label: '# of Votes',
                data: this.dados.map(d => d.quantidade),
                
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
               
                hoverOffset: 4

            }
          ],
            
        },
        options: {
          onClick: (e, f) => {
            console.log(this.dados[f[0].index]);
          },
          animation : {
            duration: 1000
          },
          responsive: true,
          plugins: {
            legend: {
              display : false
            }
          }
          
        }
    });    
  }

}
