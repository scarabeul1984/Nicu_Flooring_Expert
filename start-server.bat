@echo off
echo Starting HTTP Server for Nicu Parchetaru Website...
echo.
echo The website will be available at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
python -m http.server 8000
pause
