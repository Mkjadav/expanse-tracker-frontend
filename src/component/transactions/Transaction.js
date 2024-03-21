
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { RupeeIcon } from '../../icons/icon'


function Transaction() {


    const context = useContext(GlobalContext)
    const { totalExpense, totalIncome, totalBalance } = context
    const Balance = totalBalance()
    return (<>

        <div className='transaction bg-dark'>

            <div className="container ">
                <div className="row ">
                    <div className="col-8  my-2 total">
                        <h2> Total Income</h2>
                        <span>{RupeeIcon} {totalIncome()}</span>
                    </div>
                    <div className="col-8 my-2 total">
                        <h2> Total Expense</h2>
                        <span>{RupeeIcon} {totalExpense()}</span>
                    </div>
                    <div className="col-8 my-2 total">
                        <h2> Total Balance</h2>
                        <span style={{ color: Balance <= 0 ? "red " : " green " }}>{RupeeIcon} {Balance}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Transaction
