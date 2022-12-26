
let contentEl = document.getElementById("content_el");
let randomEmoji = ["❤","😢","😁","😜",'😍','🤐','😮','🤔','😎','😑','😣','🙄'];
function showRandomEmoji(){
    let random1 = Math.floor(Math.random() * randomEmoji.length);
    let random2 = Math.floor(Math.random() * randomEmoji.length);
    contentEl.style.fontSize =' 3rem'; 
    contentEl.textContent = randomEmoji[random1] + " vs " + randomEmoji[random2];
    
}