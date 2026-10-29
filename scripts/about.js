// navigate back
document.getElementById('go-to-index').addEventListener('click', () => location.href = 'index.html');


{   // set e-mail contact
    let contactAnchor = document.getElementsByTagName('me');

    const tOpen = '<', tClose = '>', p2 = 'a';
    let part3 = 'mai', part4 = 'l', p5 = 'to';
    let prt6 = Math.pow(2, 6);
    let p7 = 'in', p8 = 'fo', p9 = p7 + p8, part10 = 'meter';
    const final = 'de';

    const contact = tOpen + p2 + ' ' + 'href='
        + '\"' + part3 + part4 + p5 + ':' + p9 + String.fromCharCode(prt6)
        + 'para' + part10 + Math.sqrt(25) + '.' + final + '\"' + tClose + 'Christian'
        + ' Seidel' + tOpen + '/' + p2 + tClose;

    for (const element of contactAnchor) {
        element.innerHTML = contact;
    }

}
