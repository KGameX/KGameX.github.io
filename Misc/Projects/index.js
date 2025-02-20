document.addEventListener('DOMContentLoaded', function () {
    const projectGrid = document.getElementById('projectGrid');
    const projectDetailsSection = document.getElementById('projectDetailsSection');

    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-id="${project.id}"> 
            <img src="/Images/Projects/${project.id}.svg" alt="${project.name}">
        </div>
    `).join('');

    projectDetailsSection.innerHTML = projects.map(project => `
        <div class="project-details hidden" id="${project.id}">
            <div>
                <img src="/Images/Projects/${project.id}.svg" alt="${project.name}" width="530">
                <section class="sample">
                    <h6>${project.name}</h6>
                </section>
                <section>
                    <p style="text-align: center">${project.desc}</p>
                    <p style="text-align: center"><a href="${project.id}"><span>Voir le projet terminé</span></a></p>
                </section>
            </div>
        </div>
    `).join('');

    $(document).on('click', '.project-card', function() {
        const projectId = $(this).data('id');
        $(`#${projectId}`).removeClass('hidden').addClass('visible');
        $(".opacity-box").removeClass('hidden').addClass('visible');
    });

    $(".opacity-box").click(function() {
        $(this).removeClass("visible").addClass("hidden");
        $(".project-details").removeClass("visible").addClass("hidden");
    });
});