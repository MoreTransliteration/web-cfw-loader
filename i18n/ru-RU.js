let ruRU = {
  "pageTitle"    : "Загрузчик пейлоадов для Nintendo Switch",
  "pageSubtitle" : "Fusee Launcher портирован на JavaScript с использованием WebUSB.",
  "dangerDanger"   :"Всё, в общем-то, оттестировано. Никаких проблем не обнаружено. Но я не несу никакой ответственности, если что-то вдруг пойдёт не так!",
  "warningWindows" :"На Windows ничего не будет работать! Всё из-за ограничений в реализации в виндовом хроме WebUSB (и, возможно, из-за чего-то ещё)",
  "warningBrowser" :"Работает только в браузере Chrome! Другие браузеры не поддерживают WebUSB.",
  "warningLinux"   :"В Linux при попытке подключиться могут возникать ошибки типа 'Access Denied' или 'No Compatible Device'! Если у вас так, попробуйте создать файл в  <code>/etc/udev/rules.d/50-switch.rules</code>Со следующим содержимым:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"Сайт оттестирован в Linux, OSX, Android (без рута) и на Chromebooks. Но у вас все может быть иначе.",
  "labelInstructions" :"Инструкции:",
  "liRCM"          :"Переведите Switch в режим RCM и подключите к вашему устройству.",
  "liSelect"       :"Выберите один пейлоад из списка, либо загрузите свой.",
  "liPress"        :"Нажмите 'Отправить пейлоад!'",
  "liAPX"          :"В появившемся окне выберите 'APX' и нажмите 'Подключение'.",
  "liLaunch"       :"Если всё идёт по плану, пейлоад запустится на приставке!",
  "labelContribute" :'If you would like to help adding another translation or updating/adding a payload, check <a href="https://github.com/AtlasNX/web-cfw-loader/blob/master/CONTRIBUTING.md">this</a>.',
  "h1SetupDelivery" :"Настройки отправки пейлоада",
  "h4SelectPayload" :"Выберите пейлоад:",
  "optionAtmosphere" :"Atmosphère 1.3.2",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionCTCaerHekate" :"Hekate v5.8.0",
  "optionFusee"     :"Тестовый пейлоад от (Re)Switched",
  "optionUpload"    :"Загрузить свой пейлоад",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Получить побайтовый вывод листинга пейлоада в лог (без отправки на консоль)",
  "goButton"        :"Отправить пейлоад!",
  "clearlogsbutton" :"Очистить лог",
  "disclaimer1" :'Исходники можно найти на <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (либо просто нажмите "посмотреть код страницы", бекенда тут нет!).',
  "disclaimer2" :'Портировано от <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Спасибо <a href="https://github.com/ktemkin">ktemkin</a> и <a href="https://github.com/reswitched">ReSwitched</a>, а так же <br><a href="https://github.com/atlas44">Atlas44</a> и <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">его вебсайту</a> за то, что положил проекту начало.',
  "disclaimer4" :'Наконец, спасибо <a href="https://github.com/falquinho">falquinho</a> за макет начальной загрузки и перевод на португальский, <a href="https://github.com/Filo97">Filo97</a> за перевод на итальянский, и <a href="https://github.com/lordfriky">Lord_Friky</a> за перевод на испанский.',
  "h4GetByteArray": "Получить массив байтов из payload (без эксплойта)"
}
