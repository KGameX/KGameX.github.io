async function loadLanguage(lang) {
    const response = await fetch(`/Locales/${lang}.json`);
    const translations = await response.json();
    
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (translations[key]) {
            elem.innerHTML = translations[key];
        }
    });

    setLanguageCookie(lang);
}

function setLanguageCookie(lang) {
    const expiryDays = 30;
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    document.cookie = `lang=${lang}; expires=${date.toUTCString()}; path=/`;
}

function getLanguageCookie() {
    const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
    return match ? match[1] : null;
}

const savedLang = getLanguageCookie() || 'en';
loadLanguage(savedLang);

setTimeout(function(){
    document.getElementById('languageSelector').value = savedLang;

    document.getElementById('languageSelector').addEventListener('change', function() {
        loadLanguage(this.value);
    });
}, 1000);