import React , {useState} from 'react'

const TextForm = (props) => {
    const [text , setText] = useState('')
    // text = "new text"; //wrong way to change the state
    // setText = ("new text"); //correct way to change the state

    const handleUpclick = ()=>{
        // console.log("Uppercase button is clicked" + text);
        let upperCase = text.toUpperCase();
        setText(upperCase)
        props.showAlert('UpperCase converted', 'success')
    }
    const handleLoclick = ()=>{
        // console.log("Lowercase button is clicked" + text);
        let lowerCase = text.toLowerCase();
        setText(lowerCase)
        props.showAlert('LowerCase converted', 'success')

    }

    const handleOnchange = (event)=>{
        // console.log("changed");
        setText(event.target.value);
    }
    const handleClear = ()=>{
        let clearText = "";
        setText(clearText);
        props.showAlert('Text clear' , 'warning')

    }

    
  return (
    <>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows="10" style={{backgroundColor : props.textSwitch === 'dark'?'#00122b':'white',
        color : props.textSwitch === 'dark'?'white':'black'}}></textarea>
        <button className="btn btn-outline-primary my-3 mx-1" onClick={handleUpclick}>UpperCase</button>
        <button className="btn btn-outline-primary my-3 mx-1" onClick={handleLoclick}>LowerCase</button>
        <button className="btn btn-outline-primary my-3 mx-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container" style={{color : props.textSwitch === 'dark'?'white':'black'}}>
            <h1>Your text summary </h1>
            <h5>Number of Words : {text.split(" ").length}</h5>
            <h5>Number of Characters : {text.length}</h5>
            <h5>Number of Minutes to read these text : {0.008 * text.split(" ").length}</h5>
        </div>
        <div className="container" style={{color : props.textSwitch === 'dark'?'white':'black'}}>
            <h1>Preview here! what you wrote</h1>
            <h6>{text.length>0 ? text : "Please! Write somthing to Preview here"}</h6>
        </div>
    </>
  )
}

export default TextForm






// import React, {useState} from 'react'

// const TextForm = (props) => {
//     const [text , setText] = useState("Enter the text for analyze")
//     const handleOnClick = ()=>{
//         console.log("UpperCase button is clicked")
//         let upperCase = text.toUpperCase();
//         setText(upperCase)
//     }
//     const handleOnChange = (event)=>{
//         console.log("On change performe");
//         setText(event.target.value);
//     }
//   return (
//     <div>
//     <h1 className='my-3'>{props.heading}</h1>
//         <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10"></textarea>
//         <button className="btn btn-primary my-3 mx-1" onClick={handleOnClick}>UpperCase</button>
//     </div>
//   )
// }

// export default TextForm
