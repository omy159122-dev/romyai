export async function POST(req) {
  const { phone, amount } = await req.json();

  // Badilisha 07... kuwa 2557...
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
      description: 'Mixxby Yas Wallet' // Hii ndio jina litakaonekana kwenye SMS
    })
  });

  const data = await res.json();
  return Response.json(data);
}
