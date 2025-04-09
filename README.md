# Firebase Chat App
![Image](https://github.com/user-attachments/assets/3a2bb1de-b6d1-4ffe-929e-308f6603550d)



## Beskrivelse
Firebase Chat App er en moderne og brukervennlig chatte-applikasjon bygget med HTML, CSS og JavaScript som bruker Firebase for autentisering og Firestore for sanntids meldingshåndtering. Appen lar brukere registrere seg, logge inn, og chatte med andre brukere i sanntid.

### Hovedfunksjoner
- **Brukerautentisering:** Registrering og innlogging med e-post og passord
- **Sanntids meldingsoppdatering:** Meldinger vises øyeblikkelig til alle innloggede brukere
- **Meldingshåndtering:** Redigering og sletting av egne meldinger
- **Responsivt design:** Tilpasser seg ulike skjermstørrelser
- **Mørk/lys modus:** Brukervennlig tema-veksling som husker preferanser

## Teknologi
- HTML5
- CSS3
- JavaScript
- Firebase Authentication
- Firestore Database

## Installasjon og bruk

### Forutsetninger
- En Firebase-konto
- Grunnleggende kjennskap til web-utvikling

### Oppsett
1. **Klon repositoriet:**
   ```
   git clone https://github.com/dittbrukernavn/firebase-chat-app.git
   cd firebase-chat-app
   ```

2. **Opprett et Firebase-prosjekt:**
   - Gå til [Firebase Console](https://console.firebase.google.com/)
   - Klikk på "Legg til prosjekt"
   - Følg veiviseren for å opprette et nytt prosjekt

3. **Aktiver autentisering:**
   - I Firebase Console, naviger til "Authentication"
   - Aktiver "E-post/Passord" under "Sign-in method"

4. **Opprett en Firestore-database:**
   - Gå til "Firestore Database" i Firebase Console
   - Klikk på "Opprett database"
   - Velg startmodus (anbefalt: "start i testmodus" for utvikling)

5. **Oppdater Firebase-konfigurasjon:**
   - Gå til prosjektinnstillinger i Firebase Console
   - Under "Your apps", legg til en web-app hvis du ikke allerede har gjort det
   - Kopier Firebase-konfigurasjonen og erstatt den eksisterende konfigurasjonen i både `index.html` og `script.js`

6. **Start applikasjonen:**
   - Åpne `index.html` i en nettleser, eller bruk en lokal server som Live Server (VS Code-utvidelse)

## Funksjonalitet

### Autentisering
Appen bruker Firebase Authentication for å håndtere brukerregistrering og innlogging. Brukere kan registrere seg med e-post og passord, og logge inn for å få tilgang til chat-funksjonen.

### Meldinger
Meldinger lagres i Firestore-databasen og vises i sanntid til alle innloggede brukere. Hver melding inneholder:
- Brukerens e-post
- Meldingstekst
- Tidsstempel

### Redigering og sletting
Brukere kan redigere og slette sine egne meldinger. Dette gjøres ved hjelp av knapper som vises ved siden av hver melding som tilhører den innloggede brukeren.

### Tema-veksling
Applikasjonen har en tema-veksler som lar brukere bytte mellom lys og mørk modus. Preferansen lagres i nettleserens lokallagring, slik at den huskes mellom besøk.

## Kodestruktur

### `index.html`
Inneholder strukturen for brukergrensesnittet, inkludert innloggingsskjema, chat-område og tema-veksler.

### `style.css`
Definerer stilen for applikasjonen, inkludert responsivt design og tema-variabler.

### `script.js`
Inneholder all funksjonalitet for:
- Firebase-integrasjon
- Autentisering (registrering, innlogging, utlogging)
- Meldingshåndtering (sending, mottak, redigering, sletting)
- UI-oppdateringer i sanntid

## Refleksjon over læring:
Jeg lærte hvordan man setter opp Firebase Authentication og Firestore Database. Jeg også spurte AI om å forklare meg noen av elementene som ble brukt for Firebase; addDoc, onSnapshot, serverTimestap, orderBy, query. Det var nyttig. Jeg fikk lære mye.

### Sanntids-databaser
Ved å bruke Firestore lærte jeg hvordan man kan implementere sanntidsoppdateringer i en webapplikasjon, som gir brukerne en mer engasjerende opplevelse.

### Autentiseringssystemer
Implementering av et komplett brukerautentiseringssystem med Firebase ga meg innsikt i hvordan moderne autentiseringsløsninger fungerer.

### Frontend-utvikling
Prosjektet ga meg praktisk erfaring med:
- Responsivt design
- CSS-variabler for tema-håndtering
- Event-håndtering i JavaScript
- DOM-manipulasjon

### Utfordringer og løsninger
En av de største utfordringene var å implementere redigering og sletting av meldinger på en måte som bare tillater brukere å endre sine egne meldinger. Dette løste jeg ved å:
1. Sammenligne bruker-ID med meldingsforfatterens ID
2. Kun vise redigerings- og sletteknapper for brukerens egne meldinger
3. Implementere ekstra sikkerhetskontroller på serversiden ved hjelp av Firebase-sikkerhetsregler

## Fremtidige forbedringer
- Implementere profilbilder for brukere
- Legge til støtte for private meldinger
- Implementere filvedlegg (bilder, dokumenter)
- Legge til støtte for emojis og formatering
- Implementere lese-kvitteringer
- Utvikle pushvarsler for nye meldinger
