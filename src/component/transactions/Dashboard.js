import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Transaction from './Transaction'
import Income from './income/Income'
import Expense from './expense/Expense'
import { useNavigate } from 'react-router-dom'



function Dashboard() {
    let navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login")
        } else {
            // return
            // <Transaction />
        }
    })
    const [active, setActive] = useState(1)
    const DisplayData = () => {
        switch (active) {
            case 1:
                return <Transaction />
            case 2:
                return <Income />
            case 3:
                return <Expense />
            default:
                return <Transaction />

        }
    }

    return (

        <div className='dashboard ' >

            <Sidebar active={active} setActive={setActive} />
            <div className='main bg-dark'>
                {DisplayData()}
            </div>
        </div>


    )
}

export default Dashboard
