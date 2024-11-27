const channelBar = document.querySelector("#toggle-arrow")
const channelContent = document.querySelector("#channel-content")

function toggleChannel(event){
    if(channelBar.classList.contains("fa-chevron-up")){
    channelBar.classList.replace("fa-chevron-up","fa-chevron-down");}
    else{
        channelBar.classList.replace("fa-chevron-down","fa-chevron-up");
    }
}

channelBar.addEventListener("click", toggleChannel)
