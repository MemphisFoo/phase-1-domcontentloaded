// Your code goes here

const loaded = document.getElementById('text');

document.addEventListener('DOMContentLoaded', function() {
    updateDOM();
});

function updateDOM() {
    loaded.textContent = "This is really cool!";
}