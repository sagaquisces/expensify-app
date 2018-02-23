import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) =>
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>

const withAdminWarning = (WrappedComponent) => {
    return (props) => 
        <div>
            {props.isAdmin && <p>Private info. Don't share</p>}
            <WrappedComponent {...props}/>
        </div>
     
}

const requireAuthentication = (WrappedComponent) => {
    return (props) =>
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : 'Cannot view this. Sorry.'}
        </div>
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info='This is the info' />, document.getElementById('app'))