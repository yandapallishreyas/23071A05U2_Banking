import React from "react";
import './transfers.css';
function Transfers(){
    return(
        <div>
            <h1>Welcome to Transfers page, Enter account to transfer:</h1> <br />
            <div className="transf">
            <input type="text" placeholder="Holder's Username"/> <br />
            <input type="text" placeholder="Holder's Account Number"/> <br />
            <input type="text" placeholder="Amount to transfer"/> <br />
            <button type="submit">Transfer</button>
            </div>
        </div>
    )
}
export default Transfers;