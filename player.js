function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        //poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0IrHKkS_SCRYQvradaJDIg-2acYLN0lKjoYWSZipiBHCrg1jhacgDZj3t60YmK6LhXxDoXQhitUtkCldsCl07KZlz8baw0olsnEId6P2FR6crm8BurFzpqz7iqEwf8KpiQpBfdRhXOQn63d4yj0MhHLuaxIAuJrh1t3J3gqvdN3jQt_DxM-MGI8RGJw/s1600/WWW.OKSTREAM.XYZ%20banner.png',
        //position: 'top-Right',
        //watermark: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixmG33IbdEG8BM6x1Fl6Ar8UfL5Un1Ek2Jd9xZCcjFP97BSjhhkg4kW6Y2uM7jPIYmdgjXxeaD0d3txPRrA3SCGIloFwEi-BrMh69zy9hz6yDBD5XhidjPV9kJIp_M8YFo8Qa0nh9xU8jao2Yc0CGSHJ7scxDDlyvQ1wPXIhEYX5CSEWnEmgx2vPQVxo8/s1600/OKSTREAM.XYZ%20LIVE%20STREAMING.png",
        width: '100%',
        height: '100%',
        fullscreenEnabled: 'true',
        hideMediaControl: 'false',
        plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback],

        chromecast: {
            appId: '9DFB77C0',
            media: {
                type: ChromecastPlugin.Movie,
                title: 'Player HLS - DASH',
            },
        },

        shakaConfiguration: {
            preferredAudioLanguage: 'en-US',
            drm: {
                servers: {
                    'com.widevine.alpha': license
                }
            },
            streaming: {
                rebufferingGoal: 15
            }
        },
        shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
        },

    });

    document.title = "Watching: " + url;

}

playM3u8(window.location.href.split("#")[1], window.location.href.split("=")[1])
