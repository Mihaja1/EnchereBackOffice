import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import LeftSide from "./LeftSide";

const LineChart = () => {

    const [statistique, setStatistique] = useState([]);
    const [message, setMessage] = useState();

    useEffect(()=>{
        fetch("https://wservice-production.up.railway.app/statistique", {
            method: 'GET'
        })
        .then((item)=>item.json())
        .then((data) => {
            if(data["data"] === undefined) {
                setMessage(data["message"]);
            }
            setStatistique(data["data"])
        })
    }, []);


    const labels = [];
    
    for(let i=0; i<statistique.length; i++) {
        labels.push(statistique[i].categorie);
    }

    let total = 0;

    const d = [];
    for(let i=0; i<statistique.length; i++) {
        d.push(statistique[i].count);
        total += statistique[i].count;
    }

    console.log(total);

    const data = {
    labels: labels,
    datasets: [
        {
            label: "Statistique des catégories",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            borderWidth: 3,
            fill: true,
            data: d,
            maxBarThickness: 6
        },
    ],
    };

  return (
    <div>
      <LeftSide />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
          <div class="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                  <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
              </ol>
              <h6 class="font-weight-bolder mb-0">Dashboard</h6>
              </nav>
          </div>
        </nav>
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col">
                <div class="card z-index-2">
                    <div class="card-header pb-0">
                        <h6>Sales overview</h6>
                    </div>
                    <div class="card-body p-3">
                      <Line data={data} />
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="row my-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="row">
                                    <div class="col-lg-6 col-7">
                                    <h6>Catégories</h6>
                                    </div>
                                </div>
                            </div>
                                <div class="card-body px-0 pt-0 pb-2">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Catégories</th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {statistique.map((s) => 
                                                <tr>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">{s.categorie}</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <div class="">
                                                            <div class="progress-info">
                                                                <div class="progress-percentage">
                                                                    <span class="text-xs font-weight-bold">{(s.count*100)/total}%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class={"progress-bar bg-gradient-info w-"+ ((s.count*100)/total)}  role="progressbar" aria-valuenow={(s.count*100)/total} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
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
        </main>
      </div>
  );
};

export default LineChart;