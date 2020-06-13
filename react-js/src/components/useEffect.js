
import React, { useEffect, useState } from 'react';
import Button from './Button'
import Button2 from './useRef'

function Index() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.info("count变动了")
  }, [count])

  useEffect(() => {
    console.info("不监控数据变动，只执行一次")
  }, []) //[]为空

  useEffect(() => {
    console.info("有某个state或者props变动了")
    //任何一个state、props变动都会触发，相当于componentDidMount
  })

  useEffect(() => {
    return () => {
      console.info("componentWillUnmount")
      //重新render前解绑副作用
    }
  }) //任何一个state、props变动都会触发，重新render前，先执行解绑副作用

  console.info([<Button />,<div><Button2 /></div>])

  return (
    <div className="App">
      <header>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button>
      </header>
      <footer>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        {count2}
        <button onClick={() => setCount2(count2 - 1)}>-</button>

      </footer>
      <Button name={count + ''}><div>{count2}</div></Button>
      <Button2 />

    </div>
  );
}

export default Index
