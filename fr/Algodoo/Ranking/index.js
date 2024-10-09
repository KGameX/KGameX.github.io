const scenes = [
    {title: "Bridge 1", image: "https://www.algodoo.com/algobox/upload/image/250027_.png", downloads: 11547},
    {title: "Titanic Breakup Animation", image: "https://www.algodoo.com/algobox/upload/image/264143_.png", downloads: 9087},
    {title: "Automatic Bowling Machine", image: "https://www.algodoo.com/algobox/upload/image/246719_.png", downloads: 7974},
    {title: "Automatic Bowling Machine 3", image: "https://www.algodoo.com/algobox/upload/image/255439_.png", downloads: 7581},
    {title: "Algodoo Sports - Bowling", image: "https://www.algodoo.com/algobox/upload/image/255564_.png", downloads: 7405},
    {title: "Simple Bus", image: "https://www.algodoo.com/algobox/upload/image/264144_.png", downloads: 6909},
    {title: "Awesome Roller Coaster ! 2", image: "https://www.algodoo.com/algobox/upload/image/256406_.png", downloads: 6439},
    {title: "Escalator", image: "https://www.algodoo.com/algobox/upload/image/257161_.png", downloads: 5493},
    {title: "So I made a Logo 8", image: "https://www.algodoo.com/algobox/upload/image/258179_.png", downloads: 5455},
    {title: "Awesome Roller Coaster ! 3", image: "https://www.algodoo.com/algobox/upload/image/257197_.png", downloads: 5317},
    {title: "Algodoo Sports", image: "https://www.algodoo.com/algobox/upload/image/255563_.png", downloads: 5225},
    {title: "Logo Blending 1", image: "https://www.algodoo.com/algobox/upload/image/251361_.png", downloads: 4803},
    {title: "Optical Illusion 3", image: "https://www.algodoo.com/algobox/upload/image/251780_.png", downloads: 4753},
    {title: "Automatic Bowling Machine 2", image: "https://www.algodoo.com/algobox/upload/image/254662_.png", downloads: 4381},
    {title: "Algodoo Sports - Golf", image: "https://www.algodoo.com/algobox/upload/image/256088_.png", downloads: 4228},
    {title: "Awesome Roller Coaster ! 1", image: "https://www.algodoo.com/algobox/upload/image/256405_.png", downloads: 4216},
    {title: "Algodoo Sports - Baseball", image: "https://www.algodoo.com/algobox/upload/image/255878_.png", downloads: 4162},
    {title: "Something Unuseful the Twenty-Third", image: "https://www.algodoo.com/algobox/upload/image/251611_.png", downloads: 3906},
    {title: "Rubik's ® 2×2×2", image: "https://www.algodoo.com/algobox/upload/image/257572_.png", downloads: 3853},
    {title: "Algodoo Sports - Boxing", image: "https://www.algodoo.com/algobox/upload/image/256387_.png", downloads: 3576},
    {title: "Volcano Eruption, Remastered.", image: "https://www.algodoo.com/algobox/upload/image/256490_.png", downloads: 3412},
    {title: "The Earth (Algodoo Remade)", image: "https://www.algodoo.com/algobox/upload/image/256557_.png", downloads: 3377},
    {title: "Marble Race 1", image: "https://www.algodoo.com/algobox/upload/image/249831_.png", downloads: 3309},
    {title: "Algodoo Sports - Tennis", image: "https://www.algodoo.com/algobox/upload/image/256214_.png", downloads: 3084},
    {title: "Optical Illusion 1", image: "https://www.algodoo.com/algobox/upload/image/250252_.png", downloads: 3065},
    {title: "Volcano Eruption", image: "https://www.algodoo.com/algobox/upload/image/247994_.png", downloads: 2999},
    {title: "Contraption 1", image: "https://www.algodoo.com/algobox/upload/image/249283_.png", downloads: 2938},
    {title: "Logo Blending 3", image: "https://www.algodoo.com/algobox/upload/image/251566_.png", downloads: 2737},
    {title: "So I made a Logo 6", image: "https://www.algodoo.com/algobox/upload/image/256434_.png", downloads: 2661},
    {title: "Logo Blending 2", image: "https://www.algodoo.com/algobox/upload/image/251385_.png", downloads: 2653}
]

function createSceneCard(scene) {
    return `
        <div class="scene-card"> 
            <img src="${scene.image}" alt="${scene.title}">
            <div class="scene-info">
                <div class="scene-title">${scene.title}</div>
                <div class="scene-stats">
                    <div class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        ${scene.downloads}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// La fonction sera éxecuté directement aprés le chargement du site (DOMContentLoaded) et rajoutera dans la div gameGrid les jeux un à un

function renderSceneGrid() {
    const sceneGrid = document.getElementById('sceneGrid');
    sceneGrid.innerHTML = scenes.map(createSceneCard).join('');
}

document.addEventListener('DOMContentLoaded', renderSceneGrid);