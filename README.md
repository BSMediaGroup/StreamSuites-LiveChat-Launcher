# StreamSuites-LiveChat-Launcher

Chromium + Firefox launcher extension for StreamSuites™ LiveChat.

This repository contains a **minimal browser extension** whose sole purpose is to **launch the StreamSuites LiveChat web application** quickly and consistently during live streams.

> ⚠️ This extension is a **launcher only**.  
> It does **not** host chat logic, ingest messages, store data, or interact directly with streaming platforms.

---

## Purpose

StreamSuites™ includes a Unified Chat system capable of:
- Live chat aggregation
- Replayable chat timelines
- Synthetic / authored chat (creator + Discord bot)
- OBS overlay rendering

The **LiveChat UI itself is a standalone web application**, hosted by the StreamSuites runtime and launchable from:
- The WinForms Desktop Admin
- The Web Dashboard
- This browser extension (optional convenience layer)

This repository exists to provide:
- One-click access to LiveChat during a broadcast
- A floating / pop-out launch surface in supported browsers
- Zero duplication of StreamSuites logic

---

## What This Extension Does

- Adds a toolbar button to the browser
- On click, opens the configured **StreamSuites LiveChat URL**
- Works in:
  - Chromium browsers (Brave, Chrome, Edge)
  - Firefox

That’s it.

---

## What This Extension Does NOT Do

- ❌ Does NOT ingest chat  
- ❌ Does NOT post messages to YouTube / Twitch / Rumble / Kick / Pilled  
- ❌ Does NOT authenticate streaming platforms  
- ❌ Does NOT store chat history  
- ❌ Does NOT replace dashboards  

All chat logic remains **runtime-authoritative** in the main StreamSuites repository.

---

## Supported Browsers

| Browser | Support |
|------|------|
| Brave | ✅ Yes (Chromium) |
| Chrome | ✅ Yes |
| Edge | ✅ Yes |
| Firefox | ✅ Yes |
| Safari | ❌ No (explicitly unsupported) |

Safari support is intentionally excluded due to Apple’s extension signing and App Store requirements.

---

## Installation (Developer / Internal Use)

### Chromium (Brave / Chrome / Edge)

1. Open `brave://extensions` or `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the extension directory

The extension will appear immediately in the toolbar.

---

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json`

> Note: Temporary add-ons reset on browser restart unless packaged and signed.

---

## Configuration

The extension reads a **single configuration value**:

- **LiveChat URL** (e.g. `http://localhost:8420/livechat`)

This may be:
- Hard-coded during development
- Loaded from extension storage
- Updated later to support multiple environments

The extension **does not** attempt to discover or infer runtime state.

---

## Versioning

This repository **does not define its own independent version number**.

Instead, it **follows the unified StreamSuites versioning model**, aligned with:

- `StreamSuites` (runtime repo)
- `StreamSuites-Dashboard` (dashboard repo)

The launcher is considered a **distribution surface**, not a product boundary.

Version metadata follows the same format:

```json
{
  "name": "StreamSuites™",
  "version": "0.2.3-alpha",
  "build": "2026.01.12+008",
  "owner": "Daniel Clancy",
  "copyright": "© 2026 Brainstream Media Group",
  "license": "Proprietary"
}
