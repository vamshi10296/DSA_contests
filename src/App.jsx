//  import React from 'react';
//  import Users from './Users.jsx';
//  import Card from './Card.jsx';

// //  function MyButton() {
// //   const handleClick = () => {
// //     alert('Button clicked!');
// //   };

// //   return (
// //     <button onClick={handleClick}>
// //       Click Me
// //     </button>
// //   );
// // }


// const userdata=Users.filter((Element)=>{
//   if(Element.experience<=2) {
//     return true;
//   }
//   else{
//     return false;
//   }
// });


// const App = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>Welcome to my React application.</p>
//       {/* <MyButton /> */}
//       {/* <Users /> */}
//       {
//         Users.map((Element)=>{
//           return(
//              <div key={Element.id} style={{backgroundColor:"yellow", margin:"10px", padding:"10px "}}>
//               <h1>{Element.name}</h1>
//               <h2>Email: {Element.email}</h2>
//               <h3>Age: {Element.age}</h3>
//               <h3>Role: {Element.role}</h3>
//               <h3>Experience: {Element.experience}</h3>
//               <h3>Location: {Element.location}</h3>
//               <img src={Element.image} alt={Element.name} width="100" height="100" />
//             </div>
            
//           )

//         })
//       }
//       {/* <Card /> */}

//     </div>
//   );
// };

// export default App;
//------------------------------------------------------------------------------------------------

//  import React from 'react'
//  import AdminPanel from './AdminPanel';
//  import LoginForm from './LoginForm';
 
//  function App() {
//   let content;
//   const isLoggedIn = true;
//   if(isLoggedIn){
//     content = <AdminPanel />
//   }else{
//     content = <LoginForm />
//   }
//    return (
//      <div>
//        {content}
//        <h1>Lorem ipsum dolor sit amet.</h1>

//      </div>
//    )
//  }
 
//  export default App
//-----------------------------------------------------------------------------
//properties
// import React from 'react'
// import Card from './Card.jsx';
// const vamshi="pandu"

// function App() {
//   const myage = 20;
//   return (
//     <div>
//       <Card myage={20} fname="vamshi" />
//     </div>
//   )
// }

// export default App
//------------------------------------------------------------------------------------
import React from 'react'
import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App