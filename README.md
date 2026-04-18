# Lilac Tree Ceremonies Website
Run by Loid who is an independent celebrant specialising in weddings, funerals, and naming day ceremonies, creating bespoke moments that reflect the people at the centre of each occasion.

## Run Locally
```text
npm ci
npm start
```

Test url: https://lilac-tree.andystead.co.uk/

## Deploy to prod
```text
npm run build
```

* Upload dist folder to S3
* Create an Invalidation in the CloudFront distribution (/*)
