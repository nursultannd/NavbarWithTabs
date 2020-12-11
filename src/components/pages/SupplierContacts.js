import React from 'react'
import "../Navbar.css";


export default function SupplierContacts() {
    const Icon = ({ fill }) => (
        <svg width="32" height="31"  viewBox="0 0 409.6 405.76" fill={ fill } >
            <path d="M682.8,396.06c50.72,0,91.84-48.13,91.84-107.49,0-82.33-41.12-107.49-91.84-107.49S591,206.24,591,288.57c0,59.36,41.12,107.49,91.84,107.49Zm0,0" transform="translate(-478 -181.08)"/>
            <path d="M885.6,554.28,839.27,449.9a23.3,23.3,0,0,0-10.48-11.15l-71.91-37.43a4.66,4.66,0,0,0-4.93.41,113.41,113.41,0,0,1-138.3,0,4.67,4.67,0,0,0-4.94-.41l-71.9,37.43a23.24,23.24,0,0,0-10.47,11.15L480,554.28a23.16,23.16,0,0,0,21.18,32.56H864.42a23.17,23.17,0,0,0,21.18-32.56Zm0,0" transform="translate(-478 -181.08)"/>
        </svg>
      );
      //another way of using svgs:
      //https://dev.to/barrbozzo/the-right-way-to-use-svg-icons-with-react-30o3

    return (
        <div className="content-container">
            <div style={{fontSize: "16px", color:'green', padding: "20px 170px "}}>
            {/* do something and show an
            appropriate module */}
            This is Supplier and Contacts module
            <span> <Icon fill="teal" /> </span> 
            </div>
        </div>
    )
}
