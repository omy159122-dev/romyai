'use client'
import { useState } from 'react'

export default function Home() {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const lipa = async () => {
    if(!phone || !amount) return alert('Jaza namba na kiasi')
    setLoading(true)
    const res = await fetch('/API/pay', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({phone, amount})
    });
    const data = await res.json();
    setLoading(false)
    if(data.status === 'success'){
      alert('Tafadhali angalia simu yako kuingiza PIN')
    } else {
      alert('Kuna shida: ' + data.message)
    }
  }

  return (
    <div style={{padding: 20, maxWidth: 400, margin: 'auto', fontFamily: 'sans-serif'}}>
      <h1>Topup Mixxby Yas</h1>
      <input 
        placeholder="07xxxxxxxx" 
        value={phone} 
        onChange={e=>setPhone(e.target.value)}
        style={{width: '100%', padding: 12, marginBottom: 10, borderRadius: 8, border: '1px solid #ccc'}}
      />
      <input 
        placeholder="Weka Kiasi Tsh" 
        type="number"
        value={amount} 
        onChange={e=>setAmount(e.target.value)}
        style={{width: '100%', padding: 12, marginBottom: 10, borderRadius: 8, border: '1px solid #ccc'}}
      />
      <button onClick={lipa} disabled={loading} style={{width: '100%', padding: 12, background: '#22c55e', color: 'white', border: 'none', borderRadius: 8}}>
        {loading ? 'Inatuma...' : 'Lipa Sasa'}
      </button>
    </div>
  )
}
