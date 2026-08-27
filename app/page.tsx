'use client';
import { useState } from 'react';

export default function Home() {
  const [balance, setBalance] = useState(0);

  // FUNCTION YA KUWEKA PESA
  async function wekaPesa(amount: number) {
    const phone = prompt("Weka namba ya M-Pesa: mfano 255712345678");
    if(!phone) return alert("Tafadhali weka namba");

    const orderId = 'TOPUP' + Date.now();
    alert("Tunasubiri STK ya Tsh " + amount + "... Angalia simu yako");

    const res = await fetch('/API/pay', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({amount: amount, phone: phone, orderId: orderId})
    });

    const data = await res.json();
    console.log(data);
    alert("Ombi limetumwa! Baada ya kulipa balance itaongezeka");
  }

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1>RomyAi Wallet 💰</h1>
      
      <h2>Balance Yako: Tsh {balance}</h2>

      <div style={{marginTop: '20px'}}>
        <h3>Weka Pesa</h3>
        <button onClick={() => wekaPesa(1000)} style={{margin: '5px', padding: '10px'}}>Tsh 1000</button>
        <button onClick={() => wekaPesa(5000)} style={{margin: '5px', padding: '10px'}}>Tsh 5000</button>
        <button onClick={() => wekaPesa(10000)} style={{margin: '5px', padding: '10px'}}>Tsh 10000</button>
      </div>

      <div style={{marginTop: '20px'}}>
        <h3>Nunua Bando</h3>
        <button onClick={() => alert('Utatumia balance kununua')} style={{margin: '5px', padding: '10px'}}>1GB - Tsh 1000</button>
      </div>

    </div>
  )
}
