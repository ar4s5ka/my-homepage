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
	},
];
