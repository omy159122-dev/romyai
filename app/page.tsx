"use client"
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  function lipa() {
    alert(`Tayari! Baada ya kuunganisha na ClickPesa hapa ndio STK itatoka\n\nNamba: ${phone}\nKiasi: ${amount} Tsh`);
  }

  return (
    <div style={{padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "Arial"}}>
      <h1 style={{fontSize: "24px", fontWeight: "bold", textAlign: "center"}}>RomyAi Shop</h1>
      
      <p>Namba ya Simu</p>
      <input
        type="text"
        placeholder="0712345678"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{width: "100%", padding: "10px", border: "1px solid gray", borderRadius: "5px", marginBottom: "15px"}}
      />

      <p>Kiasi Tsh</p>
      <input
        type="number"
        placeholder="10000"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{width: "100%", padding: "10px", border: "1px solid gray", borderRadius: "5px", marginBottom: "15px"}}
      />

      <button 
        onClick={lipa}
        style={{width: "100%", padding: "12px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", fontSize: "16px"}}
      >
        Lipa Sasa na M-Pesa
      </button>
    </div>
  );
      }
