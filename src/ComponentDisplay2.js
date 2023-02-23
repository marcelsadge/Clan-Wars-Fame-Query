function JsonDataDisplay2({ fameData }){
    const DisplayData=fameData.map(
        (info)=>{
            return(
                <tr>
                    <td style={{color: "white"}}>{info.clan_name}</td>
                    <td style={{color: "white"}}>{info.tank_count}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th style={{color: "white"}}>Clan</th>
                    <th style={{color: "white"}}>TankCount</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay2;