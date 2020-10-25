import React from 'react'

export function Login() {
    return (
        <div>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-5">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header">
                                            <h3 class="text-center font-weight-light my-4">Login</h3>
                                        </div>
                                        <div class="card-body">
                                            <form action="/api/auth/login" method="POST">
                                                <div class="form-group">
                                                    <label class="small mb-1" for="inputEmailAddress">Email</label>
                                                    <input class="form-control py-4" name="email" id="inputEmailAddress"
                                                        type="email" placeholder="Enter email address" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="small mb-1" for="inputPassword">Password</label>
                                                    <input class="form-control py-4" name="password" id="inputPassword"
                                                        type="password" placeholder="Enter password" />
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox">
                                                        <input class="custom-control-input" id="rememberPasswordCheck"
                                                            type="checkbox" />
                                                        <label class="custom-control-label" for="rememberPasswordCheck">Remember
                                                    password</label>
                                                    </div>
                                                </div>
                                                <div
                                                    class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <input type="submit" value="Login" class="btn btn-primary btn-block" />
                                                </div>
                                            </form>
                                        </div>
                                        <div class=" text-center">
                                            <a class="d-block small mb-3" href="/api/auth/login">Login</a>
                                            <div class="d-block small mb-3"><a href="/api/auth/register">Register an account</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}
