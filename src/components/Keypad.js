// Code Keypad Component Here
import React from 'react';


function Keypad(){
function eventHandler(event){
  
  event.preventDefault();
  console.log('Entering password...')
}
return<form onChange={eventHandler}>
<input type="password" name="password" placeholder="Enter password..." />
</form>
}
    


export default Keypad;