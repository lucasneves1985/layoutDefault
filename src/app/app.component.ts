import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LayoutDefault';
  dados: any;
  panelOpenState: boolean = false;
  open: boolean = false;
  menuClick() {
    this.open = !this.open;
    console.log('clicou no menu')
  }

  htmlstring: string;

  @ViewChild('grafico', {static: true}) grafico: ElementRef;

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // custom dropdown
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ],
    
  };

  ngOnInit() {
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
