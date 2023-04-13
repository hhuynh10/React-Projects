import UserCard from "./UserCard"
import "./user.css"
import user from "./user.json"


function App() {


  return (
    <div>
      <UserCard name={user.name} age={user.age} phone={user.phoneNumber} address={user.address} />
    </div>
  )
}

export default App
