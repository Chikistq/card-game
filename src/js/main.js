// eslint-disable-next-line import/extensions
import {app} from './_Card.js'

document.addEventListener('DOMContentLoaded', () => {


  function getArray(length) {
    return [...Array.from(Array(length+1).keys()).slice(1), ...Array.from(Array(length+1).keys()).slice(1)]
  }

  const arr = getArray(8)


  const cards = app('#cards-app', arr)
  cards.shuffle()
  cards.create()
})
