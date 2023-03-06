import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="https://www.logic-square.com" target="_blank">
                <img className='ls-logo mr-2' src="https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png" />
                <span>Office Management</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar