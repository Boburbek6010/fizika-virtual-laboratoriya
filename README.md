# Fizika virtual laboratoriya

React + Vite, HashRouter. Mavzular: `src/topics/tNN.js`, rasmlar: `public/img/topic-NN.jpg`.

```
npm install
npm run dev     # ishlab chiqish
npm run build   # dist/
```

## GitHub Pages
1. Loyihani GitHub repoga `main` branchga push qiling (`package-lock.json` ham bo'lsin).
2. Repo Settings -> Pages -> Source: **GitHub Actions**.
3. `.github/workflows/deploy.yml` har push'da `npm ci && npm run build` qilib `dist` ni joylaydi. `base: './'` va HashRouter tufayli qo'shimcha sozlama kerak emas.
