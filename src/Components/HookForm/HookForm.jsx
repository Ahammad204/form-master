
import useInputState from "../Hooks/useInputState";


const HookForm = () => {

    // const [name,handleNameChange] = useInputState('')
    const emailState = useInputState('')

    const handleSubmit =  e => {

        e.preventDefault();

    }


    return (
        <div>
              <div>
            <form onSubmit={handleSubmit}>

            {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
            <br />
            <input {...emailState} type="email" name="email"  />
            <br />
            <input type="password" name="password" />
            <br />
            <button type="submit" value="submit">Submit</button>

            </form>
        </div>
        </div>
    );
};

export default HookForm;