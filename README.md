# NEIGHBOR CAT - beta
Project Link: [NEIGHBOR CAT](https://neighbor-cat-cyanea-0326.vercel.app/home)  
Typescript + Next.js + NextAuth + supabase Project

### How to use

##### -Footer  
左からhome(Voting), Post, Timeline, Profileページへ遷移します。  

##### -home(Voting)
中央に表示されている猫が気に入ったらGoodを押してみてください。  
Badは猫以外の画像が表示されていたり、マナー違反をしているような画像につけてください。

##### -Post
あなたが撮影した猫の写真を投稿すことができます。  
初めて訪れた際はログインを要求する画面が表示されています

##### -Timeline
隣人が撮影した素敵な猫の画像を眺めることができます（予定です）  
画面を下へスクロールすると、新たな画像をリクエストすることができます。

##### -Profile
ログイン・ログアウトや、あなたの情報を確認、編集や削除などできる機能を実装予定です  

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
