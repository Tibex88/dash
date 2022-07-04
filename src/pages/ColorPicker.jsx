import React from 'react'

import {  ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import {Header} from '../components';


function change(args)
{
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

function ColorPicker() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="App" title="Color Picker"  />

      <div className='text-center '>
        
        <div id="preview">
        </div>
          <div className='flex justify-center gap-20'>
            <div>
              <p>Inline Palette</p>
              <ColorPickerComponent
              inline
              mode='Palette'
              modeSwitcher={false}
              showButtons={false}
              change={change}
              />
              </div>
            
            <div>
              <p>Inline Picker</p>
              <ColorPickerComponent
              inline
              mode='Picker'
              modeSwitcher={false}
              showButtons={true}
              change={change}
              />
              </div>
          </div>

      </div>


    </div>
  )
}

export default ColorPicker