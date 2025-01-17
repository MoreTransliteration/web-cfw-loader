let itIT = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher portato a JavaScript usando WebUSB.",
  "dangerDanger"   :"Questo è stato moderatamente testato. Anche se nessun problema è stato riportato, non sono responsabile in caso di brick!",
  "warningWindows" :"Questo non funziona in Windows per la implementazione scorretta di WinUSB di Chrome(E probabilmente altre ragioni)!",
  "warningBrowser" :"Questo non funziona attualmente su nessun browser ma Chrome perchè è l'unico con WinUSB.",
  "warningLinux"   :"Su Linux, potresti ottenere un errore Access Denied! Se succede, potresti provare a creare un file a <code>/etc/udev/rules.d/50-switch.rules</code>Con i seguenti contenuti:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"Questo è stato testato e funziona su Linux, OSX, Android (no root) and Chromebooks. Risultati potrebbero variare.",
  "labelInstructions" :"Istruzioni:",
  "liRCM"          :"Metti lo Switch in RCM e collega il dispositivo.",
  "liSelect"       :"Scegli il payload di esempio o caricane uno.",
  "liPress"        :"Pemi 'Avvia payload!'",
  "liAPX"          :"Nello schermo di conferma, scegli 'APX' ae premi conferma.",
  "liLaunch"       :"Se tutto funziona il payload si avvierà!",
  "labelContribute" :'If you would like to help adding another translation or updating/adding a payload, check <a href="https://github.com/AtlasNX/web-cfw-loader/blob/master/CONTRIBUTING.md">this</a>.',
  "h1SetupDelivery" :"Setup Payload Delivery",
  "h4SelectPayload" :"Select Payload:",
  "optionAtmosphere" :"Atmosphère 1.3.2",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionCTCaerHekate" :"Hekate v5.8.0",
  "optionFusee"     :"(Re)Switched payload di test (fusee)",
  "optionUpload"    :"Carica payload",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Ottieni byte array del payload (no exploit)",
  "goButton"        :"Avvia Payload!",
  "clearlogsbutton" :"Pulisci Logs",
  "disclaimer1" :'Il source puo essere trovato a <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (o premendo guarda source, ma non c\'è backend!).',
  "disclaimer2" :'Portato da <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Grazie tante a <a href="https://github.com/ktemkin">ktemkin</a> e <a href="https://github.com/reswitched">ReSwitched</a>, e non dimentichiamoci <br><a href="https://github.com/atlas44">Atlas44</a> e il <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">suo sito</a> come punto di inizio per questo.',
  "disclaimer4" :'Lastly, thanks to <a href="https://github.com/falquinho">falquinho</a> for the new bootstrap layout and portuguese translation, <a href="https://github.com/Filo97">Filo97</a> for the italian translation, <a href="https://github.com/tumGER">tumGER</a> for his german translation, <a href="https://github.com/lordfriky">Lord_Friky</a> for the spanish translation, and <a href="https://github.com/lorek123">Lorek</a> for the polish translation.'
}
