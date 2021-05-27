window.addEventListener('load', () => {
    const text = document.querySelector('#contact-text');

    if (text) {
        let getParams = window.location.search;
        getParams = getParams.split('=')[1];
		getParams = getParams.replaceAll('%20', ' ');
		getParams = getParams.replaceAll('%C2', ' ');
		getParams = getParams.replaceAll('%BF', '¿');
		getParams = getParams.replaceAll('%A1', '¡');
        
        text.innerText = getParams;
    }
});

function textHandler(obj) {
    function formatString(str) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
    };
    let str = document.querySelector(`.${obj}`).value;
    str = formatString(str);
    window.location.href = `contacto.html?mensaje=${str}`;
}
