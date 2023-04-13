import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { emiResult } from './emiResult.class';

@Injectable({
  providedIn: 'root'
})


export class SiblingService {

  
  constructor() { }
  sendResultObj = new BehaviorSubject<emiResult>({emi:'',interest:'',total:'',loanAmt:''});


  communicateObj(result: any){
    this.sendResultObj.next(result);
  }
}
