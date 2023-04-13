import { LabelType, Options } from '@angular-slider/ngx-slider';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss'],
})
export class LoanSliderComponent implements OnInit {
  constructor(private service: SiblingService, private cdr: ChangeDetectorRef) {
    this.yrToggel = true;
  }
  ngOnInit(): void {
    this.update();
  }

  filters: any;
  principal_emi = {
    value: 1,
  };
  rate = {
    value: 5,
  };
  tenur = {
    value: 1,
  };
  month = {
    value: 12,
  };

  query = {
    amount: '',
    interest: '',
    tenureYr: '',
    tenureMo: '',
  };

  result = {
    emi: '',
    interest: '',
    total: '',
    loanAmt:''
  };
  yrToggel: boolean;
  poptions: Options = {
    floor: 1,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    },
  };
  roptions: Options = {
    floor: 5,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>%</b>';
        case LabelType.High:
          return value + '<b>%</b>';
        default:
          return value + '<b>%</b>';
      }
    },
  };
  toptions: Options = {
    floor: 1,
    ceil: 30,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Yr</b>';
        case LabelType.High:
          return value + '<b>Yr</b>';
        default:
          return value + '<b>Yr</b>';
      }
    },
  };
  moptions: Options = {
    floor: 1,
    ceil: 360,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Mo</b>';
        case LabelType.High:
          return value + '<b>Mo</b>';
        default:
          return value + '<b>Mo</b>';
      }
    },
  };

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  tbupdate(id: any) {
    if (id == 0) {
      this.principal_emi.value = Number(this.query.amount) / 100000;
      console.log(this.principal_emi.value);
    } else if (id == 1) {
      this.rate.value = Number(this.query.interest);
    } else if (id == 2) {
      this.tenur.value = Number(this.query.tenureYr);
    } else if (id == 3) {
      this.month.value = Number(this.query.tenureMo);
    }
    this.update();
  }

  update() {
    console.log(this.result)
    var loanAmount = Number(this.principal_emi.value) * 100000;
    var numberOfMonths = this.yrToggel
      ? Number(this.tenur.value) * 12
      : Number(this.month.value);
    var rateOfInterest = Number(this.rate.value);
    var monthlyInterestRatio = rateOfInterest / 100 / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    if (this.yrToggel) {
      this.query.tenureYr = this.tenur.value.toString();
    } else {
      this.query.tenureMo = this.month.value.toString();
    }

    var top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = loanAmount * monthlyInterestRatio * sp;
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;

    this.result.emi = emi
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '');
    this.result.loanAmt = loanAmount
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.result.total = full
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '');
    this.result.interest = interest
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '');
    // this.chartSeries = [
    //   parseInt(this.result.emi),
    //   parseInt(this.result.interest),
    //   parseInt(this.result.total),
    // ];
    //console.log('this.chartSeries: ', this.chartSeries);
  }

  sendResult() {
    this.service.communicateObj(this.result);
    // console.log(this.result)
  }
}
