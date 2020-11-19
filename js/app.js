fetch("./json/NBA-Player-notice.json")
.then(res => res.json())
.then(json => {
    // console.log(JSON.stringify(json.lscd));
    console.log(JSON.stringify(json.lscd[0].mscd.g[0].ptsls.pl[0].ln));
});