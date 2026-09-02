export interface BlogPost {
	platform: string;
	label: string;
	title: string;
	url: string;
}

// 新しい記事を先頭に追加してください(先頭 = 最新)
export const blogPosts: BlogPost[] = [
	{
		platform: "note",
		label: "note",
		title: "パソコンが割れた話",
		url: "https://note.com/aaaaarsuka/n/nd774e2d8c778",
	},
];
