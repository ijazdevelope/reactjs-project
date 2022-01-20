import React from "react";

const Signup = () => {
    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <form>
                <div className="row">
                    <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Last Name</label>
                    </div>
                    <div className="form-floating w-100 mb-3 ps-0">
                        <input type="email" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Email</label>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="button" className="btn btn-primary mt-3 col-2">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;