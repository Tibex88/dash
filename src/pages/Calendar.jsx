import React from 'react'

import {ScheduleComponent, Views, ViewsDirective, 
        Inject ,Day,Week, WorkWeek, Month, Agenda, Resize, DragAndDrop} 
   from '@syncfusion/ej2-react-schedule';

import { scheduleData} from '../data/dummy'
import {Header} from '../components'

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

class Calendar extends React.Component {
  render() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar"  />
      <ScheduleComponent
      height="100vh"
      selectedDate={new Date(2021, 0, 10)}
      eventSettings={{ dataSource:scheduleData }}
      >
      <Inject services={[Day,Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}
}


export default Calendar