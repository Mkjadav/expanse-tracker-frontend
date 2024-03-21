import React from 'react'
import { LoginIcon } from '../../icons/icon.js'
import { MenuItems } from './MenuItem.js'
import { useNavigate } from 'react-router-dom'

function Sidebar({ active, setActive }) {
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    return (
        <div className='bg-dark sidebar'>
            <div className='sidebar-header'>
                <img src="https://freesvg.org/img/publicdomainq-0006224bvmrqd.png" alt='user' />
                <h3>Mihir Yadav</h3>
            </div>
            <div className='sidebar-menu'>

                {MenuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => { setActive(item.id) }}
                        className={active === item.id ? 'active' : ""}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>

                })}
            </div>
            <div className='sidebar-sing-out'>
                <button className='btn btn-danger ls-btn' onClick={handleLogout}>{LoginIcon} Sing Out</button>
            </div>
        </div>
    )
}

export default Sidebar
