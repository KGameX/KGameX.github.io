document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    header.innerHTML = `
        <div class="navbar" id="navbar">
            <a href="/"><img src="/Images/KGameX.svg" id="logo"></a>
            <nav>
                <ul>
                    <li><a href="/Algodoo">Algodoo</a></li>
                    <li><a href="#">Outils</a></li>
                    <li><a href="/Projects">Projets</a></li>
                    <li><a href="#">Mini-Jeux</a></li>
                </ul>
            </nav>
        </div>
    `;
    footer.innerHTML = `
        <div>
            <p>2025 KGΛMΞX - Live it, for Real.</p>
        </div>

        <div>
            <ul>
                <li><a href="https://github.com/KGameX/KGameX.github.io" target="_blank"><img src="/Images/Icons/Github.svg" height="30" id="icon"></a></li>
                <li><a href="https://youtube.com/@kgamex_vk" target="_blank"><img src="/Images/Icons/Youtube.svg" height="30" id="icon"></a></li>
                <li><a href="https://facebook.com/KGameX.VK" target="_blank"><img src="/Images/Icons/Facebook.svg" height="30" id="icon"></a></li>
                <li><a href="https://instagram.com/KGameX.VK" target="_blank"><img src="/Images/Icons/Instagram.svg" height="30" id="icon"></a></li>
                <li><a href="https://x.com/KGameX_VK" target="_blank"><img src="/Images/Icons/X.svg" height="30" id="icon"></a></li>
                <li><a href="https://discordapp.com/users/878579349471760406" target="_blank"><img src="/Images/Icons/Discord.svg" height="30" id="icon"></a></li>
            </ul>
        </div>
    `;
});