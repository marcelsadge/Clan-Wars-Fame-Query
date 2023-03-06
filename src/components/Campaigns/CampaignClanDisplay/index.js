import React, { useState } from "react";

function CampaignClanDisplay({ fameData }){

    const DisplayData=fameData.map(
        (info)=>{
            return(
                <tr>
                    <td style={{color: "white"}}>{info.rank}</td>
                    <td style={{color: "white"}}>{info.player}</td>
                    <td style={{color: "white"}}>{info.fame}</td>
                    <td style={{color: "white"}}>{info.battles}</td>
                    <td style={{color: "white"}}>{info["Points/Battles"]}</td>
                    <td style={{color: "white"}}>{info["has_tank"]}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th style={{color: "white"}}>Rank</th>
                    <th style={{color: "white"}}>Player</th>
                    <th style={{color: "white"}}>Fame</th>
                    <th style={{color: "white"}}>Battles</th>
                    <th style={{color: "white"}}>Fame/Battles</th>
                    <th style={{color: "white"}}>Tank?</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default CampaignClanDisplay;