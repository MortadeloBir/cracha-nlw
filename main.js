const LinksSocialMedia = {
  github: 'mortadelobir',
  youtube: 'UCC3DZlJS0BLQmH_4-BGka7A',
  facebook: 'vii.trindade01',
  instagram: '_privv.mortadelo',
  twitter: 'mortadelobir'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// ARROW FUNCTION
argumento => {}
