let wrap = document.querySelector("#wrap");

fetch("./json/NBA-Player-notice.json")
.then(res => res.json())
.then(json => {
    // console.log(JSON.stringify(json.lscd));
    // console.log(json);
    console.log(json);
    JSON.stringify(json).replace(/\"/g, "");
    console.log(json.lscd[0].mscd.g[0].ptsls.pl[0].img);
    document.querySelector(".player_name").append(`
        ${JSON.stringify(json).replace(/\"/g, "")}
        <img src="./img/player_profile/${json.lscd[0].mscd.g[0].ptsls.pl[0].img[0]}" alt="player_name">
    `);
});
