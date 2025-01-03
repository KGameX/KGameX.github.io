const scenes = [
    {id: 246719, title: "Automatic Bowling Machine", desc: "Text text text"},
]

document.addEventListener('DOMContentLoaded', function () {
    const sceneGrid = document.getElementById('sceneGrid');
    const sceneDetailsSection = document.getElementById('sceneDetailsSection');

    sceneGrid.innerHTML = scenes.map(scene => `
        <div class="scene-card" data-id="${scene.id}"> 
            <img src="/Images/Algodoo/Scenes/${scene.id}_.png" alt="${scene.title}">
            <p><b>${scene.title}</b></p>
        </div>
    `).join('');

    sceneDetailsSection.innerHTML = scenes.map(scene => `
        <div class="scene-details hidden" id="${scene.id}">
            <div>
                <img src="/Images/Algodoo/Scenes/${scene.id}_.png" alt="${scene.title}" width="300">
                <section class="sample">
                    <h6>${scene.title}</h6>
                </section>
                <section>
                    ${scene.desc}
                </section>
            </div>
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