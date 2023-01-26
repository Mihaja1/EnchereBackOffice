import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeftSide from "./LeftSide";


const UpdateCategorie = () => {
    

    const navigate = useNavigate();
    const [valeur,setValeur] = useState('');
    const {id} = useParams();


    function update() {
        let categorie = {
            "idCategorie" : id,
            "valeur" : valeur
        }
        fetch('https://wservice-production-cc9e.up.railway.app/categorie/updateCategorie',{
                method: 'PUT',
                body : JSON.stringify(categorie),
                headers : {'Content-Type' : 'application/json'},
            })
            .then((item)=>item.json())
            .then(data => {
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
            }
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
                                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Catégorie</li>
                            </ol>
                        <h6 class="font-weight-bolder mb-0">Update</h6>
                        </nav>
                    </div>
                </nav>
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-5">
                            <div class="card mb-4">
                                <div class="card-header pb-0">
                                <h6>Modifier la catégorie</h6>
                                </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="card-body">
                                        <form role="form">
                                            <div class="mb-3">
                                                <label>Nom Catégorie</label> <input type="text"  value={valeur}  onChange={(event) => setValeur(event.target.value)}/>
                                            </div>
                                            <div class="text-center">
                                                <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onClick={update}>Modifier</button>
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
    )
};

export default UpdateCategorie;
