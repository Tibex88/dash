// import React from 'react'
import * as React from 'react';

// export default App;

import { GridComponent, ColumnDirective,ColumnsDirective, 
         Inject, Resize ,Page, Sort ,
          ContextMenu, 
        Filter, pageBegin, ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItem, ordersGrid} from '../data/dummy'
import {Header} from '../components'


// console.log(ordersData);
class Orders extends React.Component {
  render() {
      // return (<ChartComponent />);
// function Orders() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="page" title="Orders"  />
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        
        <ColumnsDirective>
         {ordersGrid.map((item, index)=>(
          <ColumnDirective  key={index}
          {...item} />
         ))}
        </ColumnsDirective> 
      <Inject services={[Resize,ContextMenu, Page,Sort, Filter, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  )
}
}


export default Orders