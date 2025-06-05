document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('textarea');
    const text = document.getElementById('text');
    const lineNumber = document.getElementById('line-number');
    const buttonSave = document.getElementById('button-save');
    
    function updateText() {
        const textContent = textarea.innerText.replaceAll("\n\n", "\n");
        let lines = textContent.split("\n");
        
        let textInnerHTML = "";
        
        for (let i = 0; i < lines.length; i++) {
            textInnerHTML += `<div id="line-${i}">${lines[i]}<br></div>`;
        }
        
        text.innerHTML = textInnerHTML;
        
        let lineNumbers = "";
        for (let i = 0; i < lines.length; i++) {
            let lineHeight = getComputedStyle(document.getElementById(`line-${i}`)).getPropertyValue("height");
            lineNumbers += `<div style="height:${lineHeight}">${i + 1}<br></div>`;
        }
        
        if (lines.length === 2 && lines[0] === "" && lines[1] === "") lineNumbers = "1";
        lineNumber.innerHTML = lineNumbers;
    }

    textarea.addEventListener("input", updateText);
    window.addEventListener("resize", updateText);

    buttonSave.addEventListener("click", function() {
        const textContent = textarea.innerText.replaceAll("\n\n", "\n");
        const blob = new Blob([textContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        filename = document.getElementById('filename').value || 'text.txt';
        if (!filename.endsWith('.txt')) {
            filename += '.txt';
        }
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});