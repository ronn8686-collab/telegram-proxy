export default async function handler(req, res) {
  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzEzQzg4FXVkTV98o73uUtp90uEmKJM7R1sJMksS1cBp-Ul64qk2S1GcQ5JTcoJ68Qq8g/exec";

    const rawBody = await new Promise((resolve) => {
      let data = "";
      req.on("data", chunk => data += chunk);
      req.on("end", () => resolve(data));
    });

    fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: rawBody
    });

    res.status(200).send("OK");

  } catch (err) {
    res.status(200).send("ERROR");
  }
}
