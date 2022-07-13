// Code EyesOnMe Component Here
function EyesOnMe(){
  function myEvent(event){

   event.preventDefault();
  
console.log("Good!")
  }
  return (
  <button onClick={myEvent}>Eyes on me</button>
  )
}

export default EyesOnMe;