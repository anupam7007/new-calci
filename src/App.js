import logo from './logo.svg';
import './App.css';
import { useState } from 'react';   //this is a hook jo react mein padha huwa hai 



function App() {
    let [ oldexpression , setOldExpression ]= useState("0")
    //this is the first part making expression use state
    //whatever we do above now is to make the oldexpression use state is the second part
    let [expression, setExpression]=useState(" ")  // isko setter boltay hai 
    //filhal humney ek hook use kiya hai jiska naam hai usestate jo ek state aur state ko change ko change karnay wala 
    //function return kar key deta hai
    let[prev,setPrev]=useState("ANS"); //this is done so as to stop the occurence of plus signs 2 times 
   
     //now inorder to allow only numerics 
     let numerics=new Set("0123456789");  //Set unique value rakhnay ki madad karta hai
     let operators =new Set("+-*/%");
      
     //now we code for the buttons 

     let buttons=["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]

     let evalEx=function()
     {
     let evalution= eval(expression);
     setOldExpression(" ans ="+expression);
     setExpression(String(evalution));
     setPrev("ANS");
    } 
    let putNumerics=function(value)
    {
      if(prev=="ANS")
      {
        setOldExpression(expression) //here if we write setExpression("ans=",expression) then only after clicking equal to we 
        //we get the answer written
        setExpression(value); ///agar pehlay say koi answer hai aur humlog naya numeric daaltay hai then usko purana delete
      //karna hai..uskay liyey yey condtion
     
      }
      else 
      {
        setExpression(expression + value);  ///agar setPrev(num) nahi hai then we can append 
      }
      setPrev("NUM");
    }

    let putDelete=function(value)
    {
       if(expression.length>=1)
       {
        // setExpression(expression.slice(0, -1)); for single erase
        setExpression(expression.slice(-1, 0)); 
        setOldExpression(oldexpression.slice(-1,0))
        
       }
       setPrev("DEL");
    }
    let putOperator=function(value)
    {
      if(prev!="OP") ///this condtion is very much important so that the operator signal comes only once even after we click many times
      { 
        setExpression(expression+value);
      }
       setPrev("OP");
    }
    let handleKeyUp=function(event)
    {
      console.log(event.key);
      if(event.key==="Backspace")
      {
        putDelete(event.key);
    
        //  setExpression(expression.slice(0, -1));  //taaki last element ura dey humlog 
      }
      else if(numerics.has(event.key) ) //note: earlier numerics condition and operators conditon were together now we separated
      //this is an effort so as to not allow two operators to come together
      {
           putNumerics(event.key);
        // setExpression(expression + event.key); //this is for concatenation  
      }
      else if( operators.has(event.key))
      {
        // setExpression(expression,event.key);
        putOperator(event.key); ///humlogo nay bas har cheez kay liyey alag function bana diya 
      }
      //this is the part after we made oldexpression use state
      else if(event.key==="Enter")  //this is the main arithmetic part where we onclick of enter how we resolve 
      {
        evalEx();
      }
     
    }

  return (
    //one thing to notice here is that we are writing this in jsx format isliyey 
    //class nahi likh rahay hai className likh rahay hai
    <div className="App" tabIndex={0} onKeyUp={handleKeyUp}   //tabIndex{0} ko pehla priority uskay baad tabIndex{1}and follows
    //tab index yey div ko focus mein laanay ka kaam karti hai

    //style={{
      //whatever we are writing here can also be written in the app.css inside .App
      //the only thing we have to change is that here we are writing in camel case 
      //in App.css we have to write without 66 and 99 

      // width:"100%",
      // height:"100vh",
      // background:"#999999",
      // display:"flex",
      // flexDirection:"column"
     
    
      //we  copied everything to app.css 


      // what we did is we made a div an entire div and then made it flex..now looking at the
      // google calculator we see that first there is a display and then there are buttons
      // so in order to have row wise division we write flexDirection as column

    //}}
    >
      <div style={{
        width:"400px",
        height:"200px",
        background:"#ffffff",
        //this is the part after writing h1 and h6 and we move the old and new word to the left that is on the minor axis using
        //align items 
        //if we wanted to move in the major axis then justify content would help
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        padding:"20px",
        borderRadius:"10px"

      }}>
       

      <h6>{oldexpression}</h6>
      <h1>{expression}</h1>

      </div>
   
     {/* lecture number13 starts here we make another div by just copying the above elements and then we work for putting buttons  */}
      <div style={{
        width:"400px",
        height:"200px",
        margin:"5px",
        background:"#ffffff",
        //this is the part after writing h1 and h6 and we move the old and new word to the left that is on the minor axis using
        //align items 
        //if we wanted to move in the major axis then justify content would help
        display:"flex",
        flexDirection:"row",
        // we changed the flex direction to row 
        alignItems:"flex-end",
        padding:"20px",
        borderRadius:"10px",
        flexWrap:"wrap"
        // when we do flexwrap=wrap then it fits onto the given div

      }}>
       
       {buttons.map(function(buttonValue,idx)
       {
           return <button style={{
             width:"90px",
             padding:"10px",
             marginLeft:"8px"
           }}onClick={function()
          {
            if(buttonValue==="=")
            {
              evalEx();
            }
            else if(buttonValue==="AC")
            {
              putDelete();
              // setExpression(expression.slice( -1,0)); //we copied this from line number no:34
              //here if we do(0,-1) then one by one the value gets deleted 
            }
            else if (numerics.has(buttonValue))
            {
              putNumerics(buttonValue);
            }
            else if (operators.has(buttonValue))
            {
              putOperator(buttonValue);
            }
          //   else{
          //   setExpression(expression+buttonValue)
          // }
        }}
           >{buttonValue}</button>       
       })}
      

      </div>







      </div>
  );
}

export default App;
