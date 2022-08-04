const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});

const activity = {
    details: "Čas strávený v Matrixe:",
    assets: {
        large_image: "image_3",
        large_text: "Skús ma odpojiť a zabijem ťa.",
        small_image: "image_3",
        small_text: "Sleep..."
    },
    buttons: [
        {
            label: "Check Matrix",
            url: "https://www.matrixresurrections.net/"
        }
    ],
    timestamps: {start: Date.now()},
    instance: true
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
    console.log("done");
})

client.login({clientId: "APPLICATION ID"});
// https://discord.com/developers/applications
