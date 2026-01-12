# Site Web Nicu Parchetaru - Vancouver

Site web static, sigur și responsive pentru meșterul parchetar Nicu Parchetaru din Vancouver, Canada.

## 📁 Structura Proiectului

```
nicu-parchetaru-site/
│
├── index.html          # Pagina principală HTML
├── style.css           # Stiluri CSS responsive
├── script.js           # Logica JavaScript (calculator, navigare)
├── config.json         # Fișier de configurare (date editabile)
├── favicon.svg         # Favicon SVG
├── favicon.ico         # Favicon ICO (opțional)
└── README.md           # Acest fișier cu instrucțiuni
```

## 🚀 Instalare și Rulare Locală

### Opțiunea 1: Server HTTP Simplu (Python)

```bash
# Python 3
cd nicu-parchetaru-site
python -m http.server 8000

# Apoi deschide în browser: http://localhost:8000
```

### Opțiunea 2: Server HTTP Simplu (Node.js)

```bash
# Instalează http-server global (o singură dată)
npm install -g http-server

# Rulează serverul
cd nicu-parchetaru-site
http-server -p 8000

# Apoi deschide în browser: http://localhost:8000
```

### Opțiunea 3: Live Server (VS Code)

1. Instalează extensia "Live Server" în VS Code
2. Click dreapta pe `index.html` → "Open with Live Server"

## ✏️ Editare Conținut

### Editare Rapidă - config.json

**Toate textele și datele site-ului pot fi modificate în `config.json`:**

- **Informații meșter**: nume, locație, experiență, descriere, valori
- **Servicii**: lista serviciilor oferite cu descrieri
- **Prețuri**: prețuri pentru montaj și recondiționare (per m² și per sq ft)
- **Contact**: telefon, email, adresă, program
- **Social media**: linkuri Facebook, Instagram
- **Texte secțiuni**: titluri și subtitluri pentru toate secțiunile

**Exemplu de editare:**

```json
{
  "master": {
    "name": "Nicu Parchetaru",  // Schimbă numele aici
    "phone": "+1 (604) 555-0123"  // Schimbă telefonul aici
  }
}
```

### Editare Avansată - HTML/CSS

- **index.html**: Structura paginii, secțiuni, layout
- **style.css**: Culori, fonturi, dimensiuni, design responsive

**Culori principale (în style.css):**
```css
--color-primary: #8B7355;        /* Maro lemn închis */
--color-primary-light: #D4A574;  /* Maro lemn deschis */
```

## 🖼️ Adăugare Imagini

### Imagini Hero și Galerie

1. **Hero Image** (imagine principală):
   - Deschide `index.html`
   - Găsește linia cu `id="hero-image"`
   - Înlocuiește URL-ul placeholder cu calea către imaginea ta
   - Dimensiuni recomandate: 1200x600px

2. **Imagini Galerie**:
   - Deschide `index.html`
   - Găsește secțiunea `id="galerie"`
   - Înlocuiește URL-urile placeholder cu căile către imaginile tale
   - Dimensiuni recomandate: 800x600px

**Exemplu:**
```html
<!-- Înainte -->
<img src="https://via.placeholder.com/800x600/..." alt="...">

<!-- După -->
<img src="images/proiect-1-inainte.jpg" alt="Proiect parchet înainte">
```

### Organizare Imagini

Creează un folder `images/` în proiect:
```
nicu-parchetaru-site/
├── images/
│   ├── hero-image.jpg
│   ├── proiect-1-inainte.jpg
│   ├── proiect-1-dupa.jpg
│   └── ...
```

## 🌐 Publicare Online

### Opțiunea 1: GitHub Pages (Gratuit)

1. **Creează un repository GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Site Nicu Parchetaru"
   git branch -M main
   git remote add origin https://github.com/username/nicu-parchetaru-site.git
   git push -u origin main
   ```

2. **Activează GitHub Pages:**
   - Mergi la repository pe GitHub
   - Settings → Pages
   - Source: selectează "main" branch
   - Save
   - Site-ul va fi disponibil la: `https://username.github.io/nicu-parchetaru-site/`

### Opțiunea 2: Netlify (Gratuit, Recomandat)

1. **Drag & Drop:**
   - Mergi la [netlify.com](https://www.netlify.com)
   - Sign up / Login
   - Drag & drop folderul `nicu-parchetaru-site` în Netlify
   - Site-ul va fi live imediat!

2. **Via Git:**
   - Conectează repository-ul GitHub cu Netlify
   - Netlify va detecta automat site-ul și îl va publica
   - La fiecare commit, site-ul se va actualiza automat

### Opțiunea 3: Vercel (Gratuit)

1. Instalează Vercel CLI: `npm i -g vercel`
2. În folderul proiectului: `vercel`
3. Urmează instrucțiunile

## 🔒 Securitate

Site-ul include următoarele măsuri de securitate:

- ✅ Content-Security-Policy (CSP) headers
- ✅ X-Frame-Options: DENY (protejează împotriva clickjacking)
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy
- ✅ Doar resurse externe sigure (HTTPS)
- ✅ JavaScript separat în fișiere externe (fără inline code periculos)

## 📱 Responsive Design

Site-ul este complet responsive și funcționează pe:
- 📱 Telefoane mobile (320px+)
- 📱 Tablete (768px+)
- 💻 Desktop (1024px+)

## 🧮 Calculator Preț

Calculatorul permite:
- Calcularea suprafaței în metri pătrați, feet pătrați sau inches
- Conversii corecte între unități
- Prețuri predefinite din config.json sau prețuri custom
- Afișare cost total estimativ

**Conversii:**
- 1 m² = 10.764 sq ft
- 1 sq ft = 0.092903 m²
- 1 sq ft = 144 sq in

## 📧 Formular Contact

Formularul de contact folosește `mailto:` pentru a deschide clientul de email al utilizatorului. Pentru funcționalitate avansată (salvare în baza de date), ar trebui să integrezi un serviciu backend sau un serviciu de form-uri precum:
- Formspree
- Netlify Forms
- EmailJS

## 🛠️ Tehnologii Folosite

- HTML5 semantic
- CSS3 cu variabile CSS
- JavaScript vanilla (fără framework-uri)
- JSON pentru configurare
- Google Fonts (Inter)

## 📝 Licență

Acest proiect este creat pentru utilizare personală/comercială.

## 🆘 Suport

Pentru întrebări sau probleme:
- Verifică că toate fișierele sunt în același folder
- Verifică consola browser-ului pentru erori (F12)
- Asigură-te că rulezi site-ul printr-un server HTTP (nu direct din file://)

## ✨ Funcționalități

- ✅ Design modern și profesional
- ✅ Responsive complet
- ✅ Calculator de preț cu conversii
- ✅ Formular de contact
- ✅ Galerie proiecte
- ✅ Securitate îmbunătățită
- ✅ Configurare ușoară prin config.json
- ✅ Optimizat pentru SEO
- ✅ Accesibil și ușor de navigat

---

**Creat cu ❤️ pentru Nicu Parchetaru**
