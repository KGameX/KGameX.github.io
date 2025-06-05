document.addEventListener('DOMContentLoaded', function () {
    const toolGrid = document.getElementById('toolGrid');

    toolGrid.innerHTML = tools.map(tool => `
        <div class="tool-card"> 
            <a href="/Tools/${tool.id}">
                <img src="/Images/Tools/${tool.id}/${tool.id}.svg" alt="${tool.name}">
                <p><b>${tool.name}</b></p>
            </a>
        </div>
    `).join('');
});