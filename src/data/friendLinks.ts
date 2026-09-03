export interface FriendLink {
	name: string;
	url: string;
	description?: string;
}

// 相互リンク・お世話になっているサイトなどをここに追加してください
export const friendLinks: FriendLink[] = [
	{
		name: "〇〇のサイト",
		url: "https://example.com",
		description: "友人のホームページ",
	},
];
