const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                <img  src="${user.avatarUrl}" alt="Foto do Perfil do Usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não Possui Nome Cadastrado 😭'}</h1>
                                    <p>${user.bio ?? 'Não Possui BIO Cadastrado 😭'}</p>
                                    <div class="fallowing">
                                        <div class="content-fallowing">
                                            <h2>👽Seguidores ${user.fallowers}</h2>
                                        </div>
                                        <div class="content-fallowing">
                                            <h2>🎯Seguindo ${user.fallowing}</h2>
                                        </div>
                                    </div>
                            </div>
                        </div>
            `

        let repositoriesItens = ''

        user.repositories.forEach(repo => repositoriesItens += `
        <li><a href="${repo.html_url}" target="_blank">${repo.name} 
            <div class="content-repositories">
                <div>🏋️${repo.forks}</div>
                <div>🌟${repo.stargazers_count}</div>
                <div>👀${repo.watchers}</div>
                <div>💻${repo.language}</div>  
            </div>
        </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>
                                            ${repositoriesItens}
                                            </ul>
                                         </div>`
        }

        let eventsList = ''
        user.events.forEach(events => {
            if (events.type === 'PushEvent' || events.type === 'CreatedEvent') {
                events.payload.commits.forEach((msg) => {
                    eventsList += `<li><h3>${events.repo.name}</h3> - ${msg.message}</li>`
                }
                )
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="activities">
                                            <h2>Eventos</h2>
                                                <ul>
                                                    <li>${eventsList}</li>
                                                </ul>
                                            </div>`
                                            
        } if (user.events.length === 0) {
            this.userProfile.innerHTML += `<div class="activities">
            <h2>Eventos</h2>
                <ul>
                    <li>Este usuário não possui eventos recentes</li>
                </ul>
            </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário Não Encontrado</h3>`
    }
}

export { screen }