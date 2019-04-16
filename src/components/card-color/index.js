import React from 'react';
import Title from '../title';
import ColorBox from '../color-box';
import Rate from '../rate';
import Count from '../count';
import ButtonIcon from '../button-icon'
import './../../index.css'

const cardColorStyle = {
    margin: '10px',
    border: '1px solid #bbb',
    display: 'inline-block',
    backgroundColor: '#eee'
}
const colorBox = {
    width: '70px',
    height:'120px',
    position: 'absolute'
}
const colorDetail = {
    display: 'inline-block',
    width: '150px',
    position: 'absolute',
    heigt: '120px',
    marginLeft: '-40px'
}
class CardColor extends React.Component {
    render() {
        const _title = this.props.title;
        const _value = this.props.colorValue;
        const _rate = this.props.rate;
        return (
            <div style={{ width:this.props.width, height:this.props.height, ...cardColorStyle}}> 
                <div style={colorBox}><ColorBox color={_value}></ColorBox></div>
                <div style={colorDetail}><Title text={_title}></Title>
                {/* <ButtonIcon icon="*"></ButtonIcon> */}
                <Rate value={_rate} ></Rate></div>
                
            </div>
        )
    }
}
export default CardColor;