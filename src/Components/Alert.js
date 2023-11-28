import React from 'react';

export const Alert = (props) => {
    return (
        <div className="alert">
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                    {props.alert.message}
                </div>
            </div>}
        </div>
    )
}
