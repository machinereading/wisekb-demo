var colorList = [

];
var color_sample = [
    "#789D9E",
    "#455F50",
    "#2F3539",
    "#453144",
    "#C86659",
    "#EBC086",
    "#444755",
    "#4D574E",
    "#BD9896",
    "#B7A9BF",
    "#403D41",
    "#E6D6D1",
    "#BAC5D3",
    "#666D7B",
    "#515348",
    "#9A9775",
    "#CFCAB4",
    "#508264",
    "#445549",
    "#8E6E6E",
    "#E4C6B6",
    "#D1C2B1",
    "#3C2B2A",
    "#675559",
    "#D2BDC9",
    "#A38996",
    "#5C363D",
    "#262632",
    "#48514E",
    "#989879",
    "#954169",
    "#442835",
    "#5F8881",
    "#315675",
    "#1C243A",
    "#2C2437",
    "#E1776B",
    "#EAB3AC",
    "#3D2B3B",
    "#715973",
    "#9D869C",
    "#CEB2C8",
    "#D4C3A9"
];

function colorInsert(num) {
    for (var i = 0; i < num; i++) {
        var color = randomColor();
        var colorObj = {
            "id": i, "color": color
        };
        colorList[i] = colorObj;
        // console.log(colorObj.color);
    }
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    return color;
}