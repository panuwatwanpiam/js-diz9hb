// Import stylesheets
import './style.css';
import liff from '@line/liff'

// Write Javascript code!
const body = document.getElementById('body');
const appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>JS Starter</h1>";

async function main(){
  liff.ready.then(() =>{
    body.style.backgroundColor = "#888888";

  if(liff.isInclient()){
    //Only in Line app do this
    appDiv.innerHTML = "<h1>In Line</h1>";
  }

  })

  await liff.init({liffId:"1654917825-VBnm3rME"});
}

main();