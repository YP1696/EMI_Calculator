import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    AccumulationChartModule,
  ],
  providers : [
    PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService
  ],
  exports:[PieChartComponent]
})
export class PieChartModule { }
