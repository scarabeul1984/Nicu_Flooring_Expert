# How to Run the Website

## ⚠️ Important: You MUST use an HTTP Server

**The error "Could not load config.json" occurs because browsers block loading local files via JavaScript fetch() when opening HTML files directly (file:// protocol).**

You **MUST** run the website through an HTTP server. Here are easy ways to do it:

## Option 1: Python HTTP Server (Easiest)

1. Open PowerShell or Command Prompt
2. Navigate to the project folder:
   ```powershell
   cd C:\nicu-parchetaru-site
   ```

3. Run Python server:
   ```powershell
   python -m http.server 8000
   ```
   (If Python 3 is not installed, use `python3` instead)

4. Open your browser and go to:
   ```
   http://localhost:8000
   ```

## Option 2: Node.js HTTP Server

1. Install http-server globally (one time only):
   ```powershell
   npm install -g http-server
   ```

2. Navigate to project folder:
   ```powershell
   cd C:\nicu-parchetaru-site
   ```

3. Run server:
   ```powershell
   http-server -p 8000
   ```

4. Open browser: `http://localhost:8000`

## Option 3: VS Code Live Server (Recommended)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically!

## Option 4: Online Services

When ready to publish, use:
- **Netlify**: Drag & drop the folder → instant live site
- **GitHub Pages**: Push to GitHub → enable Pages in settings
- **Vercel**: Connect GitHub repo → automatic deployment

---

**Remember**: Never open `index.html` directly by double-clicking it. Always use an HTTP server!
