
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" name="name"/>
            <br />
            <input type="email" name="email"  />
            <br />
            <input type="text" name="phone" />
            <br />
            <button type="submit" value="submit">Submit</button>

            </form>
        </div>
    );
};

export default SimpleForm;