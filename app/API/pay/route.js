export async function POST(req) {
  try {
    const { phone, amount } = await req.json();
    // Hii ndio fix: Ondoa + na 0 mbele
    let formattedPhone = phone.replace(/\D/g,''); 
    if(formattedPhone.startsWith('0')) formattedPhone = '255' + formattedPhone.substring(1);
    if(formattedPhone.startsWith('255')) formattedPhone = formattedPhone;

    const res = await fetch('https://api.clickpesa.com/payments/stk-push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.CLICKPESA_CLIENT_SECRET
      },
      body: JSON.stringify({
        amount: Number(amount),
        phone: formattedPhone, // 2557xxxxxxxx
        order_id: 'mixxby_' + Date.now(),
        currency: 'TZS',
        description: 'Mixxby Yas Wallet'
      })
    });

    const data = await res.json();
    if(!res.ok) return Response.json({status: 'error', message: JSON.stringify(data)})
    return Response.json({status: 'success', data});
    
  } catch (error) {
    return Response.json({status: 'error', message: error.message})
  }
}
