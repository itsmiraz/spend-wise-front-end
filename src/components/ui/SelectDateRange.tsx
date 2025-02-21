import { useState, } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DateValueType {
    startDate: Date | null;
    endDate: Date | null;
}


const SelectDateRange = () => {

    const today = new Date()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)


    const [value, setValue] = useState<DateValueType | null>({
        startDate: firstDayOfMonth,
        endDate: today
    });

    const handleValueChange = (newValue: DateValueType | null): void => {
        setValue(newValue);

    };




    const formatDateRange = (): string => {
        if (!value?.startDate || !value?.endDate) return "Select journey date...";
        const start = new Date(value.startDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        const end = new Date(value.endDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        return `${start} - ${end}`;
    };

    return (
        <div className="relative w-[210px] text-white">

            <div className="relative md:w-fit w-full">
                {/* Custom UI */}
                <div
                    className="relative  w-[210px] font-inter h-[49px] text-[14px] leading-3  max-w-full md:max-w-[240px] rounded-[13px] gap-x-[25px] border pr-4 py-0 pl-[15px] flex items-center justify-between  font-medium border-[#aaaaaa] cursor-pointer"
                >
                    <p className="truncate  text-white w-[210px]">{formatDateRange()}</p>
                    {/* <Calendar /> */}
                </div>

                {/* Actual Datepicker with absolute positioning */}
                <div className="absolute w-full h-full   top-0">
                    <Datepicker
                        containerClassName="relative"
                        inputClassName="h-full pt-4 py-2 opacity-0 cursor-pointer"
                        toggleClassName="absolute opacity-0 inset-0 w-full h-full "
                        value={value}
                        onChange={handleValueChange}
                        popoverDirection="down"
                        showShortcuts={false}
                        primaryColor="amber"
                        useRange={true}
                        asSingle={false}
                        displayFormat="MMM DD, YYYY"
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectDateRange;