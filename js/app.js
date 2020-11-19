fetch("./json/NBA-Player-notice.json")
.then(res => res.json())
.then(json => {
    console.log(JSON.stringify(json.lscd));
})