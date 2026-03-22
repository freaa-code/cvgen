# Sikkerhet & personvern

## Sikkerhet
- All brukerdata saniteres med `esc()` og `DOMPurify` før den rendres
- Filopplasting validerer type og størrelse (maks 2MB, kun JPG/PNG/WebP/GIF)
- Data lagres kun lokalt i `localStorage` på brukerens egen maskin
- Ingen ekstern backend — ingen server mottar noe som helst

## Personvern
- Alt du skriver forblir i nettleseren din
- `localStorage` er privat for din nettleser og deles ikke
- Eneste eksterne kall er Google Fonts ved lasting — de ser ikke innholdet på siden

## GitHub Pages
- Trygt å hoste — GitHub serverer bare de statiske filene, ser ikke hva brukerne skriver
- Alle 4 filer (`index.html`, `cv.css`, `cv.js`, `cv-data.js`) må ligge i samme mappe

## Kjente begrensninger
- Print/PDF kan gi blank første side i noen nettlesere — bruk `Ctrl+P` / `Cmd+P` direkte som workaround
- Inline `onclick`-handlers er ikke ideelt, men uten CSP-header på server er det ingen reell risiko for en statisk side

## Teknologi
Bygget med ren HTML, CSS og JavaScript — ingen rammeverk, ingen byggsteg, ingen avhengigheter utover Google Fonts og DOMPurify (lastet fra CDN).
