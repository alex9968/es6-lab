import React, { useRef, useState, useEffect} from 'react';
function Example8(){
    const [text, setText] = useState('')

    useEffect(() => {
        console.info("new text", text)

    }, [text])

    const inputEl = useRef(null)
    const onButtonClick=()=>{ 
        inputEl.current.value="Hello ,JSPang"
        console.log(inputEl) //输出获取到的DOM节点
    }

    const showInput=() => {
        console.log(inputEl.current.value)
    }
    return (
        <>
            {/*保存input的ref到inputEl */}
            <textarea ref={inputEl} onInput={showInput} />
            <button onClick = {onButtonClick}>在input上展示文字</button>
        </>
    )
}
export default Example8
