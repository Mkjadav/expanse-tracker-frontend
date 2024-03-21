import React, { useContext } from 'react'
import { CalenderIcon, CommentIcon, DeleteIcon, RupeeIcon } from '../../../icons/icon'
import GlobalContext from '../../../context/GlobalContext'


function IncomeItem(props) {
    const context = useContext(GlobalContext)
    const { deleteIncome } = context
    const { income } = props
    return (
        <div className='container Income-item'>
            <div>
                <div>
                    <h5> {income.title}</h5>
                    <div>
                        <p>{RupeeIcon} {income.amount}</p>
                        <p>{CalenderIcon} {income.date}</p>
                        <p>{CommentIcon} {income.description}</p>
                    </div>
                </div>
                <button className='delete-btn' onClick={() => { deleteIncome(income._id) }}>{DeleteIcon}</button>
            </div>
        </div >
    )
}

export default IncomeItem
