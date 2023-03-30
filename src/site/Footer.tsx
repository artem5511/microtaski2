import React from 'react';

type FooterPropsType = {
    titleForFooter: string
    num: number
}

export const Footer = (props: FooterPropsType) => {
    return (
        <div>
            {props.titleForFooter};
            {props.num}
        </div>
    );
};

