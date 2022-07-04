import React from 'react'

import {ChartComponent, 
        SeriesDirective,
        SeriesCollectionDirective, Inject,
         Legend, Category, StackingColumnSeries, Tooltip} from '@syncfusion/ej2-react-charts';
import { stackCustomSeries, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from '../../data/dummy' ;  



const Stacked = ({width, height}) => {
  return (
    
    <ChartComponent
    width={width}
    height={height}
    chartArea={{border:{width:0}}}
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    id="charts"
    tooltip={{enable:true}}
    legendSettings={{background:"white"}}
    >
      <Inject services={[Legend, Category,StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index)=> 
        <SeriesDirective key={index}{...item} /> )
        }
      </SeriesCollectionDirective>
      <p>Not rendering</p>
    </ChartComponent>
  )
}
 
export default Stacked