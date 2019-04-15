import React from 'react';
import StarsList from '../stars-list/stars-list';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Color = ({ color, onRateChange, onRemoveColor}) => {

    const {id: colorId, text, colorValue, rate} = color;

    return(
        <Card className="color-box">
            <CardContent>
                <p className="color-value" style={ {backgroundColor: colorValue}}></p>
                {/* <p style={{color: colorValue}}>{colorValue}</p> */}
            </CardContent>
            <CardContent>
                <div>
                    <h2 className="color-text">{text || 'Untitled'}</h2>
                </div>
                <StarsList rateValue={rate} onRateChange={onRateChange}/>
            </CardContent>
            <IconButton className="box-close" color="default" aria-label="Add an alarm" onClick={() => onRemoveColor(colorId)}>
                <Icon>close</Icon>
            </IconButton>   
        </Card>
    );
}
 

export default Color;