
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'

function App() {

/*   
  const handleSignUpSubmit = data => {
    // e.preventDefault();


}

  const handleUpdateProfile = data => {

    // e.preventDefault()


  } */


  return (
    <>
        <h1>Form Master</h1>

        <GrandPa></GrandPa>

        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFulForm></StateFulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
  {/*       <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>

          <div>
            <h2>Sign Up</h2>
            <p>Please SignUp right now</p>
          </div>

        </ReusableForm>
        <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitButtonText='Update'>

          <div>
            <h2>Update Profile</h2>
            <p>Always Updated Your Profile</p>
          </div>

        </ReusableForm> */}



    </>
  )
}

export default App
