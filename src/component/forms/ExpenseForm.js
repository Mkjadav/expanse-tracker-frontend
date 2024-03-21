import React, { useContext, useState } from 'react'
import { PlusIcon } from '../../icons/icon'
import GlobalContext from '../../context/GlobalContext';

function ExpenseForm() {
    const context = useContext(GlobalContext)
    const { addExpense } = context

    const [exp, setExp] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
        category: "",
    })

    const handleClick = (e) => {
        e.preventDefault();
        addExpense(exp.title, exp.amount, exp.date, exp.category, exp.description)
        setExp({
            title: "",
            amount: "",
            date: "",
            description: "",
            category: "",
        })
    }

    const handleInput = (e) => {
        setExp({ ...exp, [e.target.name]: e.target.value });
    }
    return (
        <div className='expense'>
            <div className='income-form'>
                <form onSubmit={handleClick}>
                    {/* {error && <p>{error}</p>} */}
                    <div className="mb-3">
                        <input
                            placeholder='Expense Title'
                            className=" inputs"
                            type="text "
                            value={exp.title}
                            name='title'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="inputs"
                            placeholder='Expense Amount'
                            value={exp.amount}
                            name='amount'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="date"
                            className="inputs"
                            placeholder='Enter a date'
                            value={exp.date}
                            id='date'
                            name='date'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3 ">
                        <select required
                            value={exp.category}
                            name="category" id="category" onChange={handleInput} className="inputs"  >
                            <option value="" disabled >Select option</option>
                            <option value="Grocery" >Grocery</option>
                            <option value="Share-market-loss">Share-market-loss</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Subscription">Subscription</option>
                            <option value="Games">Games</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea
                            className=" inputs"
                            placeholder='Add A Reference'
                            cols="30"
                            rows="2"
                            value={exp.description}
                            name='description'
                            onChange={handleInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger income-btn" > {PlusIcon} Add Expense</button>
                </form>
            </div>
        </div>
    )
}

export default ExpenseForm
