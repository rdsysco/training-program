import { Children } from 'react';

const findChild = (children, child) =>
    Children.toArray(children)
            .filter(c => c.type === child)[0];

const WhenTruthy = ({children}) =>
    Children.only(children);

const WhenFalsy = ({children}) =>
    Children.only(children);

const Display = ({ ifTruthy=true, children }) =>
    (ifTruthy) ?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy);

export { Display, WhenFalsy, WhenTruthy };