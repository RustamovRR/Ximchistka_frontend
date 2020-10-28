import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

export function Login({ parol, login, changeLogin, changeParol, Admin }) {

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
                                            <form method='POST' action='http://localhost:4000/login' >
                                                <div class="form-group">
                                                    <label class="small mb-1" for="login">Login</label>
                                                    <input class="form-control py-4" name="login" required value={login} onChange={changeLogin}
                                                        type="text" placeholder="Login ni kiriting" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="small mb-1" for="parol">Parol</label>
                                                    <input class="form-control py-4" name="password" required value={parol} onChange={changeParol}
                                                        type="password" placeholder="Parolni kiriting" />
                                                </div>
                                                <div
                                                    class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <button
                                                        type='submit'
                                                        class="btn btn-primary btn-block"
                                                    >
                                                        Login
                                                        </button>
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

        </div >
    )
}
