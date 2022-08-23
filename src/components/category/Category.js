import React from 'react'
import CategoryCreate from './CategoryCreate'
import CategoryList from './CategoryList'

export default function Category() {

    return (
        <aside className='flex flex-nowrap flex-col h-screen pl-5 pt-12 w-2/5'>
            <div className='bg-white h-screen p-9 rounded-lg'>
                <CategoryList />
                <CategoryCreate />
            </div>
        </aside>
    )
}
