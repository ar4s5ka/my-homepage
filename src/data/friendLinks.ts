export interface FriendLink {
	name: string;
	url: string;
	description?: string;
}

// 相互リンク
export const friendLinks: FriendLink[] = [
	{
		name: "トラマト",
		url: "https://toramutton.me/",
		description: "このサイト作るのにも使用した、サイト制作のブログを書いていらっしゃる方。ヒカm..。すごい人",
	},{
		name: "しおり🔖",
		url: "https://shiori-02-14.github.io/Homepage/index.html",
		description: "NEXUSというアプリをるくった方。すごい人。",
	},{
		name: "lanips",
		url: "https://lanips-homepage.vercel.app/",
		description: "同クラなのに、リアルでは話したことない。",
	},{
		name: "しー",
		url: "https://c-homepage.vercel.app/",
		description: "ダーツすごすぎてこれ。",
	},{
		name: "かき",
		url: "https://my-homepage-one-murex.vercel.app/",
		description: "成績フェイカー",
	}
];
