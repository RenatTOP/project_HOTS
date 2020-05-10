   document.getElementById('navbar').insertAdjacentHTML("afterbegin", `<a class="navbar-brand" href="/ru/home.html"><img src="/image/home/logo.png" alt="" id="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Игра
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/ru/game/roles.html">Роли</a>
                    <a class="dropdown-item" href="/ru/game/game-modes.html">Режимы</a>
                    <a class="dropdown-item" href="/ru/game/brawl.html">Потасовка</a>
                    <a class="dropdown-item" href="/ru/game/battlefield.html">Поля боя</a>
                    <a class="dropdown-item" href="/ru/game/rating_matches.html">Рейтинговые матчи</a>
                </div>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/ru/heroes/heroes.html">Герои <span class="sr-only">(current)</span></a>
            </li>
        </ul>
    </div>`);


jQuery.ajax({
    url: "/ru/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });