import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    // const host = "http://localhost:3000"
    const host = "https://expanse-tracker-backend-c39b.onrender.com"

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])


    //get  income
    const getIncome = async () => {
        // TODO: Api call
        const response = await fetch(`${host}/api/transactions/get-incomes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            }
        })
        const json = await response.json();
        // console.log(json)
        setIncomes(json)
    }

    // add income
    const addIncome = async (title, amount, date, category, description) => {
        // console.log("income added")
        // TODO: Api call

        const response = await fetch(`${host}/api/transactions/add-income`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, amount, category, date })
        })
        // const json = response.json();

        // logic to add income
        const income = await response.json()
        setIncomes(incomes.concat(income))
        getIncome()
    }


    // delete income
    const deleteIncome = async (id) => {
        // TODO: Api call
        const response = await fetch(`${host}/api/transactions/delete-income/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            }
        });
        // eslint-disable-next-line no-unused-vars
        const json = await response.json();
        //   console.log(json)
        const newIncomes = incomes.filter((income) => { return income._id !== id })
        setIncomes(newIncomes)
        getIncome()
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// expenses 

    //get  income
    const getExpense = async () => {
        // TODO: Api call
        const response = await fetch(`${host}/api/transactions/get-expenses`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            }
        })
        const json = await response.json();
        // console.log(json)
        setExpenses(json)
    }

    // add income
    const addExpense = async (title, amount, date, category, description) => {
        //Api call

        const response = await fetch(`${host}/api/transactions/add-expense`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, amount, category, date })
        })
        // const json = response.json();

        // logic to add income
        const exp = await response.json()
        setExpenses(incomes.concat(exp))
        getExpense()
    }


    // delete income
    const deleteExpense = async (id) => {
        // TODO: Api call
        const response = await fetch(`${host}/api/transactions/delete-expense/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('token')
            }
        });
        // eslint-disable-next-line no-unused-vars
        const json = await response.json();
        //   console.log(json)
        const newExpenses = expenses.filter((exp) => { return exp._id !== id })
        setExpenses(newExpenses)
        getExpense()
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////
    // total income
    const totalIncome = () => {
        let totalIncome = 0
        incomes.forEach(income => {
            totalIncome += income.amount
        })
        return totalIncome;
    }


    const totalExpense = () => {
        let totalExpense = 0
        expenses.forEach(exp => {
            totalExpense += exp.amount
        })
        return totalExpense;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    return (
        <GlobalContext.Provider value={{ incomes, addIncome, deleteIncome, totalIncome, getIncome, expenses, getExpense, addExpense, deleteExpense, totalExpense, totalBalance }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;