import { useEffect, useState } from "react";
import logoct from "../assets/img/logoct.png"
import LeftSide from "./LeftSide";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "react";


const ListCategorie = () => {
    
    const navigate = useNavigate();
    const [categories, setCategorie] = useState([]);

    useEffect(()=>{
        fetch('https://wservice-production-cc9e.up.railway.app/categorie/liste',{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setCategorie(data["data"]);
                }
                else{
                    <Alert severity="error">
                        <AlertTitle>Code: {error.code} </AlertTitle>
                        {error.message}
                    </Alert>
                }
            }
        );
    }, []);

    function supprimer(idCategorie) {
        fetch('https://wservice-production-cc9e.up.railway.app/categorie/'+idCategorie,{
            method: 'delete'
        })
        .then((item)=>item.json())
        .then((data) => {
            var error = data.error;
            if( error == null ){
                navigate("/listeCategorie");
            }
            else{
                <Alert severity="error">
                    <AlertTitle>Code: {error.code} </AlertTitle>
                    {error.message}
                </Alert>
            }
        }) 
    }

    
    return (
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
                        <h6 class="font-weight-bolder mb-0">Listes</h6>
                        </nav>
                    </div>
                </nav>
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-8">
                            <div class="card mb-4">
                                <div class="card-header pb-0">
                                <h6>Liste des catégories</h6>
                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">idCatégorie</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">nom</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories.map((c) => 
                                                    <tr >
                                                        <td>
                                                            <span class="text-xs font-weight-bold">{c.idCategorie}</span>
                                                            
                                                        </td>
                                                        <td class="align-middle">
                                                            {c.valeur}
                                                        </td>
                                                        <td>
                                                            <Link to={"/updateCategorie/"+c.idCategorie}><span class="badge badge-sm bg-gradient-success">Modifier</span></Link>
                                                        </td>
                                                        <td>
                                                            <div style={{width: '100px'}}>
                                                                <a onClick={() => supprimer(c.idCategorie)}><span class="badge badge-sm bg-gradient-secondary">Supprimer</span></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default ListCategorie;
