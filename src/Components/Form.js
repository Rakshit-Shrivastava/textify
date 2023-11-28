import React, { useState } from 'react'

export const Form = (props) => {
    const [text, setText] = useState("");
    const [undoText, setUndoText] = useState('');
    const [redoText, setRedoText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setUndoText(text);
        let upperCase = text.toUpperCase();
        setText(upperCase);
        setRedoText(upperCase)
    }

    const handleLowerCase = () => {
        setUndoText(text);
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        setRedoText(lowerCase)
    }

    const handleDeleteExtraSpace = () => {
        setUndoText(text);
        let newText = text.trim().split(/ +/).join(' ');
        setText(newText);
        setRedoText(newText)
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        if (text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length === 0) {
            props.showAlert('No text to copy, write something then try again...', 'danger');
        } else {
            props.showAlert('Text copied', 'success');
        }

    }

    const handleClear = () => {
        setUndoText(text);
        setText('');
        setRedoText(text);
    }

    const handleUndo = () => {
        setText(undoText);
        setRedoText(text);
    }

    const handleRedo = () => {
        setText(redoText);
        setUndoText(text);
    }

    return (
        <>
            <div className='container' data-bs-theme={props.mode}>
                <h2 className='heading' style={{ color: `${props.mode === 'light' ? '#132022' : 'white'}` }}>A multipurpose text utility app</h2>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" autoFocus onChange={handleOnChange} value={text}></textarea>
                    {/* <label htmlFor="floatingTextarea">Enter your text here</label> */}
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start my-3" >
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleUpperCase}>Upper Case</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleLowerCase}>Lower Case</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleDeleteExtraSpace}>Delete Extra Space</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleCopyText}>Copy Text</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleClear}>Clear Text</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleUndo}>Undo</button>
                    <button type="button" className={`btn btn-${props.mode}`} onClick={handleRedo}>Redo</button>
                </div>
                <div className="card" data-bs-theme={props.mode}>
                    <div className="card-header"><strong>Summary</strong></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Total Words:</strong> {text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</li>
                        <li className="list-group-item"><strong>Total time to read:</strong> {text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length ? 0.008 * text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length + ' minutes' : "Write something to calculate the time"}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
