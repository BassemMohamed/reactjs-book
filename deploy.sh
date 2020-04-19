npm run jest
npm run build-storybook
echo "/*    /index.html  200" > ./storybook-static/_redirects
netlify deploy --dir=./storybook-static --prod