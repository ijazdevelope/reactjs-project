import React from "react";

const Signup = () => {
    return (
        <div className="w-50 m-auto">
            <div className="row">
                <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
                <div class="form-floating mb-3 w-100 col ps-0">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating w-100 mb-3 col ps-0">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Last Name</label>
                </div>
                <div class="form-floating w-100 mb-3 ps-0">
                    <input type="email" class="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                    <label for="floatingPassword">Email</label>
                </div>
                <div class="form-floating w-100 ps-0">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                    <label for="floatingPassword">Password</label>
                </div>
            </div>
        </div>
    )
}

export default Signup;