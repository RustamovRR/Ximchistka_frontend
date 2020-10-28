import React from 'react'

export function Login({ onClick }) {
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
                                            <form >
                                                <div class="form-group">
                                                    <label class="small mb-1" for="login">Login</label>
                                                    <input class="form-control py-4" name="login" id="login"
                                                        type="text" placeholder="Login ni kiriting" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="small mb-1" for="parol">Parol</label>
                                                    <input class="form-control py-4" name="parol" id="parol"
                                                        type="password" placeholder="Parolni kiriting" />
                                                </div>
                                                <div
                                                    class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <input type="submit" value="Login" class="btn btn-primary btn-block" />
                                                </div>
                                            </form>
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
