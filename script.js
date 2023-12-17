const website_information = {
    title: "APOD Search",
    header_1: "Astronomical Pictures of the Day",
    instruction: "Pick a date",
    author: "Arsalan Rabdanov",
    copyright: "$copy 2023",
}

document.title = website_information.title;

const $header_1 = document.querySelector("h1");
$header_1.innerHTML += website_information.header_1;

const $label = document.querySelector("label");
$label.innerHTML += website_information.instruction;