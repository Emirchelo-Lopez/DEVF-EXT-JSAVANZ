function downloadFilePromise(fileName) {
  console.log(`Initiating download ${fileName}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const content = `Content file ${fileName}`;
      resolve(content);
    }, 3000);
  });
}

// Usage of function
downloadFilePromise("file.txt")
  .then((result) => {
    console.log("File downloaded successfully: ", result);
  })
  .catch((error) => {
    console.log("Error at downloading: ", error);
  });
