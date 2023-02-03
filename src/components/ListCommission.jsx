import { useEffect, useState } from "react";
import logoct from "../assets/img/logoct.png"
import LeftSide from "./LeftSide";


const ListCommission = () => {
    
    const [erreur, setError] = useState('');
    const [commissions, setCommission] = useState([]);

    useEffect(()=>{
        fetch('https://ws-deploiement-enchere-production.up.railway.app/commission/liste',{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
                var error = data.error;
                if( error == null ){
                    setCommission(data["data"]);
                }
                else{
                    setError("Code: "+error.code+". Message: "+error.message);
                }
            }
        );
    }, []);

    
    return (
        <>
            <LeftSide />
            <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div class="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Commission</li>
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
                                <h6>Liste des commissions</h6>
                                {erreur}
                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">idCommission</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Taux</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {commissions.map((c) => 
                                                    <tr>
                                                        <td>
                                                            <span class="text-xs font-weight-bold">{c.idCommission}</span>
                                                        </td>
                                                        <td class="align-middle">
                                                            {c.taux}
                                                        </td>
                                                        <td class="align-middle">
                                                            {c.dateCommission}
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

export default ListCommission;
