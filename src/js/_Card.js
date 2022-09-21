// eslint-disable-next-line import/prefer-default-export
export function app(selector, option = {}) {
  const cards = document.querySelector(selector)

  let i = 0

  function reStart(arr) {
    arr.forEach((item) => {
      item.classList.remove('invis')
      item.removeAttribute('data-done')
    })
  }

  function findCard() {
    this.classList.add('card-active')
    this.lastChild.classList.add('card-active')
    this.dataset.open = true
    if (i == 1) {
      const arr = document.querySelectorAll('[data-open="true"]')
      if (arr[i].textContent == arr[i - 1].textContent) {
        setTimeout(() => {
          arr.forEach((item) => {
            item.classList.add('invis')
            item.classList.remove('card-active')
            item.lastChild.classList.remove('card-active')
            item.dataset.open = false
            item.dataset.done = true

            if (document.querySelectorAll('[data-done="true"]').length == 16) {
              const btn = document.createElement('button')
              btn.classList.add('btn', 'btn-primary')
              btn.textContent = 'Сыграть ещё раз'
              cards.append(btn)
              btn.addEventListener('click', () => {
                reStart(document.querySelectorAll('[data-done="true"]'))
                cards.removeChild(btn)
              })

            }
          })
        }, 500)
      } else {
        setTimeout(() => {
          arr.forEach((item) => {
            item.classList.remove('card-active')
            item.lastChild.classList.remove('card-active')
            item.dataset.open = false
          })
        }, 500)
      }
      i = 0
    }
    i++
  }

  function createCard(number) {
    const card = document.createElement('div')
    card.classList.add('my-card', 'btn', 'btn-secondary')

    const cardNumber = document.createElement('p')
    cardNumber.classList.add('my-card__text')
    cardNumber.textContent = number

    card.dataset.open = false
    card.append(cardNumber)
    card.addEventListener('click', findCard)

    return card
  }

  return {
    create() {
      for (const item of option) {
        cards.append(createCard(item))
      }
    },
    shuffle() {
      for (let i = option.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [option[i], option[j]] = [option[j], option[i]];
      }
    },
  }
}



