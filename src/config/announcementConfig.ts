import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "测试公告",

	// 公告内容
	content: "我看看发不发的出来啊，家人们。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "你点开看看",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};

