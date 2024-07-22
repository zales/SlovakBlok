# Blokování Slovenských Recenzí

Toto je rozšíření pro prohlížeč Chrome, které blokuje slovenské recenze produktů na alza.cz. Rozšíření používá přepínač ve stylu slideru pro aktivaci a deaktivaci blokování recenzí.

## Features

- Blokování slovenských recenzí na alza.cz
- Přepínač ve stylu slideru pro snadné zapnutí a vypnutí blokování
- Ukládání stavu přepínače mezi relacemi pomocí `chrome.storage`

## Instalace

1. Stáhněte nebo naklonujte tento repozitář.
2. Otevřete Chrome a přejděte na `chrome://extensions/`.
3. Aktivujte režim pro vývojáře (`Developer mode`) pomocí přepínače v pravém horním rohu.
4. Klikněte na tlačítko "Nahrát rozbalené" (`Load unpacked`) a vyberte složku, ve které máte tento repozitář.

## Souborová struktura

- `manifest.json`: Manifest soubor definující rozšíření a jeho oprávnění.
- `content.js`: Skript, který běží na pozadí a blokuje slovenské recenze.
- `background.js`: Skript, který inicializuje stav přepínače při instalaci.
- `popup.html`: HTML soubor pop-up okna rozšíření.
- `popup.js`: JavaScript soubor pro obsluhu přepínače v popup okně.
- `icon.png`: Ikona rozšíření.
- `README.md`: Tento soubor.

## Použití

1. Klikněte na ikonu rozšíření v panelu prohlížeče.
2. Otevře se pop-up okno s přepínačem ve stylu slideru.
3. Přepnutím slideru můžete aktivovat nebo deaktivovat blokování slovenských recenzí.
4. Stav přepínače je ukládán a bude si jej pamatovat i po restartu prohlížeče.

## Přispívání

Pokud máte návrhy na nové funkce nebo vylepšení, neváhejte otevřít issue nebo pull request na GitHubu.

## Licence

Toto rozšíření je licencováno pod licencí MIT. Více informací naleznete v souboru [LICENSE](LICENSE).