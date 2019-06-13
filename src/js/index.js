(function() {

  async function installServiceWorkerAsync() {
    if ('serviceWorker' in navigator) {
      try {
        let serviceWorker = await navigator.serviceWorker.register('/sw.js')
        console.log(`Service worker registered ${serviceWorker}`) // eslint-disable-line no-console
      } catch (err) {
        console.error(`Failed to register service worker: ${err}`) // eslint-disable-line no-console
      }
    }
  }

  window.addEventListener('load', installServiceWorkerAsync)

  document.getElementById('ocelot').addEventListener('click', function() {
    const ocelot = document.getElementById('ocelot')
    ocelot.classList.toggle('ocelot--spinning')
    setTimeout(function() {
      ocelot.classList.toggle('ocelot--spinning')
    }, 1000)
  })

})()

