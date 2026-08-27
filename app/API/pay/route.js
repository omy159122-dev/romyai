export async function POST(req) {
  const { amount, phone, orderId } = await req.json();

  // WEKA KEYS ZAKO HAPA
  const CLIENT_ID = 'ID3q3LJSxwPNI3M1tsuBGA7qqWZNJ1nx';
  const API_KEY = 'SKHRrhN3QfHIUqXf7zJ3xTOxisTIDORUN0DZRVSZO8';

  try {
    const response = await fetch('https://api.clickpesa.com/third-parties/stk-push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-id': CLIENT_ID,
        'api-key': API_KEY
      },
      body: JSON.stringify({
        amount: amount,
        phone: phone, // mfano: 2557XXXXXXXX
        order_id: orderId,
        reference: 'RomyAi Order ' + orderId
      })
    });

    const data = await response.json();
    return Response.json(data);

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
        }
