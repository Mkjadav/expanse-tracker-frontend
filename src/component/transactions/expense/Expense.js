import React, { useContext, useEffect } from 'react'
import ExpenseForm from '../../forms/ExpenseForm'
import { RupeeIcon } from '../../../icons/icon'
import ExpenseItem from './ExpenseItem'
import GlobalContext from '../../../context/GlobalContext'


function Expense() {

    const context = useContext(GlobalContext)
    const { expenses, getExpense, totalExpense } = context

    useEffect(() => { getExpense() }, [])
    return (

        <div className='container income'>
            <div className='income-title'>
                <h2>Expenses </h2>
            </div>
            <div className='income-head'>
                <h3> Total Expense :-</h3>
                <h3><span>{RupeeIcon}{totalExpense()}</span></h3>
            </div>
            <div className='row '>
                <div className='col-4'>
                    <ExpenseForm />
                </div>
                <div className='col-8 income-scroll'>
                    {expenses.map((exp) => {
                        return <ExpenseItem exp={exp} key={exp._id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Expense
