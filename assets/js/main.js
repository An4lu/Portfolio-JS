const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.scrollreavel-animation', { delay: 50 });


fetch('https://api.github.com/users/An4lu')
    .then(response => response.json())
    .then(response => {
        const data = response
        
        const elementName = document.querySelector('.nome')
        const elementBio = document.querySelector('.bio')
        const elementlocal = document.querySelector('.local')
        const elementwork = document.querySelector('.work')
        const elementgit = document.querySelector('.git')
        const elementimg = document.querySelector('.img')
        //const elementemail = document.querySelector('.email') O EMAIL ESTA NULO

        elementName.innerHTML = data.name
        elementBio.innerHTML = data.bio
        elementlocal.innerHTML = data.location
        elementwork.innerHTML = data.company
        elementgit.innerHTML = data.login
        elementimg.innerHTML = data.avatar_url
        //elementemail.innerHTML = data.email
    })


    fetch('https://api.github.com/users/An4lu/repos')
    .then(response => response.json())
    .then(response => {
      const data = response
  
      const elementContainer = document.querySelector('.projetos__container')
      const repositorio = `<a href="#">
      <div>
        <h3>
          <img src="assets/svg/icons/folder.svg" alt="Pasta" />
          <strong class="nomeProjeto"></strong>
        </h3>
  
        <p class="descricao"></p>
  
        <div class="infos">
          <div class="info">
            <div>
              <img src="assets/svg/icons/star.svg" alt="Estrelas" />
              <span class="estrelas"></span>
            </div>
  
            <div>
              <img
                src="assets/svg/icons/git-branch.svg"
                alt="Git Branch"
              />
              <span class="forks"></span>
            </div>
          </div>
  
          <div class="linguagem">
            <span class="dot javascript"></span>
            <span class="linguagem"></span>
          </div>
        </div>
      </div>
    </a>`
  
      for (let i = 0; i < data.length - 1; i++) {
        elementContainer.innerHTML += repositorio
      }
  
      const elementNomeProjeto = document.getElementsByClassName('nomeProjeto')
      const elementDescricao = document.getElementsByClassName('descricao')
      const elementEstrelas = document.getElementsByClassName('estrelas')
      const elementForks = document.getElementsByClassName('forks')
      const elementLinguagem = document.getElementsByClassName('linguagem')
  
      for (let i = 0; i < elementNomeProjeto.length; i++) {
        elementNomeProjeto[i].innerHTML = data[i].name
        elementDescricao[i].innerHTML = data[i].description
        elementEstrelas[i].innerHTML = data[i].stargazers_count
        elementForks[i].innerHTML = data[i].forks
        elementLinguagem[i].innerHTML = data[i].language
      }
    })
