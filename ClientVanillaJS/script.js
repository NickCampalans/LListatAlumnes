const localHostAddress = "http://localhost:3000/api";

function pintarAlumnes() {
    let alumnesContainer = document.querySelector("#alumnes");
    fetch(localHostAddress + "/alumnes").then((response) => response.json())
    .then((data) => {
        const alumnesList = data.dades;
        if(alumnesList.length == 0) {
            alumnesContainer.innerHTML += `
            <div class="alumne">
                <span> No hi ha alumnes per mostrar. </span>
            </div>
            `;
        } else {
            alumnesList.innerHTML = `
            <ul>
            `;
            alumnesList.forEach(alumne => {
                alumnesContainer.innerHTML += `
                <li>
                    <span> ${alumne.nom} </span>
                </li>
                `;
            });
            alumnesList.innerHTML += `
            </ul>
            `;
        }
    });
}

window.onload = () => {
    pintarAlumnes();
}