import LeftSide from "./LeftSide";
import React, { useState } from 'react';

const FormCategorie = () => {

    const [valeur, setValeur] = useState('');

    function ajoutCategorie() {

        var categorie = {
            "valeur" : valeur,
        };

        fetch('https://wservice-production.up.railway.app/categorie/insertion',{
            method : 'POST',
            body : JSON.stringify(categorie),
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    window.location.replace("/listeCategorie");
                }
                else{
                    window.alert(error);
                }
            }
        );
    }

    return(

        <>
        <LeftSide />
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
            <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                <div class="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Catégorie</li>
                        </ol>
                    <h6 class="font-weight-bolder mb-0">Insertion</h6>
                    </nav>
                </div>
            </nav>
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-10">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                            <h6>Ajout catégorie</h6>
                            </div>
                            <div class="card-body px-0 pt-0 pb-2">
                                <div class="card-body">
                                    <form role="form">
                                        <div class="mb-3">
                                            <label>Valeur</label> <input type="text" class="form-control"  aria-label="Valeur" value={valeur} onChange={(event) => setValeur(event.target.value)}/>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onClick={ajoutCategorie}>Ajouter</button>
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

export default FormCategorie;