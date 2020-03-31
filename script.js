const mintIsUsedForList = ['control panels', 'dashboards', 'simple GUIs', 'personal projects', 'experiments']
let mintIsUsedForIndex = 0

function changeMintIsUsedFor () {
  const elem = document.getElementById('mint-is-used-for')
  elem.style.opacity = 0
  setTimeout(() => {
    elem.style.opacity = 1
    elem.textContent = mintIsUsedForList[mintIsUsedForIndex] + ','
    mintIsUsedForIndex++
    mintIsUsedForIndex %= mintIsUsedForList.length
  }, 200)
}

changeMintIsUsedFor()

setInterval(changeMintIsUsedFor, 3000)
