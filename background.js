const LIVECHAT_URL = "https://streamsuites.online/chat/live";

const extensionApi = globalThis.browser ?? globalThis.chrome;

extensionApi.action.onClicked.addListener(() => {
  extensionApi.tabs.create({ url: LIVECHAT_URL });
});
