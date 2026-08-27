'use client'; // Hii ni muhimu sana kwa button ifanye kazi

export default function Home() {

  // HII NDIO FUNCTION YA MALIPO
  async function lipaSasa(price: number) {
    const phone = prompt("Weka namba ya M-Pesa: mfano 255712345678");
    if(!phone) return alert("Tafadhali weka namba");

    const orderId = 'ORD' + Date.now();
    alert("Tunasubiri STK... Tafadhali angalia simu yako");

    try {
      const res = await fetch('/API/pay', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount: price, phone: phone, orderId: orderId})
      });

      const data = await res.json();
      console.log(data);
      
      if(data.status === 'success' || data.message) {
        alert("Ombi limetumwa! Ingiza PIN yako kwenye simu");
      } else {
        alert("Kuna shida: " + JSON.stringify(data));
      }
    } catch(err) {
      alert("Error: " + err);
    }
  }

  // HAPA NDIO DUka LAKO LINAONYESHWA
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1>RomyAi Shop 🛒</h1>
      
      <div style={{border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '10px'}}>
        <h2>Bundle 1GB</h2>
        <p>Bei: Tsh 1000</p>
        <button 
          onClick={() => lipaSasa(1000)}
          style={{padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px'}}
        >
          Lipa Sasa
        </button>
      </div>

      <div style={{border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '10px'}}>
        <h2>Bundle 3GB</h2>
        <p>Bei: Tsh 2500</p>
        <button 
          onClick={() => lipaSasa(2500)}
          style={{padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px'}}
        >
          Lipa Sasa
        </button>
      </div>

    </div>
  )
}
