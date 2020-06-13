import React, {useMemo}  from 'react';
export default function Button({ name, children }) {
    function changeName(name) {
      console.log('changeName')
      return name + '9968'
    }
  
//    const otherName =  changeName(name)
    const otherName = useMemo(() => {
        changeName(name)
    },[name])
    return (
        <>
          <div>{otherName}</div>
          <div>{children}</div>
        </>
  
    )
  }