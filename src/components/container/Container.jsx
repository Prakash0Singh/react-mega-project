import React from 'react'

function Container({children}) {
  return (
    <>
      <div className="col-lg-6 col-12 mx-auto">
          {children}
      </div>
    </>
  )
}

export default Container