export interface FriendLink {
	name: string;
	url: string;
	description?: string;
	// サイト本体のfaviconを手動で確認して控えたもの(任意)。
	// 未指定の場合はDuckDuckGo/Googleのアイコン取得サービスにフォールバックする。
	// 相手のサイトへ自動アクセスしたくないため、新しいリンクを追加したときは
	// ブラウザの開発者ツールなどで一度だけ確認して手動で設定してください。
	icon?: string;
}

// 相互リンク
export const friendLinks: FriendLink[] = [
	{
		name: "トラマト",
		url: "https://toramutton.me/",
		description: "このサイト作るのにも使用した、サイト制作のブログを書いていらっしゃる方。ヒカm..。すごい人",
		icon: "https://toramutton.me/toramutton.jpg",
	},{
		name: "しおり🔖",
		url: "https://shiori-02-14.github.io/Homepage/index.html",
		description: "NEXUSというアプリをるくった方。すごい人。",
		icon: "https://i.pinimg.com/736x/59/0c/a0/590ca0a7e1027cea004f6313ca834456.jpg?v=20260105",
	},{
		name: "lanips",
		url: "https://lanips-homepage.vercel.app/",
		description: "同クラなのに、リアルでは話したことない。",
		icon: "https://lanips-homepage.vercel.app/favicon.svg",
	},{
		name: "しー",
		url: "https://c-homepage.vercel.app/",
		description: "ダーツすごすぎてこれ。",
		icon: "https://c-homepage.vercel.app/images/favicon.jpg",
	},{
		name: "かき",
		url: "https://my-homepage-one-murex.vercel.app/",
		description: "成績フェイカー",
		icon: "https://my-homepage-one-murex.vercel.app/favicon.png",
	}
];
