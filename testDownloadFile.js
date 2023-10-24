function setExternalScript(src) {
  return new Promise((resolve, reject) => {
       const scriptTag = document.createElement('script');
       scriptTag.type = 'text/javascript';
       scriptTag.src = src;
       scriptTag.onload = () => resolve();
       document.appendChild(document.body, scriptTag);
  });
}

async function afterLoaded() {
    const scripts = ['a.js','b.js','c.js'];
    for(let i=0; i< scripts.length; i++)
       await setExternalScripts(scripts[i]);
}

afterLoaded();
set scr to file needed to be downloaded
