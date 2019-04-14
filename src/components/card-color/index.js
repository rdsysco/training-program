import React from 'react';
import Title from '../title';
import ColorBox from '../color-box';
import Rate from '../rate';
import Count from '../count';
import ButtonIcon from '../button-icon'

const cardColorStyle = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #bbb'

}
class CardColor extends React.Component {
    render() {
        return (
            <div style={{ width:this.props.width, height:this.props.height, ...cardColorStyle}}> 
                <Title text="color-name"></Title>
                <ButtonIcon icon="*"></ButtonIcon>
                <ColorBox color="red"></ColorBox>
                <Rate></Rate>
                <Count></Count>
            </div>
        )
    }
}
export default CardColor;