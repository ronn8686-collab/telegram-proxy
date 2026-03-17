export default async function handler(req, res) {
  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbwVD_9AgnTs07WUkmhAo9YnnNQ7bP_hU4TyrWQ6h3Ye-jYBfrtSRwD9giyi2QGMXKM4uQ/exec";

    fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    res.status(200).send("OK");

  } catch (err) {
    res.status(200).send("ERROR");
  }
}
