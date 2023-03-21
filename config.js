module.exports = {
    app: {
        token: 'MTA4MjI0ODk4NTA2Mzk4MTEwNg.Gw3Ftn.ysLW7mZMt-NISfnv1JxLSt__fYGFl_P2orZ_Lc',
        playing: 'by mvvn',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
