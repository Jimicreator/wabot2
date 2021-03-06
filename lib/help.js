// edit it to change the bot's name
const botname = 'Emilia' 

function help( pushname ) {
    return `ποΈHi ${pushname}, I'm ${botname}!

Prefix - #

ποΈ Command List ποΈ

*_CMD: #profile_*
*Description: Displays the information of the user*

*_CMD: #info_*
*Description: Displays the information about the bot* ποΈ

*_CMD: #sticker_*
*Description: Turns images into stickers* ποΈ
Usage: #sticker as caption of picture

*_CMD: #gsticker <giphy URL>_*
*Description: Turns gifs into stickers* π οΈ

*_CMD: #sauce_*
*Description: Give's the title of the picture specified* β€οΈ
Usage: #sauce as the caption or reply of any picture

*_CMD: #pokemon_*
*Description: Returns picture of a random Pokemon* πΊοΈ

*_CMD: #waifu_*
*Description: Returns picture of a random waifu* ποΈ

*_CMD: #anime <anime name>_*
Description: Returns the information of the given anime* πΊοΈ
Usage: #anime sakura trick

*_#tts <language-code> <text>_* [Disabled due to ban-risk]
*Description: Converts text to speech* π£οΈ
Usage: #tts en I love Emilia

*_#quotemaker | quote | author |_*
*Description: Convert the given quote to an image*
Usage: #qm | Courage need not to be remembered, for it is never forgotten | Emilia ποΈ

*_#lyrics <song name>_*
*Description: Displays the lyricsof the given song* πΆοΈ
Usage: #lyrics Shinzou wo sasageyo
            
*_CMD: #neko_*
*Description: Displays picture of a random cat* ποΈ

*_CMD: #doggo_*
*Description: Displays picture of a random pup* ποΈ

*_CMD: #rpaper_*
*Description: Displays a random wallpaper* ποΈ

*_CMD: #animeneko_*
Description: Displays picture of an anime cat ;)* ποΈ

*_CMD: #wallpaper <keyword>_*
*Description: Returns a random anime wallpaper based on the keyword* π±οΈ
Usage: #wallpaper Black Butler

*_CMD: #covid <country>_*
*Description: Displays the live stats of Covid-19 of the given country* ποΈ
Usage: #covid Japan

*_CMD: #meme_*
*Description: Returns a random meme π·οΈ 

*_CMD: #sr <subreddit_title>_*
*Description: Displays a post from the given subreddit* π»οΈ
Usage: #sr Emilia

*_CMD: #quotes_* [Disabled]
*Description: Returns a quote that will either give you existential crises or wisdom* π οΈ

*_CMD: #groupinfo_*
*Description: Displays the information of the group* β±οΈ

*_CMD: #roll_*
*Description: Rolls a dice* π²

*_CMD: #flip_*
*Description: Flips a coin* π‘

Admin Commands ποΈ

Only group admins can execute this command

*_CMD: #ping <text>_*
*Description: Tags all members in the group* ποΈ
Usage: #ping Well, in that case

*_CMD: #delete_*
Description: Deletes the Bot's message* ποΈ
Usage: Send #delete as reply to the bot's message

To execute the following commands the bot and the author needs to be admin

*_CMD: #seticon_*
*Description: Sets the quoted image as the group icon* ποΈ

*_CMD: #kick @user_*
*Description: Kicks the mentioned person from the group* ποΈ

*_CMD: #promote @user_*
*Description: Makes the metioned user admin* ποΈ

*_CMD: #demote @user_*
*Description: Demotes the mentioned user from adminship* ποΈ


There are many hidden and fun keywords ;)

Hope you have a great day!`
}
exports.help = help()
function info() {
    return 'ποΈHi there, I\'m ${botname}\nThis project is open source, built using Javascript || Node.js and is available at GitHub https:\/\/bit.ly\/39Ld2L8 (Updated).\n\n *Creators*ποΈ\n\n_Emilia Yohannan (Ban Takahiro)_ \n _Somnath Das (Takeshi Stark)_ \n\n*Developers*β¨\n \n _Emilia Yohannan_ \n_Somnath Das_\n_Dominik Heiing_\n\n*Contributors*π«\n\n_Miliana Blue_\n_Aman Sakuya_\n_Mystery_\n_ShellTear_'
}
exports.info = info()


