import React, { useContext, useState } from 'react'
import { PlusIcon } from '../../icons/icon';
import GlobalContext from '../../context/GlobalContext';


function IncomeForm() {
    const context = useContext(GlobalContext)
    const { addIncome } = context
    const [income, setIncome] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
        category: "",
    })

    const handleClick = (e) => {
        e.preventDefault();
        addIncome(income.title, income.amount, income.date, income.category, income.description)
        setIncome({
            title: "",
            amount: "",
            date: "",
            description: "",
            category: "",
        })

    }

    const handleInput = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value });

    }

    return (
        <div className='income-form'>
            <form onSubmit={handleClick}  >
                {/* {error && <p>{error}</p>} */}
                <div className="mb-3">
                    <input
                        placeholder='Salary Title'
                        className=" inputs"
                        type="text "
                        value={income.title}
                        name='title'
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="inputs"
                        placeholder='Salary Amount'
                        value={income.amount}
                        name='amount'
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        className="inputs"
                        placeholder='Enter a date'
                        value={income.date}
                        name='date'
                        onChange={handleInput}
                    />

                </div>
                <div className="mb-3 ">
                    <select required
                        value={income.category}
                        name="category" onChange={handleInput} className="inputs"  >
                        <option value="" disabled >Select option</option>
                        <option value="Salary" >Salary</option>
                        <option value="Share-market">Share-market</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="E-earning">E-earning</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <textarea
                        className=" inputs"
                        placeholder='Add A Reference'
                        cols="30"
                        rows="2"
                        value={income.description}
                        name='description'
                        onChange={handleInput}
                    />
                </div>
                <button type="submit" className="btn btn-danger income-btn" > {PlusIcon} Add Income</button>
            </form>
        </div>
    )
}

export default IncomeForm
