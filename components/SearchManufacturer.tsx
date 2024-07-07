"use client";
import { Fragment, useState } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';

const SearchManufacturer = ({manufacturer, setManufacturer}:SearchManufacturerProps ) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = query === ""
    ? manufacturers : manufacturers.filter((item) => (
        item.toLocaleLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g,""
            
        ))
    ))


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
            <ComboboxInput className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string)=> manufacturer} 
            onChange={(e) => setQuery(e.target.value)}/>

            <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100' 
            leaveTo='opacity-0'
            afterLeave={()=> setQuery('')} >

                <ComboboxOptions>

                </ComboboxOptions>

            </Transition>

        </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer