import React from 'react'


import { GridComponent, ColumnDirective,ColumnsDirective, 
  Inject ,Page,Search,Selection, Toolbar, Sort, Edit } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid} from '../data/dummy'
import {Header} from '../components'
import { Delete } from '@syncfusion/ej2/spreadsheet'

class Customers extends React.Component {
  render() {
      // return (<ChartComponent />);
// function customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="page" title="customers"  />
      <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      width='auto'
      editSettings={{allowEditing:true, allowDeleting:true}}
      >
        
        <ColumnsDirective>
         {customersGrid.map((item, index)=>(
          <ColumnDirective  key={index}
          {...item} />
         ))}
        </ColumnsDirective> 
      <Inject services={[Page,Delete, Search, Selection,Toolbar, Edit, Sort]} />
      </GridComponent>
    </div>
  )
}
}


export default Customers