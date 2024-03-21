import React, { useContext, useEffect } from 'react'
import IncomeForm from '../../forms/IncomeForm'
import { RupeeIcon } from '../../../icons/icon'
import GlobalContext from '../../../context/GlobalContext'
import IncomeItem from './IncomeItem'


function Income() {
  const context = useContext(GlobalContext)
  const { incomes, getIncome, totalIncome } = context

  useEffect(() => {

    getIncome()

  },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])


  return (
    <div className='container income'>
      <div className='income-title'>
        <h2>Income </h2>
      </div>
      <div className='income-head'>
        <h3> Total Income :-</h3>
        <h3><span>{RupeeIcon}{totalIncome()}</span></h3>
      </div>
      <div className='row '>
        <div className='col-4'>
          <IncomeForm />
        </div>
        <div className='col-8 income-scroll'>

          {incomes.map((income) => {
            return <IncomeItem income={income} key={income._id} id={income._id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Income
