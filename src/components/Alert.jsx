import React from 'react'

const Alert = ({ alert }) => {
 const capilize = (word) => {
   const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
 }
    return (
        <div style={{height : "30px"}}>
            {alert && <div>
                <div className={`container my-3 alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capilize(alert.type)}</strong> : {alert.massage}
                </div>
            </div>}
        </div>
    )
}

export default Alert