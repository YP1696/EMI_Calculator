import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  public data: Object[] | undefined;

  constructor(private service: SiblingService) {}

  public radius: string | undefined ;
  
  result = {
    emi: '',
    interest: '',
    total: '',
  };

  ngOnInit(): void {
    this.radius = 'r';
    this.service.sendResultObj.subscribe((result) => {
      console.log(result);
      this.result = result;
      this.data=[
        {name: 'EMI',value:this.result.emi},
        {name: 'INTEREST',value:this.result.interest},
        {name: 'TOTAL',value:this.result.total},
      ]
    });

    console.log(this.data);
  }
}
