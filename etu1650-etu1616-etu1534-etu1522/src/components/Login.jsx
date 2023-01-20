import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("Liantsoa@gmail.com");
    const [mdp, setMdp] = useState("1234LI");

    function authentification() {

        var admins = {
            "email" : email,
            "motDePasse": mdp
        };

        fetch('http://localhost:8080/admin/login',{
            method : 'POST',
            body : JSON.stringify(admins),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    window.location.replace("/statistique");
                }
                else{
                    window.alert(JSON.stringify(error));
                }
            }
        );
    }

    return(

        <>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-10">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                            <h6>Login</h6>
                            </div>
                            <div class="card-body px-0 pt-0 pb-2">
                                <div class="card-body">
                                    <form role="form">
                                        <div class="mb-3">
                                            <label>Email</label> <input type="email" class="form-control" aria-label="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                        <div class="mb-3">
                                            <label>Mot De Passe</label> <input type="password" class="form-control" aria-label="Mot De Passe" value={mdp}  onChange={(event) => setMdp(event.target.value)}/>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onClick={authentification}>Se Connecter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Login;