import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss'],
})
export class LoanCalculatorComponent implements OnInit {
  result = {
    emi: '',
    interest: '',
    total: '',
    loanAmt:'',
  };
  ngOnInit(): void {
    this.service.sendResultObj.subscribe((result) => {
      console.log(result);
      this.result = result;
    });
  }

  constructor(private service: SiblingService) {}

  // result = {
  //   emi: '',
  //   interest: '',
  //   total: '',
  // };
}
