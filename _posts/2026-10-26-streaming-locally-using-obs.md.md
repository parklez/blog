---
title: Streaming locally using OBS and a Browser to watch
tags: tutorial
---

This guide is for people who want to create a stream for others to watch in their local home network without using an internet service such as Twitch, Youtube, VDO.ninja, etc. This can also work on a VPS if you own one so people over the internet can watch.

The configuration and technologies used in this guide aims to reduce latency as much as possible.

## Requirements
- [OBS](https://github.com/obsproject/obs-studio)
- [MediaMTX](https://github.com/bluenviron/mediamtx)
- Both host and clients must be under the same home network

## Configuration
### MediaMTX
Just run as-is and write down the device's IP address this is running on.
Having a 24/7 server is a good idea if you have one so the IP address doesn't change often.

### OBS (Streaming - Easy)
#### Go to Settings > Stream
- **Destination** > Server

Change below "some-host-name" for the IP address you wrote down from MediaMTX. \
Change stream path from "mylivestream" to whatever you like. Must be unique among streamers.

```
srt://some-host-name:8890?streamid=publish:mylivestream&latency=20
```

#### Go to Settings > Output > Streaming

- **Output Mode** > "Advanced"
- **Streaming Settings** > Audio Encoder > "FFmpeg Opus"
  - No sound when watching on browser otherwise!
- **Encoder Settings** > Tune > "zerolatency"


### OBS (Record to URL - Hard - Alternative method)

#### Go to Settings > Output > Recording

- **Type** > "Custom Output (FFmpeg)"

#### FFmpeg Settings:
- **FFmpeg Output Type** > "Output to URL"

- **File path or URL** >

Change below "some-host-name" for the IP address you wrote down from MediaMTX. \
Change stream path from "mylivestream" to whatever you like. Must be unique among streamers.

```
srt://some-host-name:8890?streamid=publish:mylivestream&latency=20
```

- **Container Format** > "mpegts"

- **Muxer Settings (if any)** >
```
muxdelay=0 muxpreload=0
```

- **Video Bitrate** >  3500 Kbps (Good enough for 720p60)

- **Keyframe Interval (frames)** > 60 (every 1 second)

- Tick  **"[X] Show all codecs (even if potentially incompatible)"**

- **Video Encoder Settings (if any)** >
```
bframes=0 keyint=60 min-keyint=60 preset=medium tune=zerolatency ref=1 fflags=nobuffer+flush_packets
```

- **Audio Bitrate** > 192 Kbps

- **Audio Encoder** > "libopus - libopus Opus"

## Running
- Click "Start Streaming" (The easy way) or "Start Recording" (The hard way).
- Watch at 
```
some-host-name:8890/mylivestream
```
- Create scenes and capture window/games as you normally would.
- I recommend using the beta feature that captures the audio stream from the target instead of the whole Desktop.
