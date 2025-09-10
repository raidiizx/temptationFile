arrayOfData = []
getMembers()

async function getMembers() {
    const response = await fetch("https://api.tsukijou.dev/members");
    const json = await response.json();
    if (!response.ok) {
        alert("Unable to get members.");
        return;
    }
    updateUI(json);
}

function updateUI(data) {
    arrayOfData = data
    let UI = document.getElementById('updateUI')
    if (arrayOfData.length === 0) {
        UI.innerHTML = `
            <tr>
                <td colspan="4">No item in the List</td>
            </tr>`
    }
    for (let i = 0; i < arrayOfData.length; i++) {
        UI.innerHTML += `
            <tr>
                <td>${arrayOfData[i].id}</td>
                <td>${arrayOfData[i].title}</td>
                <td>${arrayOfData[i].bio}</td>
                <td><a href="${arrayOfData[i].website}" target="_blank">${arrayOfData[i].website}</a></td>
            </tr>
        `;
    }
}



