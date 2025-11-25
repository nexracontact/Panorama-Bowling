# Guide: Hvordan gjøre Panorama Bowling nettsiden offisiell

## Steg 1: Forberedelser før publisering

### ✓ Sjekkliste før du publiserer:

1. **Bilder er på plass**
   - Alle bildene må være lastet opp i samme mappe som HTML-filene
   - Kontroller at alle bilder vises riktig lokalt før publisering

2. **Oppdater priser** (hvis nødvendig)
   - Se i `index.html` linje ~150-200 for prisene
   - Oppdater med faktiske priser

3. **Legg inn Google Maps** (valgfritt, men anbefalt)
   - Gå til https://www.google.com/maps
   - Finn adressen: Verftsgata 10, 6416 Molde
   - Klikk "Del" → "Bygg inn et kart"
   - Kopier HTML-koden
   - Lim den inn i `index.html` der det står `<!-- TODO: Legg inn Google Maps embed eller kart her -->`

4. **Oppdater kontaktform** (valgfritt)
   - For øyeblikket sender formen bare en bekreftelse til brukeren
   - For å faktisk motta e-poster, må du:
     - Bruke en tjeneste som Formspree, EmailJS, eller
     - Sette opp backend/server-side kode

## Steg 2: Velg hosting-løsning

### Alternativ 1: Enkel hosting (anbefalt for nybegynnere)

**Netlify** (gratis nivå tilgjengelig)
1. Gå til https://www.netlify.com
2. Lag en gratis konto
3. Dra og slipp hele mappen din inn i Netlify
4. Netlify gir deg en gratis URL (f.eks. `panorama-bowling-123.netlify.app`)
5. Du kan koble ditt eget domene senere

**GitHub Pages** (gratis)
1. Opprett en GitHub-konto på https://github.com
2. Last opp filene til et repository
3. Aktiver GitHub Pages i innstillingene
4. Få en gratis URL

### Alternativ 2: Norsk hosting

**One.com** (ca. 99-149 kr/år)
- Norsk kundeservice
- Inkluderer domenenavn
- Lette oppsett
- Hjemmeside: https://www.one.com

**Uninett** (ca. 200-300 kr/år)
- Norsk hosting
- Profesjonell support
- Hjemmeside: https://www.uninett.no

**Hostinger** (ca. 49-99 kr/måned)
- Raskt og billig
- Gratis SSL-sertifikat inkludert
- Hjemmeside: https://www.hostinger.no

## Steg 3: Få domenenavn

### Hvor kjøper du domene?

**Foreslåtte domener:**
- `panoramabowling.no`
- `panoramabowling.com`
- `panoramabowling.molde.no`

**Leverandører:**
- **One.com** - ca. 99 kr/år for .no domene
- **Uninett** - ca. 150 kr/år
- **Namecheap** - internasjonal, billig
- **GoDaddy** - internasjonal

### Tips:
- Mange hostinger tilbyr gratis domene første året
- .no domener krever norsk organisasjonsnummer (hvis du er bedrift)

## Steg 4: Publiser filene

### Metode 1: FTP-opplasting (vanlig for tradisjonell hosting)

1. **Last ned en FTP-klient:**
   - FileZilla (gratis): https://filezilla-project.org
   - WinSCP (Windows): https://winscp.net

2. **Få FTP-detaljer fra hostingen:**
   - FTP-adresse (f.eks. `ftp.panoramabowling.no`)
   - Brukernavn
   - Passord

3. **Last opp filene:**
   - Koble til FTP-serveren
   - Gå til `public_html` eller `www` mappen
   - Last opp alle filer:
     - `index.html`
     - `styles.css`
     - `script.js`
     - Alle bildene (.avif, .webp, .jpeg, .jpg, .png)

### Metode 2: Drag & Drop (for Netlify/vercel)

1. Gå til hostings nettsted
2. Dra hele mappen din inn i nettleseren
3. Filene lastes automatisk opp

### Metode 3: File Manager (cPanel)

Mange hostinger tilbyr web-basert file manager:
1. Logg inn på hosting-kontrollpanelet (cPanel)
2. Åpne "File Manager"
3. Gå til `public_html` mappen
4. Last opp filene via nettleseren

## Steg 5: Koble domenet til hostingen

### Hvis du bruker Netlify/GitHub Pages:

1. Gå til innstillinger for ditt nettsted
2. Legg til ditt domene
3. Følg instruksjonene for å oppdatere DNS-innstillingene

### Hvis du bruker tradisjonell hosting:

1. **Få nameserver-informasjon fra hostingen:**
   - F.eks. `ns1.one.com` og `ns2.one.com`

2. **Oppdater DNS hos domeneleverandøren:**
   - Logg inn på der du kjøpte domenet
   - Gå til DNS-innstillinger
   - Endre nameservers til dem hostingen ga deg
   - Dette kan ta 24-48 timer å aktivere

## Steg 6: SSL-sertifikat (HTTPS)

**Hvorfor?**
- Viktig for sikkerhet
- Google favoriserer HTTPS-sider
- Besøkere får et grønt lås-ikon

**Hvordan?**
- Mange hostinger inkluderer gratis SSL (Let's Encrypt)
- Aktiver det i kontrollpanelet
- Netlify og Vercel har automatisk SSL

## Steg 7: Test nettsiden

### Sjekkliste:

- [ ] Alle bilder vises riktig
- [ ] All tekst er korrekt
- [ ] Kontaktskjema fungerer (hvis det er koblet opp)
- [ ] Mobilvisning fungerer bra
- [ ] Alle lenker fungerer
- [ ] Facebook-lenken fungerer
- [ ] Nettsiden laster raskt

### Test på ulike enheter:
- Desktop (Chrome, Firefox, Safari, Edge)
- Mobiltelefon (iPhone og Android)
- Tablet

## Steg 8: Optimalisering (valgfritt, men anbefalt)

### Komprimere bilder:
- Bruk verktøy som TinyPNG.com for å redusere filstørrelse
- Dette gjør nettsiden raskere

### Google Analytics (valgfritt):
- Spor besøkende
- Se hvor mange som besøker nettsiden
- Gratis: https://analytics.google.com

### Google Search Console:
- Gi Google beskjed om at nettsiden finnes
- Se hvordan nettsiden presterer i søk
- Gratis: https://search.google.com/search-console

## Steg 9: Markedsføring

1. **Del på sosiale medier:**
   - Facebook
   - Instagram
   - LinkedIn

2. **Registrer i Google My Business:**
   - Gratis
   - Hjelper folk finne deg lokalt
   - https://www.google.com/business

3. **Legg til nettsiden på:**
   - Facebook-siden din
   - Instagram-bio
   - Visittkort

## Hjelp og støtte

### Hvis noe går galt:

1. **Bilder vises ikke:**
   - Sjekk at alle filstier er korrekte
   - Kontroller at filnavnene matcher (store/små bokstaver)
   - Sørg for at alle bilder er lastet opp

2. **Nettsiden vises ikke:**
   - Sjekk at `index.html` er i riktig mappe (`public_html` eller `www`)
   - Kontroller at DNS-innstillingene er riktige
   - Vent 24-48 timer hvis du nettopp har endret DNS

3. **Styling ser feil ut:**
   - Sjekk at `styles.css` er lastet opp
   - Kontroller at filstien til CSS er korrekt i HTML

4. **JavaScript fungerer ikke:**
   - Sjekk at `script.js` er lastet opp
   - Kontroller at filstien til JavaScript er korrekt

## Oppsummering - Quick Start

**Enkleste måte (anbefalt for nybegynnere):**

1. ✅ Last opp alle filer til Netlify (drag & drop)
2. ✅ Få gratis URL fra Netlify
3. ✅ Test at alt fungerer
4. ✅ Kjøp domene (valgfritt, kan gjøres senere)
5. ✅ Koble domene til Netlify

**Kostnad:**
- Netlify hosting: **Gratis**
- Domene: **99-149 kr/år** (valgfritt)

---

**Tradisjonell hosting:**

1. ✅ Kjøp hosting + domene hos One.com eller Uninett
2. ✅ Last opp filer via FTP eller File Manager
3. ✅ Aktiver SSL-sertifikat
4. ✅ Test nettsiden

**Kostnad:**
- Hosting + domene: **200-400 kr/år**

---

Lykke til med publiseringen! 🚀

