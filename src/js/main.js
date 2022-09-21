// eslint-disable-next-line import/extensions
import {app} from './_Card.js'

document.addEventListener('DOMContentLoaded', () => {

  const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

  const cards = app('#cards-app', arr)
  cards.shuffle()
  cards.create()








})
