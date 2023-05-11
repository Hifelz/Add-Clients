# Add-Clients
Application that adds clients with NextJS, Tailwind, Css and Firebase
# Install FireBase
npm install firebase
# Install TailWind CSS (nodeJS above v10
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# Add purge to css config
purge: [
    './src/pages/**/*.{js, ts, jsx, tsx}',
    './src/components/**/*{js, ts, jsx, tsx}'
],
# Install typeScript 
npm install --save-dev @types/react typescript
npm run dev after create tsconfig.json
