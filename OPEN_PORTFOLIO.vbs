' Open Portfolio - فتح البورتفليو
' This script opens the portfolio in your default browser without showing a command window

Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get the current directory
strCurrentDir = objFSO.GetParentFolderName(WScript.ScriptFullName)

' Path to index.html
strPortfolioPath = strCurrentDir & "\index.html"

' Check if file exists
If objFSO.FileExists(strPortfolioPath) Then
    ' Open in default browser
    objShell.Run strPortfolioPath, 0, False
    
    ' Show success message
    MsgBox "Your portfolio is opening..." & vbCrLf & vbCrLf & "بورتفليوك يفتح الآن...", vbInformation, "Portfolio"
Else
    ' Show error message
    MsgBox "Portfolio file not found!" & vbCrLf & vbCrLf & "لم يتم العثور على ملف البورتفليو!", vbCritical, "Error"
End If
