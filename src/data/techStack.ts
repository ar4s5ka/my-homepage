export interface TechItem {
	name: string;
	// simpleicons.org のスラッグ(https://simpleicons.org/ で検索)、
	// もしくは画像のURL/パス(simpleiconsに無いものはこちら。public/icons/に保存したファイルは "/icons/ファイル名" と書く)
	icon: string;
}

export interface TechCategory {
	label: string;
	items: TechItem[];
}

// 使える/学んでる技術。カテゴリ・項目とも自由に追加してください
export const techStack: TechCategory[] = [
	{
		label: "言語",
		items: [{ name: "Python", icon: "python" }],
	},
	{
		label: "AI",
		items: [
			{ name: "claude", icon: "claude" },
			{ name: "claude code", icon: "claudeCode" },
			{ name: "Gemini", icon: "googleGemini" },
		],
	},
	{
		label: "開発環境",
		items: [
			{ name: "vscode", icon: "/icons/vscode.svg" },
		],
	},
];
