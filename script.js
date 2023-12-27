function message() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  const webhook = "https://discordapp.com/api/webhooks/1189263563995500585/6-x6LmVlK4L-YURUZHxtQ6MhTKOru9GJ4FkYsAHRpF82klbzqhExsPFfsWDIfJ9-HVVV";
  const contents = `Name: ${name}\nMessage: ${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}
