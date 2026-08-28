export async function POST(req) {
  try {
    const { phone, amount } = await req.json();
    const formattedPhone = phone.startsWith('0') ? '255' + phone.substring(1) : phone;

    const res = await fetch('https://api.clickpesa.com/payments/stk-push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.CLICKPESA_CLIENT_SECRET
      },
      body: JSON.stringify({
        amount: Number(amount),
        phone: formattedPhone,
        order_id: 'mixxby_' + Date.now(),
        currency: 'TZS',
        description: 'Mixxby Yas Wallet'
      })
    });

    const data = await res.json();
    
    if(!res.ok) {
      return Response.json({status: 'error', message: data.message || 'ClickPesa Error'})
    }
    
    return Response.json({status: 'success', data});
    
  } catch (error) {
    return Response.json({status: 'error', message: error.message})
  }
}
