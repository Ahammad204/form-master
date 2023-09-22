/* eslint-disable react/prop-types */


const ReusableForm = ({formTitle,handleSubmit,submitButtonText='Submit',children}) => {

    const handleLocalSubmit = e => {

        e.preventDefault()
        const data =  {

            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value

        }

        handleSubmit(data)

    }

    return (
        <div>

        {/* <h2>{formTitle}</h2> */}
        {children}

            <form onSubmit={handleLocalSubmit}>

            <input type="text" name="name"/>
            <br />
            <input type="email" name="email"  />
            <br />
            <input type="password" name="password" />
            <br />
            {/* <button type="submit" value={submitButtonText}></button> */}
            <input type="submit" value={submitButtonText} />

            </form>
        </div>
    );
};

export default ReusableForm;