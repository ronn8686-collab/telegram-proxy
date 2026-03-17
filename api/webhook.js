export const runtime = "edge";

export default async function handler(request) {
  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzEzQzg4FXVkTV98o73uUtp90uEmKJM7R1sJMksS1cBp-Ul64qk2S1GcQ5JTcoJ68Qq8g/exec";

    const body = await request.text();

    await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    });

    return new Response("OK");

  } catch (err) {
    return new Response("ERROR");
  }
}
