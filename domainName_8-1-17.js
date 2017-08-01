const l = console.log;

function domainName(url){
  return url.replace('https://', '').replace('http://', '').replace('www.','').split('.')[0]
}

l('github -->       ', domainName("http://github.com/carbonfive/raygun"))
l('zombie-bites --> ', domainName("http://www.zombie-bites.com"))
l('cnet -->         ', domainName("https://www.cnet.com"))