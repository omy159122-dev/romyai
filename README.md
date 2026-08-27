
"use client"
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  function lipa() {
    alert("Tayari! Baada ya kuunganisha na ClickPesa hapa ndio STK itatoka");
  }

  return (
    <div style={{padding: "20px", maxWidth: "400px", margin: "auto"}}>
      <h1 style={{fontSize: "24px", fontWeight: "bold"}}>RomyAi Shop</h1>
      
      <p>Namba ya Simu</p>
      <input 
        type="text" 
        placeholder="0712345678" 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{border: "1px solid gray", padding: "10px", width: "100%", marginBottom: "10px"}}
      />

      <p>Kiasi Tsh</p>
      <input 
        type="number" 
        placeholder="10000" 
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{border: "1px solid gray", padding: "10px", width: "100%", marginBottom: "10px"}}
      />

      <button 
        onClick={lipa}
        style={{background: "green", color: "white", width: "100%", padding: "10px"}}
      >
        Lipa Sasa
      </button>
    </div>
  )
}
