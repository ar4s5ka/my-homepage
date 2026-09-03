export interface FriendLink {
	name: string;
	url: string;
	description?: string;
}

// 相互リンク・お世話になっているサイトなどをここに追加してください
export const friendLinks: FriendLink[] = [
	{
		name: "トラマト",
		url: "https://toramutton.me/",
		description: "このサイト作るのにも使用した、サイト制作のブログを書いていらっしゃる方。ヒカm..",
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
