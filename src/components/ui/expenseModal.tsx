import React, { useState } from 'react'
import { Button } from './button';

const ExpenseModal = () => {
    const [selected, setselected] = useState('');
    const [selectedCatagory, setSelectedCatagory] = useState('');

    const paymentOptions = [
        {
            id: 'bank',
            title: 'Bank'
        },
        {
            id: 'cash',
            title: 'Cash'
        },
        {
            id: 'bkash',
            title: 'Bkash'
        },
    ]

    const categories = [
        {
            id: 'grocery',
            title: 'Grocery',
            color: '#0cc258e8' // Random color
        },
        {
            id: 'fashion',
            title: 'Fashion',
            color: '#a403ccc1' // Random color
        },
        {
            id: 'furniture',
            title: 'Furniture',
            color: '#c9004dc5' // Random color
        },
        {
            id: 'books',
            title: 'Books',
            color: '#00a5cec0' // Random color
        },
        {
            id: 'sports',
            title: 'Sports',
            color: '#1D8348' // Random color
        },
        {
            id: 'medical',
            title: 'Medical & Healthcare',
            color: '#2874A6' // Random color
        },
    ];
    return (
        <div className='p-2  relative space-y-4 py-5'>
            <p className='text-lg font-medium text-light_text_primary dark:text-dark_text_primary '>
                Pay With
            </p>
            <div className='gap-x-4 flex '>
                {
                    paymentOptions.map((item) => <button className={` ${selected === item.id ? "bg-[#0987D0] border-transparent" : 'bg-transparent  border-[#868686]'} border transition-all ease-in-out duration-300 rounded-full text-light_text_primary dark:text-dark_text_primary  font-medium  py-[10px] px-[38px]`} onClick={() => setselected(item.id)} key={item.id}>{item.title}</button>)
                }
            </div>


            {/* amount */}

            <div className="flex relative w-full items-center pt-4  rounded-md">
                <input
                    type="number"
                    placeholder='0.00 BDT'
                    className="bg-transparent text-[63px] text-light_text_primary dark:text-dark_text_primary  font-bold outline-none border-none "
                />
            </div>
            <div className="flex pb-4  border-b border-[#FFFFFF]/10 relative w-full items-center  px-2 py-1 rounded-md">
                <input
                    type="text"
                    placeholder='Expense Title'
                    className="bg-transparent text-[44px] text-light_text_primary dark:text-dark_text_primary  font-semibold outline-none border-none "
                />
            </div>
            <div className="flex  pb-4 border-b border-[#FFFFFF]/10 relative w-full items-center  px-2 py-1 rounded-md">
                <input
                    type="text"
                    placeholder='Add Description'
                    className="bg-transparent text-[28px] text-light_text_primary dark:text-dark_text_primary  font-semibold outline-none border-none "
                />
            </div>

            {/* catagory */}
            <div className='gap-4 flex flex-wrap '>
                {
                    categories.map((item) => <button
                        style={{ background: selectedCatagory === item.id ? `${item.color}` : 'transparent', borderColor: selectedCatagory === item.id ? 'transparent' : `${item.color}` }}
                        className={`  border transition-all ease-in-out duration-300 rounded-full text-light_text_primary dark:text-dark_text_primary  font-medium  py-[10px] px-[38px]`}
                        onClick={() => setSelectedCatagory(item.id)}
                        key={item.id}>
                        {item.title}
                    </button>)
                }
            </div>

            {/* created at */}
            <div className='px-8 py-3 rounded-full flex w-fit gap-x-5 text-sm text-light_text_primary dark:text-dark_text_primary   bg-[#233640]'>
                <p>Created At</p>
                <p>21 Feb, 9:00 PM</p>
            </div>
            <Button size={'lg'} variant={'primary'} className='w-full text-2xl h-16 rounded-full bg-[#0987D0]'>
                Add Expense
            </Button>
        </div>
    )
}




export default ExpenseModal