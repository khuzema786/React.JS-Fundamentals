import React from 'react'
import ReactDOM from 'react-dom'

// Refer ./public/index.html ---> a portal div is created with portal-root as ID
function PortalDemo() {
    // React-Dom package is used for this purpose
	return ReactDOM.createPortal(   
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo