const {ImageKit} = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file){
    const result = await imagekit.files.upload({
        file:await toFile(Buffer.from(file,"base64"),"music.mp3"),
        fileName:`music_${Date.now()}.mp3`,
        folder:"/music"
    })
    
    return result
}

module.exports = {
    uploadFile
}
