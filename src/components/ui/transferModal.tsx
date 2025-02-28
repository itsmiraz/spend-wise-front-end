import React, { useState } from 'react'
import { paymentOptions } from './expenseModal'
import { Button } from './button';

const TransferModal = () => {
  const [selected, setselected] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

  return (
    <div>

      <div className='p-2  relative space-y-4 py-5'>
        <p className='text-2xl  font-semibold text-light_text_primary dark:text-dark_text_primary '>
          Transfer Fund
        </p>


        {/* amount */}

        <div className="flex relative w-full items-center   rounded-md">
          <input
            type="number"
            placeholder='0.00 BDT'
            className="bg-transparent placeholder:text-blue-400 text-[63px] text-light_text_primary dark:text-dark_text_primary  font-bold outline-none border-none "
          />
        </div>


        <p className='text-lg font-medium text-light_text_primary dark:text-dark_text_primary '>
          From
        </p>

        <div className='gap-x-4 flex '>
          {
            paymentOptions.map((item) => <button className={` ${selected === item.id ? "bg-[#0987D0] border-transparent" : 'bg-transparent  border-[#868686]'} border transition-all ease-in-out duration-300 rounded-full text-light_text_primary dark:text-dark_text_primary  font-medium  py-[10px] px-[38px]`} onClick={() => setselected(item.id)} key={item.id}>{item.title}</button>)
          }
        </div>
        <p className='text-lg font-medium text-light_text_primary dark:text-dark_text_primary '>
          To
        </p>

        <div className='gap-x-4 flex pb-5 '>
          {
            paymentOptions.map((item) => <button className={` ${selectedTo === item.id ? "bg-[#0987D0] border-transparent" : 'bg-transparent  border-[#868686]'} border transition-all ease-in-out duration-300 rounded-full text-light_text_primary dark:text-dark_text_primary  font-medium  py-[10px] px-[38px]`} onClick={() => setSelectedTo(item.id)} key={item.id}>{item.title}</button>)
          }
        </div>






        <Button size={'lg'} variant={'primary'} className='w-full text-2xl  h-16 rounded-full bg-[#0987D0]'>
          Transfer
        </Button>
      </div>
    </div>
  )
}

export default TransferModal