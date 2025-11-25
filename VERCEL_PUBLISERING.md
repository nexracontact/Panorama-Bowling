# Hvordan publisere Panorama Bowling på Vercel

## Metode 1: Drag & Drop (Enkleste - 2 minutter!)

### Steg 1: Forbered filene
1. Sørg for at alle filene er i samme mappe:
   - `index.html`
   - `styles.css`
   - `script.js`
   - Alle bildene (Logo panorama.png, Bowling 1.avif, etc.)

### Steg 2: Last opp til Vercel
1. Gå til https://vercel.com
2. Logg inn (eller lag gratis konto)
3. Klikk på "Add New..." → "Project"
4. Klikk på "Browse" eller "Upload" (eller dra mappen din inn)
5. Vercel vil automatisk:
   - Oppdage at det er en statisk HTML-side
   - Deploye nettsiden
   - Gi deg en gratis URL (f.eks. `panorama-bowling-xyz.vercel.app`)

### Steg 3: Test nettsiden
- Klikk på lenken Vercel gir deg
- Test at alt fungerer:
  - Bilder vises
  - Navigasjon fungerer
  - Kontaktskjema vises

✅ **Ferdig! Nettsiden er live!**

---

## Metode 2: Via GitHub (Anbefalt for fremtidige oppdateringer)

### Steg 1: Opprett GitHub repository
1. Gå til https://github.com
2. Logg inn og klikk "New repository"
3. Gi det navn: `panorama-bowling-website`
4. Last opp alle filene
5. Commit og push

### Steg 2: Koble til Vercel
1. Gå til Vercel dashboard
2. Klikk "Add New..." → "Project"
3. Importer fra GitHub
4. Velg repository du nettopp opprettet
5. Vercel vil automatisk:
   - Deploye nettsiden
   - Oppdatere automatisk når du pusher nye endringer

### Fordeler med GitHub-metoden:
- ✅ Automatisk oppdatering når du endrer noe
- ✅ Versjonskontroll
- ✅ Lettere å jobbe sammen med andre

---

## Koble ditt eget domene til Vercel

### Steg 1: Kjøp domene (hvis du ikke har)
- One.com, Uninett, Namecheap, etc.
- Foreslåtte: `panoramabowling.no` eller `.com`

### Steg 2: Legg til domene i Vercel
1. Gå til ditt prosjekt i Vercel
2. Klikk på "Settings" → "Domains"
3. Legg til ditt domene (f.eks. `panoramabowling.no`)
4. Følg instruksjonene Vercel gir deg

### Steg 3: Oppdater DNS-innstillinger
1. Gå til der du kjøpte domenet
2. Finn DNS-innstillinger
3. Legg til records Vercel ba om:
   - Vanligvis en A-record eller CNAME
   - Vercel gir deg eksakte verdier

### Steg 4: Vent på aktivering
- Tar vanligvis 5 minutter til 1 time
- Vercel gir deg automatisk SSL-sertifikat (HTTPS)
- Gratis!

---

## Viktige notater for Vercel

### ✅ Hva Vercel gjør automatisk:
- HTTPS/SSL-sertifikat (gratis)
- Raskt CDN (Content Delivery Network)
- Automatisk deploy ved oppdateringer
- Backup og versjonskontroll

### 📁 Filstruktur
Sørg for at strukturen ser slik ut:
```
panorama-bowling/
├── index.html
├── styles.css
├── script.js
├── Logo panorama.png
├── Bowling 1.avif
├── Bowling 2.avif
├── ... (alle andre bilder)
```

### 🔧 Build Settings
Vercel trenger ingen build settings for statiske HTML-sider, men hvis den spør:
- **Framework Preset:** Other
- **Root Directory:** ./
- **Build Command:** (la stå tomt)
- **Output Directory:** ./

---

## Oppdatere nettsiden etter publisering

### Med Drag & Drop:
1. Last opp filene på nytt
2. Vercel deployer automatisk

### Med GitHub:
1. Endre filene lokalt
2. Commit og push til GitHub
3. Vercel deployer automatisk!

---

## Feilsøking

### Bilder vises ikke?
- ✅ Sjekk at alle bildene er i samme mappe som index.html
- ✅ Kontroller filnavnene (pass på store/små bokstaver)
- ✅ Alle bilder må være lastet opp til Vercel

### Nettsiden ser ikke riktig ut?
- ✅ Sjekk at styles.css er lastet opp
- ✅ Sjekk at script.js er lastet opp
- ✅ Se i nettleserens console for feil (F12 → Console)

### Domene fungerer ikke?
- ✅ Vent 1-2 timer etter DNS-oppdatering
- ✅ Sjekk at DNS-innstillingene er riktige
- ✅ Sjekk Vercel dashboard for feilmeldinger

---

## Quick Start - 3 enkle steg

1. ✅ **Dra mappen din** inn på vercel.com
2. ✅ **Få gratis URL** automatisk
3. ✅ **Test at alt fungerer**

Det er alt! 🚀

---

## Kostnad

**Vercel Hosting:** GRATIS (for statiske nettsider)
**Domene:** 99-149 kr/år (valgfritt)

Totalt: Gratis hvis du bruker .vercel.app domene, eller ca. 100-150 kr/år hvis du vil ha eget domene.

