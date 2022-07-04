import React from 'react'


import {MdOutlineCancel} from 'react-icons/md';
import {BsCheck} from 'react-icons/bs'

import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {themeColors} from '../data/dummy';

import {useStateContext} from '../contexs/ContextProvider';






function ThemeSettings() {

  const{currentMode,setColor, setCurrentMode,setMode, currentColor, setCurrentColor,setThemeSettings} = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      
      <div className='h-screen float-right bg-white
      dark:text-gray-200 dark:[#484B52] w-400'>
        <div className='items-center flex justify-between p-4 ml-4'>
          <p className='text-semibold text-lg'>
            Settings
          </p>
          
          <button
          type="button"
          onClick={()=>setThemeSettings(false)}
          style={{ color:'rgb(153,171,180)', borderRadius:'50%'}}
          className=' text-2xl p=3 hover:drop-shadow-xl hover:bg-light-gray'>
          <MdOutlineCancel />
          </button>
        </div>

        <div className='border-t-1 border-color flex-col p-4 ml-4 '>
          <p className='text=lg font-semibold'>
            Theme Options
          </p>

            <div className='mt-4'>
              <input type="radio" 
              name="theme" 
              id="light"
              checked={currentMode ==='Light'}
              onChange={()=>setMode}
              className='mr-2 cursor-pointer' />
              <label htmlFor="light">Light</label>
              </div>

              <div>
              <input
               type="radio"
               className='mr-2 cursor-pointer'
               onChange={()=>setMode}
               checked={currentMode === 'Dark'}
               name="theme"
              id="dark" />
              <label htmlFor="dark">Dark</label>
            </div>
        </div>

        <div className='border-t-1 border-color flex-col p-4 ml-4 '>
          <p className='text-lg font-semibold'>
            Theme colors
          </p>
          <div className="flex gap-2">
            {themeColors.map((item,index)=>(
              <TooltipComponent key={index}
               content={item.name}
               position="TopCenter"
               >
                <div>
                  <button 
                  type="button"
                  onClick={()=>setColor(item.color)}
                  className='rounded-full h-10 w-10'
                  style={{backgroundColor:item.color}}>
                    <BsCheck
                    className={`ml-2 text-2xl text-white  ${item.color === currentColor ? 'block': 'hidden'}`}
                    />
                  </button>
                </div>
            
              </TooltipComponent>
            ))}

          </div>
          </div>

      </div>
    </div>
  )
}

export default ThemeSettings