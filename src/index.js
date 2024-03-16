import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


                                            //Solution 1//                       

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Function/>
//   </React.StrictMode>
// );




// function Function(){
  
//   return <div className = "backGround">
//     <h1 >Hello World</h1>
//     </div>
// }


                                           //Solution 2//

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Button/>
//   </React.StrictMode>
// );

// function Button(){
//   return (
//     <div>
//       <button onClick={()=>
//       alert('Clicked!')}>CLICK ME!</button>
//     </div>
//   )
// }

                                        //Solution 3//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Button>Clicked</Button>
//     <Button>Clicked1</Button>
//     <Button>Clicked2</Button>
//   </React.StrictMode>
// );

// function Button(props){
// return (
//   <div>
//     <button onClick={()=>
//     alert(props.children)}>CLICK ME!</button>
//   </div>
// )
// }


                                       //Solution 4//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ClickButton/>
//   </React.StrictMode>
// );


// function ClickButton(){
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p> You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   )
// }