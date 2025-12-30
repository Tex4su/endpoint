const apiKeyHeader = () => ({
    "Authorization": document.getElementById("apikey").value,
    "Content-Type": "application/json"
  });
  
  function cekSaldo() {
    fetch("/api/balance", {
      headers: apiKeyHeader()
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("saldo").innerText =
        JSON.stringify(data, null, 2);
    });
  }
  
  function createQRIS() {
    fetch("/api/qris/create", {
      method: "POST",
      headers: apiKeyHeader(),
      body: JSON.stringify({
        order_id: document.getElementById("order_id").value,
        amount: document.getElementById("amount").value
      })

      })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("qris").innerText =
          JSON.stringify(data, null, 2);
      })
      .catch(err => {
        alert("Error: " + err.message);
      });      
  
  function cekProfile() {
    fetch("/api/profile", { headers: apiKeyHeader() })
      .then(r => r.json())
      .then(d => alert(JSON.stringify(d, null, 2)));
  }
  
  function mutasiQRIS() {
    fetch("/api/qris/mutasi", { headers: apiKeyHeader() })
      .then(r => r.json())
      .then(d => alert(JSON.stringify(d, null, 2)));
  }
  
  function getOTP() {
    fetch("/api/otp", { headers: apiKeyHeader() })
      .then(r => r.json())
      .then(d => alert(JSON.stringify(d, null, 2)));
  }
  