@echo off

echo Compiling client-side typescript
call tsc -p ./src/client-side/rage-client-package/animwheel

echo Compiling server-side typescript
call tsc -p ./src/server-side

echo Copying CEF
robocopy .\src\client-side\cef .\dist\client_packages\animwheel\cef /xf *.ts tsconfig.json webpack.config.js /S

echo Bundling CEF javascript
pushd .\src\client-side\cef
call npx webpack
popd
