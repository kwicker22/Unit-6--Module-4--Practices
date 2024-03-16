import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




                                            //Solution 1//                       


// function Hello(){
  
//   return <div className = "backGround">
//     <h1 >Hello World</h1>
//     </div>
// }


                                           //Solution 2//

// function UserClick(){
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
// function StateProp(){
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



                                         //Solution 5//

// function Listrender(){
//   const list =  ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
//   const mapList = list.map((item, index) => 
//   <li key={index}>{item}</li>);

//   return (
//     <ul>
//       {mapList}
//     </ul>
//   );
// }


                                      //Solution 6//

// function ListrenderAgain(prop) {
//   return (
// prop.name.map(item => <li>{item}</li>)
//   )
// };


// function ListAgain(){
//     const list =  ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
//      return( <ul><Listrender name = {list}/></ul>)};




                                        //Solution 7//
class NameForm extends Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}!`);
      event.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
          <label>
              First Name:
              <input type='text' value = {this.state.firstName} onChange = {this.handleChange}/>
          </label>
          <label>
              Last Name:
              <input type='text' value = {this.state.lastName} onChange = {this.handleChange}/>
          </label>
          <input type='submit' value='Greet Me!' className = 'button'/>
      </form>
    );
    }
}




                              //Solution 8//
// function Jokes(){
// const jsonObject = [ 
//     { id: 1, setup: "What's the best thing about a Boolean?", punchline: "Even if you're wrong, you're only off by a bit" },
//     { id: 2, setup: "Why do programmers wear glasses?", punchline: "Because they need to C#" }
// ]

  // return(
  //     <>
  //         {jsonObject.map(joke => (
  //             <div class = "jokes">
  //                 <h3 key = {joke.id}>{joke.setup}</h3>
  //                 <p>{joke.punchline}</p>
  //             </div>
  //         ))}
  //     </>
// )
//   }

                                //Solution 9//

// function Cards({user}){
//   return (
//     <div className = "flip-card">
//         <div className = "flip-card-inner">
//           <div className = "flip-card-front">
//            <img src = {user.avatar}></img></div>
//           <div className ="flip-card-back">
//             <h1>{user.first_name} {user.last_name}</h1>
//             <h2>{user.gender}</h2>
//             <p>{user.email}</p>
//             <p>{user.phone_number}</p>
//           </div>
//         </div>
//       </div>
  
//   )
//   }
// function Api(){
//   const [users, setUsers]= useState([]);
//   useEffect(()=>{
//     fetch('https://random-data-api.com/api/users/random_user?size=10')
//       .then(response => response.json())
//         .then(data => setUsers(data))
      
//   });

//   return(
//     <div>
//       <div class = "button"><button onClick={() => fetch('https://random-data-api.com/api/users/random_user?size=10')
//           .then(response => response.json())
//              .then(data => setUsers(data))}>Click Me!</button>
//       </div>
//       <div className ="container">
//           {users.map(user =>
//            <Cards user = {user}/>)}
//       </div>
//     </div> 
//   )
  
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello/> */}
    {/* <UserClick/> */}
    {/* <StateProp/> */}
    {/* <Listrender/> */}
    {/* <ListAgain/> */}
    <NameForm/>
    {/* <Jokes/> */}
    {/* <Api/> */}
  </React.StrictMode>
);





  




 
