"use client";
import { Combobox, ComboboxButton, Transition } from '@headlessui/react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}:SearchManufacturerProps ) => {
  return (
    <div className='search-manufacturer'>
        <Combobox> 
        <div className='relative w-full'>

            <ComboboxButton className="absolute top-[14-px]"> 

            <Image 
            src="/car-logo.svg"
            width={20}
            height={20}
            className='ml-4'
            alt='Car Logo'
            
            />
            
            </ComboboxButton>

        </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer