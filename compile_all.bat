@echo off

echo Bundling client package javascript
pushd .\src\client-side\rage-client-package\animwheel
call npx webpack
popd
echo Client package javascript bundled successfully

echo Compiling server-side typescript
call tsc -p ./src/server-side

echo Copying CEF
robocopy .\src\client-side\cef .\dist\client_packages\animwheel\cef /xf *.ts tsconfig.json webpack.config.js /S
echo CEF copied successfully

echo Bundling CEF javascript
pushd .\src\client-side\cef
call npx webpack
popd
echo CEF javascript bundled successfully

echo Everything is now ready under the ./dist folder
echo ---
echo REMINDER: You have to require('animwheel/index.js') in your client_packages\index.js!
pause
