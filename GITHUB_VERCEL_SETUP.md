# Guide: Koble GitHub Repository til Vercel

Du har allerede opprettet GitHub repository: `https://github.com/nexracontact/Panorama-Bowling.git`

Nå skal vi laste opp filene og koble det til Vercel for automatisk deployment.

## Steg 1: Last opp filene til GitHub

### Metode A: Via GitHub Web Interface (Enkleste)

1. **Gå til repository:**
   - Åpne: https://github.com/nexracontact/Panorama-Bowling

2. **Last opp filer:**
   - Klikk på grønn "Add file" knapp → "Upload files"
   - Dra alle filene fra mappen din inn:
     - `index.html`
     - `styles.css`
     - `script.js`
     - Alle bildene (.png, .avif, .webp, .jpeg, .jpg)
   - Skriv commit message: "Initial commit - Panorama Bowling website"
   - Klikk "Commit changes"

### Metode B: Via Git Command Line (Hvis du har Git installert)

```bash
# Gå til mappen din
cd "/Users/emilvisnessilseth/Documents/NEXRA/Nettsider/Panorama Bowling"

# Initialiser Git (hvis ikke allerede gjort)
git init

# Legg til alle filer
git add .

# Commit
git commit -m "Initial commit - Panorama Bowling website"

# Legg til remote repository
git remote add origin https://github.com/nexracontact/Panorama-Bowling.git

# Push til GitHub
git branch -M main
git push -u origin main
```

## Steg 2: Koble GitHub Repository til Vercel

1. **Logg inn på Vercel:**
   - Gå til https://vercel.com
   - Logg inn med samme konto som GitHub (eller koble dem sammen)

2. **Importer prosjekt:**
   - Klikk "Add New..." → "Project"
   - Klikk "Import Git Repository"
   - Vercel vil vise GitHub repositories
   - Velg `nexracontact/Panorama-Bowling`
   - Klikk "Import"

3. **Konfigurer prosjektet:**
   - **Framework Preset:** Other
   - **Root Directory:** `./` (la stå som standard)
   - **Build Command:** (la stå tomt - ikke nødvendig for statisk HTML)
   - **Output Directory:** `./` (la stå som standard)

4. **Deploy:**
   - Klikk "Deploy"
   - Vercel vil automatisk:
     - Deploye nettsiden
     - Gi deg en URL (f.eks. `panorama-bowling-xyz.vercel.app`)
     - Setter opp automatisk deployment ved hver push

✅ **Ferdig! Nettsiden er nå live og oppdateres automatisk!**

## Steg 3: Automatisk Oppdatering

Fra nå av, hver gang du:
1. Endrer filer lokalt
2. Committer og pusher til GitHub
3. Vercel deployer automatisk ny versjon!

### Eksempel workflow:

```bash
# Endre filene lokalt
# Deretter:

git add .
git commit -m "Beskriv hva du endret"
git push
```

Vercel vil automatisk detektere endringen og deploye på 1-2 minutter!

## Steg 4: Koble eget domene (Valgfritt)

1. **I Vercel Dashboard:**
   - Gå til prosjektet ditt
   - Klikk "Settings" → "Domains"
   - Legg til ditt domene (f.eks. `panoramabowling.no`)

2. **Oppdater DNS:**
   - Følg instruksjonene Vercel gir deg
   - Legg til DNS records hos domeneleverandøren din
   - Vercel gir automatisk SSL (HTTPS)

## Viktige notater

### ✅ Fordeler med GitHub + Vercel:
- Automatisk deployment ved hver oppdatering
- Versjonskontroll av alle endringer
- Enkelt å gå tilbake til tidligere versjoner
- Gratis hosting
- Automatisk SSL/HTTPS

### 📁 Sørg for at alle filer er lastet opp:
- `index.html`
- `styles.css`
- `script.js`
- Alle bildene (Logo panorama.png, Bowling 1.avif, etc.)

### 🔒 Hvis du ikke ser GitHub repository i Vercel:
- Sjekk at du er logget inn med riktig GitHub-konto
- I Vercel: Settings → Git → Koble til GitHub på nytt

## Feilsøking

### Repository vises ikke i Vercel?
1. Gå til Vercel → Settings → Git
2. Klikk "Connect Git Provider"
3. Velg GitHub og autoriser

### Deployment feiler?
- Sjekk at `index.html` er i root-mappen
- Sjekk Vercel logs for feilmeldinger
- Sørg for at alle filstier i HTML er relative (ikke absolute)

---

## Quick Start - 3 enkle steg:

1. ✅ **Last opp filer til GitHub** (drag & drop på github.com)
2. ✅ **Importer repository i Vercel** (Add Project → Import Git)
3. ✅ **Deploy!** Nettsiden er live og oppdateres automatisk 🚀

---

**Repository URL:** https://github.com/nexracontact/Panorama-Bowling.git

