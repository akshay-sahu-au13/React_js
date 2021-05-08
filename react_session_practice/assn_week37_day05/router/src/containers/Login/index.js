import React, { useState, useEffect} from 'react';
function Login() {

    const [ value, setValue ] = useState({});
    const [formData, setFormData] = useState({});
    const [submit, setSubmit] = useState(false)

    const changeHandler = (e) => {
        setValue({
            [e.target.name] : e.target.value
        })
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password && formData.email && formData.age){
            setSubmit(true)
        } else {
            setSubmit("error")
        }
        console.log(formData)
    }

    return (
        <div className="login">
            <h2 className="err">{submit === "error" ? "Please fill all the fields..." : ""}</h2>
            <h2 className="success">{submit === true ? "Form Submitted Successfully...": ""}</h2>
            
            <form method="post" onSubmit={submitHandler}>

                <div className="form-grp">
                    <label htmlFor="name">
                        Name: 
                    </label>
                    <input type="text" name="name" id="name" value={value.name} onChange={changeHandler} />
                </div>

                <div className="form-grp">
                    <label htmlFor="age">
                        Age: 
                    </label>
                    <input type="number" name="age" id="age" value={value.age} onChange={changeHandler} />
                </div>

                <div className="form-grp">
                    <label htmlFor="email">
                        Email: 
                    </label>
                    <input type="email" name="email" id="email" value={value.email} onChange={changeHandler} />
                </div>

                <div className="form-grp">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" value={value.password} onChange={changeHandler} />
                </div>

                <button type="submit" className="btn"> Login </button>

            </form>
        </div>
    )
}

export default Login
