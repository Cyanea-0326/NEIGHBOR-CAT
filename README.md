# NEIGHBOR CAT - beta
Project Link: [NEIGHBOR CAT](https://neighbor-hi56abv9c-cyanea-0326.vercel.app/home)
Typescript + Next.js + NextAuth + supabase Project

### How to use

### Scheduled to be implemented
- Voting
	- 新たな画像のリクエスト
	- POSTされた画像が少ない場合Dummyテーブルから取得

- Post
	- 未定

- Timeline
	- [TheCatApi](https://thecatapi.com/)から、DBデータへ取得先を移行
	- 表示数調整

- Profile
	- POSTの確認、削除
	- 投票の確認

- whole project
	- TL用のデータ（画像URLなど）をappサーバー側で定期的に更新
	- クライアントからの投票をappサーバー側で一時保存、合計の処理をしDB更新のtrafficを抑える
	- Badが一定数到達/Goodが一定数未満でDeleteクエリの発行を定期実行





<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
