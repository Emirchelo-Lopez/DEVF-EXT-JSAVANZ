// Async using callback
// V1


function dwldFileCallbak(fileName, callback) {
    console.log(`Downloading: ${fileName}`);

    setTimeout(() => {
        const content = `Content file ${fileName}`;
        callback(null, content);
    }, 3000);
}


dwldFileCallbak('file.txt', (error, result) => {
    if(error){
        console.error("Error to download file", error);
    } else {
        console.log("File downloaded succesfully: ", result);
    }
});