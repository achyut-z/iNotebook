import React from 'react'

const Alert = (props) => {
  return (
    
        <>
            <div style={{ height: '50px' }}>
                <div className="my-3 d-flex justify-content-center text-center alert alert-success">
                    {props.message}
                </div>
            </div>
        </>
    
  )
}

export default Alert