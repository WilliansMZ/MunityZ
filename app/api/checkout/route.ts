// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { token, email, amount } = await req.json();

    // Peticion a Culqi
    const res = await fetch('https://api.culqi.com/v2/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CULQI_SECRET_KEY}`,
      },
      body: JSON.stringify({
        amount,
        currency_code: 'PEN',
        email,
        source_id: token,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Error de Culqi
      return NextResponse.json({ error: data.user_message }, { status: 400 });
    }

    // Pago exitoso
    return NextResponse.json({ success: true, charge: data });
  } catch (error) {
    // Error de servidor
    return NextResponse.json({ error: 'Error interno en el servidor' }, { status: 500 });
  }
}