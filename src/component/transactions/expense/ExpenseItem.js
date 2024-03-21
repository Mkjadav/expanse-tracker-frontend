import React, { useContext } from 'react'
import { CalenderIcon, CommentIcon, DeleteIcon, RupeeIcon } from '../../../icons/icon'
import GlobalContext from '../../../context/GlobalContext'

function ExpenseItem(props) {
    const context = useContext(GlobalContext)
    const { deleteExpense } = context
    const { exp } = props
    return (
        <div className='container Income-item'>
            <div>
                <div>
                    <h5> {exp.title}</h5>
                    <div>
                        <p>{RupeeIcon} {exp.amount}</p>
                        <p>{CalenderIcon} {exp.date}</p>
                        <p>{CommentIcon} {exp.description}</p>
                        {/* <p>{CommentIcon} {exp.category}</p> */}

                    </div>
                </div>
                <button className='delete-btn' onClick={() => { deleteExpense(exp._id) }}>{DeleteIcon}</button>
            </div>
        </div >
    )
}

export default ExpenseItem
