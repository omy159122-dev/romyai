"use client"
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  function lipa() {
    // Hapa ndio tutaunganisha na ClickPesa baada ya kupata API Key
    alert("Tutaunganisha na ClickPesa hapa. Kiasi: " + amount);
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">RomyAi Shop</h1>
      
      <label>Namba ya Simu</label>
      <input 
        type="text" 
        placeholder="0712345678" 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <label>Kiasi Tsh</label>
      <input 
        type="number" 
        placeholder="10000" 
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button 
        onClick={lipa}
        className="bg-green-600 text-white w-full py-2 rounded"
      >
        Lipa Sasa
      </button>
    </div>
  )
}
