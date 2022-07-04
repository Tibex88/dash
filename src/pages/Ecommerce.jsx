import React from 'react'

import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import{ Stacked,Pie, Button, SparkLine} from'../components';

import {earningData, ecomPieChartDat, SparklineAreaData} 
from '../data/dummy';

// import {useStateContext} from '../contexts/ContextProvider';


function Ecommerce() {
  return (
    <div className='mt-12 '>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='bg-white 
         dark:text-gray-200 
         dark:bg-secondary-dark-bg h-44 rounded-xl w-full 
          p-8 pt-9 m-3 bg-hero-pattern bg-cover bg-center'>

        <div className='flex justify-between items-center'>
          <div>
            <p className='font-bold text-gray-400'>Earnings</p>
            <p className='text-2xl'>$78,398,749</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button 
          text="Download"
          color="white"
          bgcolor="blue"
          borderRadius="10px"
          size="md"
          />
        </div>
      </div>
        
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item)=>(
            <div 
            key={item.title}
            className="bg-white
            dark:text-gray-200
            dark:bg-secondary-dark-bg rounded-2xl p-4 pt-9 md:w-56"
            >
              <button type="button" 
              style={{
              background:item.iconBg, 
              color:item.color,
              icon:item.icon}}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop:shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className='text-lg font-semi-bold'>
                  {item.amount}
                </span>
              <span className= {`text-sm text-${item.pcColor } ml-2`}>
                {item.percentage}
              </span>
              </p>

              <p className="text-sm etxt-gray-400 mt-l">
                {item.title}
              </p>
            </div>
          ))
          }

        </div>
        
        </div>

        <div className='flex flex-wrap gap-10 justify-center'>
            <div className='bg-white
            dark:text-gray-200
            dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

                <div className='flex justify-between'>
                <p
                className='font-semibold text-xl'
                >Revenue Updates</p>
                <div className='flex item-center gap-4'>
                  <p className="flex gap-1 text-gray ">
                    <span>
                      <GoPrimitiveDot/>
                    </span>
                    <span>Expense</span>
                  </p>
                 
                  <p className="flex gap-1 text-green-400 ">
                    <span>
                      <GoPrimitiveDot/>
                    </span>
                    <span>Budget</span>
                  </p>
                </div>
                </div>

                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                    
                    <div className='border-color border-r-1 m-4 pr-10'>
                      <p>
                      <span className='text-3xl font-semibold'>$56,678</span>
                      <span className='ml-3 p-1.5 hover:drop-shadow txt-xs cursor-pointer text-white rounded-full bg-green-400'>34%</span>
                      </p>
                      <p className="text-gray-400 mt-l">
                        Budget
                      </p>
                      <p>
                      <span className='text-3xl font-semibold'>$45,678</span>
                     
                      </p>
                      <p className="text-gray-400 mt-l">
                        Expense
                      </p>
                      
                  <div className='mt-5'>  
                  kxjbvj
                      <SparkLine
                      id="line-spark-line"
                      currentColor="blue"
                      color="blue"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      />
                  </div>
                    </div>
                

                </div>
            </div>
        </div>
        
        </div>

  )
}

export default Ecommerce