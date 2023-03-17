// api : https://deckofcardsapi.com/api/deck/${deck_id}/draw/
import axios from 'axios'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import {v4 as uuidv4} from 'uuid'

const Deck = () => {

  const [deck, setDeck] = useState(null)
  const [cardsDrawn, setCardsDrawn] = useState([])

  useEffect(() => {
    const api = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
    async function fetchDeck() {
      try {
        const config = { headers: { Accept: 'application/json '} }
        const res = await axios.get(api, config)
        console.log('this is res in fetchDeck', res)
        setDeck(res.data.deck_id)
        return res
      } catch (error) {
        console.log('this is error', error)
      }
    }
    fetchDeck()
  }, [])

  console.log('this is deck', deck)

  async function fetchCards() {
    const cardApi = `https://deckofcardsapi.com/api/deck/${deck}/draw/`     
    try {
      const config = { headers: { Accept: 'application/json'} }
      const res = await axios.get(cardApi, config)
      console.log('this is res in fetchCards', res)
      setCardsDrawn([...cardsDrawn, res.data.cards[0]])
      console.log('this is cardsDrawn', cardsDrawn)
      return res
    } catch (error) {
      console.log('this is error', error)
      return 'No cards for you!'
    }
  }

  const cards = cardsDrawn.map(card => (
    <Card key={uuidv4()} name={card.code} img={card.image}/>
  ))
  
  return ( 
    <>
      <h1>Card Dealer</h1>
      <button onClick={fetchCards}>Draw Card</button>
      <div>{cards}</div>
    </>
  );
}

export default Deck;