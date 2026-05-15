@echo off
REM Open Portfolio - فتح البورتفليو
REM This script opens the portfolio in your default browser

echo.
echo ========================================
echo   Opening Your Professional Portfolio
echo   فتح بورتفليوك الاحترافي
echo ========================================
echo.

REM Get the current directory
set "PORTFOLIO_DIR=%~dp0"

REM Open index.html in default browser
start "" "%PORTFOLIO_DIR%index.html"

echo.
echo Portfolio is opening in your browser...
echo البورتفليو يفتح في متصفحك الآن...
echo.
echo.
pause
