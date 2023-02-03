import { useEffect, useState } from "react";
import LeftSide from "./LeftSide";


const ListeValide = () => {

    const [rechargement, setRechargement] = useState([]);
    const [vide, setVide] = useState();

    useEffect(()=>{
        fetch("https://ws-deploiement-enchere-production.up.railway.app/rechargement/listeValide", {
            method: 'GET'
        })
        .then((item)=>item.json())
        .then((data) => {
            //console.log(JSON.stringify(data["data"]));
            if((data["data"]) === undefined) {
                setVide(data["message"]);
            }
            setRechargement(data["data"]);
        })
    }, [rechargement]);

    if (rechargement === undefined) {
        return (
            <div>
                <LeftSide />
                <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
                    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                        <div class="container-fluid py-1 px-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Rechargements</li>
                                </ol>
                            <h6 class="font-weight-bolder mb-0">Rechargements</h6>
                            </nav>
                        </div>
                    </nav>
                    <div class="container-fluid py-4">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-header pb-0">
                                    <h6>{vide}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
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
                                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Rechargements</li>
                            </ol>
                        <h6 class="font-weight-bolder mb-0">Rechargements</h6>
                        </nav>
                    </div>
                </nav>
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-4">
                                <div class="card-header pb-0">
                                <h6>Liste des rechargements validés</h6>
                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Numero</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Montant</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date de rechargement</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rechargement.map((r) => ( 
                                                    <tr key={r.idRechargement}>
                                                        <td>
                                                            <div class="d-flex px-2 py-1">
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">{r.numero}</h6>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">{r.montant}</p>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">{r.dateRechargement}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100px'}}>
                        <a href="/rechargement"><button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0">Retour</button></a>
                    </div>
                </div>
            </main>
        </>
    )
};

export default ListeValide;
