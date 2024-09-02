function findUser() {
    let username = document.getElementById('username').value;
    // Kullanıcıyı bulma işlemi burada yapılacak. Bu basit bir örnek.
    if (username) {
        document.getElementById('elmas-options').classList.remove('hidden');
    } else {
        alert('Lütfen bir kullanıcı adı girin.');
    }
}

function sendDiamonds() {
    let elmas = document.getElementById('elmas').value;
    let waitTime = 0;
    switch(elmas) {
        case '30':
            waitTime = 30;
            break;
        case '80':
            waitTime = 60;
            break;
        case '180':
            waitTime = 90;
            break;
        case '360':
            waitTime = 120;
            break;
        case '950':
            waitTime = 150;
            break;
        case '2000':
            waitTime = 180;
            break;
    }

    let processingMessage = document.createElement('div');
    processingMessage.innerText = `Elmas gönderimi işlemi başlatıldı: ${elmas} elmas. Lütfen bekleyin...`;
    processingMessage.style.fontSize = '1.2em';
    processingMessage.style.color = '#f8c146';
    processingMessage.style.marginTop = '20px';
    document.querySelector('.form-container').appendChild(processingMessage);

    setTimeout(() => {
        alert(`${elmas} elmas başarıyla gönderildi!`);
        processingMessage.remove();
    }, waitTime * 1000);
}
