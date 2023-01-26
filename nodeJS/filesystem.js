const fs=require("fs");

fs.copyFileSync("dontCopyThisFile.txt","fileCopied.txt");

//run it using node "node filesystem.js"