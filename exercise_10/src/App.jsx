


import UserList from "./UserList"

function App() {
  const users = [
    {id: 1, name : "Ridwan mouse", email: "Ridwan@gmail.com"},
    {id: 2, name: "mouse abdi", email:"mouse@gmail.com"},
  ];

  return (
    <>
     <UserList users={users}/>
    </>
  )
}

export default App
