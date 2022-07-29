import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleTextUperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("text uppercase successfully", "success")
    }
    const handleTextLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleTextCopy = () => {
        let newText = document.getElementById("text")
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("text copy to clopboard successfully", "success")
    }

    const handleTextClear = () => {
        let newText = ""
        setText(newText)
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extera space successfully", "success")
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div style={{height : "30px"}}></div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea
                            className="form-control "
                            value={text}
                            onChange={handleOnChange}
                            spellCheck="ture"
                            placeholder="Enter text here"
                            style={{
                                backgroundColor: props.mode === "dark" ? "#042770" : "white",
                                color: props.mode === "dark" ? "white" : "black",
                            }}
                            id="text" rows="8">
                        </textarea>
                    </div>
                    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTextUperCase}>UpperCase</button>
                    <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleTextLowerCase}>LowerCase</button>
                    <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Space</button>
                    <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleTextClear}>Clear</button>
                    <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleTextCopy}>Copy</button>
                </div>
                <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                    <h2>Text Summary</h2>
                    <p>{text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "write somthing in the above text box to preview"}</p>
                </div>
            
        </>
    )
}

export default TextForm