import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef =  useRef(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    useEffect(()=> {

        nameRef.current.focus();


    },[])

    const handleSubmit = e => {
        e.preventDefault();



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef}  type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <button type="submit" value="submit">Submit</button>

            </form>
        </div>
    );
};

export default RefForm;