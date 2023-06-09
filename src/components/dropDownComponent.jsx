import { useState } from 'react';
import dropdownIcon from "../assets/dropdown.png"

const RowComponent = ({ rowData }) => {
    const [showData, setShowData] = useState(false);

    const handleDropdownIconClick = () => {
        setShowData(!showData);
    };

    return (
        <>
            <div className="grid grid-cols-2 border-b-2 p-5 items-center">
                <div className="text-xs font-poppins font-semibold pl-5">{rowData.title}</div>
                <div
                    className="flex text-xs items-center font-poppins pl-24"
                >
                    {rowData.data}
                    <img
                        src={dropdownIcon}
                        className="w-6 h-6 ml-4 cursor-pointer"
                        alt="Dropdown Icon"
                        onClick={handleDropdownIconClick}
                    />
                </div>
            </div>
            {showData && (
                <div className="grid grid-cols-2 border-b-2 p-5 items-center w-full">
                    <div className="text-xs font-poppins font-semibold pl-5">
                        Additional Data
                    </div>
                    <div className="flex text-xs items-center font-poppins pl-24">
                        Additional Info
                    </div>
                </div>
            )}
        </>
    )
};

const DropdownComponent = () => {
    const rowDataArray = [
        { title: 'Kas Maret', data: 'Rp 30.000' },
        { title: 'Kas April', data: 'Rp 40.000' },
        // Add more objects to the array as needed
    ];

    return (
        <>
            <div className="flex flex-col">
                {rowDataArray.map((rowData, index) => (
                    <RowComponent key={index} rowData={rowData} />
                ))}
            </div>
        </>
    );
};

export default DropdownComponent;
