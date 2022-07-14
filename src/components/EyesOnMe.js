import React from "react";

// Code EyesOnMe Component Here
function EyesOnMe(){
  return (
    <React.Fragment>
    <button onFocus={() => console.log('Good!')} onBlur ={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    </React.Fragment>
  )
}

export default EyesOnMe;