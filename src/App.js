import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 //I used bollean type for output because it suites better.
 //If you wish to have string output as was requested in the task - just wrap values with quates to change them to string:
 //numberIsPrime = 'true';
 //numberIsNotPrime = 'false';
 numberIsPrime = true;
 numberIsNotPrime = false;
 messageEmptyValue = 'Please enter integer value';

 prime(num) {
   var result = this.numberIsPrime;
   if(num <= 1){
     console.log('llog 2');
     result = this.numberIsNotPrime;
     console.log(result);
     return result;
   }
   for(var i = 2; i*i <= num; i++) {
     console.log('Value: ' + num + ' % ' + i + ' = ' + (num % i));
     if(num % i === 0) {
       result = this.numberIsNotPrime;
       console.log(result);
       return result;
     }
   }
   console.log(result);
   return result;
 }
 result(num) {
   if (!Number.isInteger(Number(num))) {
     document.getElementById('result').innerHTML = 'Entered value: ' + num + ' is not an integer. ' + this.messageEmptyValue;
     return;
   }
   if(num === '') {
     document.getElementById('result').innerHTML = this.messageEmptyValue;
   } else {
     document.getElementById('result').innerHTML = this.prime(num);
   }
 }

 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Test task for XITE</h1>
       </header>
         <div >
           <p className='App-title'>Click 'Validate' button to validate if entered value is a prime number.</p>
           <input className="App-intro" type="number" id='input' placeholder="Enter your number"/>
           <button className="App-intro" onClick={() => this.result(document.getElementById('input').value)} id='button'>Validate</button>
         </div>
         <div>
           <p className="App-intro">Result: </p>
           <p className="App-intro" id='result'>#</p>
         </div>
     </div>
   );
 }
}

export default App;
