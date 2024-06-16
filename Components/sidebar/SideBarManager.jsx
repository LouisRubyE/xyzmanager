import React from 'react'
import './SideBarManager.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';


// eslint-disable-next-line react/prop-types
function SideBar({togglePage, pages}) {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Moringa</span>
        </div>
        <div className="center">
            <ul>
                <li onClick={() => togglePage(0,0)}>
                    < DashboardOutlinedIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <li onClick={() => togglePage(2,2)}>
                    < AdjustIcon className='icon' />
                    <span>Centra</span>
                </li>
                
                <li onClick={() => togglePage(2,1)}>
                    < LocalShippingOutlinedIcon className='icon'/>
                    <span>Shipping</span>
                </li>
                <li>
                < WarehouseOutlinedIcon className='icon'/>
                    <span>Storage</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
