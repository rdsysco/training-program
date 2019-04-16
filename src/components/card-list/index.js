import React from 'react';
import CardColor from '../card-color'

const CardList = ({cards}) => {
    return cards.map((card, i) => <CardColor  key={i} {...card} width="220px" height="120px" ></CardColor>)
}
export default CardList;