import React, { useState, useEffect} from 'react';
function Login() {

    const [ value, setValue ] = useState({});

    const changeHandler = (e) => {
        setValue({
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="login">
            <form method="post" >

                <div className="form-grp">
                    <label htmlFor="name">
                        Name: <input type="text" name="name" id="name" value={value.name} onChange={changeHandler}/>
                    </label>
                </div>

            </form>
        </div>
    )
}

export default Login
