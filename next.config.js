/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn2.thecatapi.com'], // 使用する画像のホスト名を追加
	},
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 	  remotePatterns: [
// 		{
// 		  "origin": "https://cdn2.thecatapi.com",
// 		  "formats": ["image/jpeg", "image/png", "image/webp"],
// 		},
// 	  ],
// 	  loader: 'default',
// 	},
//   }

// module.exports = nextConfig
