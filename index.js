document.getElementById("btn").addEventListener("click",change);

function change(e)
{
    let btn = document.getElementById("btn");
    btn.classList.toggle("active");

    let another = document.getElementById("testid");

    another.classList.toggle("anotherclass");

    let light = document.getElementById('light');

    light.classList.toggle("finalclass");
}