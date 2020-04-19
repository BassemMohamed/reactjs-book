npm run jest
npm run build
echo "/*    /index.html  200" > ./storybook-static/_redirects
netlify deploy --dir=./storybook-static --prod