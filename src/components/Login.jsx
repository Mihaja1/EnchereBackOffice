import React, { useState } from 'react';
import curved6 from "../assets/img/curved-images/curved6.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("Liantsoa@gmail.com");
    const [mdp, setMdp] = useState("1234LI");

    function authentification() {

        var admins = {
            "email" : email,
            "motDePasse": mdp
        };

        fetch('https://wservice-production-cc9e.up.railway.app/admin/authentification',{
            method : 'POST',
            body : JSON.stringify(admins),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    navigate("/statistique");
                }
                else{
                    // window.alert("eeee "+error.code);
                    // return(
                    //     <reactjsAlert>
                    //         status = {true}
                    //         type = "error"
                    //         title = "Code: {error.code} . {error.message}"
                    //         Close = { () => this.setState ({satus:false})}
                    //     </reactjsAlert>
                    // )
                }
            }
        );
    }

    return(

        <>
        <main class="main-content  mt-0">
            <section>
                <div class="page-header min-vh-75">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-lg-5 d-flex flex-column mx-auto">
                                <div class="card card-plain mt-8">
                                    <div class="card-header pb-0 text-left bg-transparent">
                                    <h3 class="font-weight-bolder text-info text-gradient">Login</h3>
                                    </div>
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
            </section>
        </main>
        </>
    );
}

export default Login;