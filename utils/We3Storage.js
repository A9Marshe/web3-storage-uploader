import { Web3Storage } from "web3.storage";
//web3.storage
function getAccessToken(token) {
  if (token) console.log("using user token: ", token);
  return token ? token : process.env.WEB3STORAGE_TOKEN;
}

function getFiles() {
  const fileInput = document.querySelector('input[type="file"]');
  console.log(fileInput.files);
  return fileInput.files;
}

function makeStorageClient(token) {
  return new Web3Storage({ token: getAccessToken(token) });
}
async function storeWithProgress(setCid, token) {
  let files = Array.from(getFiles());
  // show the root cid as soon as it's ready
  const onRootCidReady = (cid) => {
    setCid(cid);
    console.log("uploading files with cid:", cid);
  };
  // makeStorageClient returns an authorized web3.storage client instance
  const client = makeStorageClient(token);

  // client.put will invoke our callbacks during the upload
  // and return the root cid when the upload completes
  return client.put(files, {
    onRootCidReady,
  });
}

export { storeWithProgress };
