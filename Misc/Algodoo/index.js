const scenes = [
    {id: 250027, title: "Bridge 1", image: "/Images/Algodoo/Scenes/250027_.png"},
    {id: 264143, title: "Titanic Breakup Animation", image: "/Images/Algodoo/Scenes/264143_.png"},
    {id: 246719, title: "Automatic Bowling Machine", image: "/Images/Algodoo/Scenes/246719_.png"},
    {id: 255439, title: "Automatic Bowling Machine 3", image: "/Images/Algodoo/Scenes/255439_.png"},
    {id: 255564, title: "Algodoo Sports - Bowling", image: "/Images/Algodoo/Scenes/255564_.png"},
    {id: 264144, title: "Simple Bus", image: "/Images/Algodoo/Scenes/264144_.png"},
    {id: 256406, title: "Awesome Roller Coaster ! 2", image: "/Images/Algodoo/Scenes/256406_.png"},
    {id: 257161, title: "Escalator", image: "/Images/Algodoo/Scenes/257161_.png"},
    {id: 258179, title: "So I made a Logo 8", image: "/Images/Algodoo/Scenes/258179_.png"},
    {id: 257197, title: "Awesome Roller Coaster ! 3", image: "/Images/Algodoo/Scenes/257197_.png"},
    {id: 255563, title: "Algodoo Sports", image: "/Images/Algodoo/Scenes/255563_.png"},
    {id: 251361, title: "Logo Blending 1", image: "/Images/Algodoo/Scenes/251361_.png"},
    {id: 251780, title: "Optical Illusion 3", image: "/Images/Algodoo/Scenes/251780_.png"},
    {id: 254662, title: "Automatic Bowling Machine 2", image: "/Images/Algodoo/Scenes/254662_.png"},
    {id: 256088, title: "Algodoo Sports - Golf", image: "/Images/Algodoo/Scenes/256088_.png"},
    {id: 256405, title: "Awesome Roller Coaster ! 1", image: "/Images/Algodoo/Scenes/256405_.png"},
    {id: 255878, title: "Algodoo Sports - Baseball", image: "/Images/Algodoo/Scenes/255878_.png"},
    {id: 251611, title: "Something Unuseful the Twenty-Third", image: "/Images/Algodoo/Scenes/251611_.png"},
    {id: 257572, title: "Rubik's ® 2×2×2", image: "/Images/Algodoo/Scenes/257572_.png"},
    {id: 256387, title: "Algodoo Sports - Boxing", image: "/Images/Algodoo/Scenes/256387_.png"},
    {id: 256490, title: "Volcano Eruption, Remastered.", image: "/Images/Algodoo/Scenes/256490_.png"},
    {id: 256557, title: "The Earth (Algodoo Remade)", image: "/Images/Algodoo/Scenes/256557_.png"},
    {id: 249831, title: "Marble Race 1", image: "/Images/Algodoo/Scenes/249831_.png"},
    {id: 256214, title: "Algodoo Sports - Tennis", image: "/Images/Algodoo/Scenes/256214_.png"},
    {id: 250252, title: "Optical Illusion 1", image: "/Images/Algodoo/Scenes/250252_.png"},
    {id: 247994, title: "Volcano Eruption", image: "/Images/Algodoo/Scenes/247994_.png"},
    {id: 249283, title: "Contraption 1", image: "/Images/Algodoo/Scenes/249283_.png"},
    {id: 251566, title: "Logo Blending 3", image: "/Images/Algodoo/Scenes/251566_.png"},
    {id: 256434, title: "So I made a Logo 6", image: "/Images/Algodoo/Scenes/256434_.png"},
    {id: 251385, title: "Logo Blending 2", image: "/Images/Algodoo/Scenes/251385_.png"}
]

document.addEventListener('DOMContentLoaded', function () {
    const sceneGrid = document.getElementById('sceneGrid');
    const sceneDetailsSection = document.getElementById('sceneDetailsSection');

    sceneGrid.innerHTML = scenes.map(scene => `
        <div class="scene-card" data-id="${scene.id}"> 
            <img src="${scene.image}" alt="${scene.title}">
            <p><b>${scene.title}</b></p>
        </div>
    `).join('');

    sceneDetailsSection.innerHTML = scenes.map(scene => `
        <div class="scene-details hidden" id="${scene.id}">
            <p>${scene.title}</p>
        </div>
    `).join('');

    $(document).on('click', '.scene-card', function () {
        const sceneId = $(this).data('id');
        $(`#${sceneId}`).removeClass('hidden').addClass('visible');
        $(".opacity-box").removeClass('hidden').addClass('visible');
    });

    $(".opacity-box").click(function () {
        $(this).removeClass("visible").addClass("hidden");
        $(".scene-details").removeClass("visible").addClass("hidden");
    });
});