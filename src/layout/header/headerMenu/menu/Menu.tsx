import React from 'react';
import { S } from '../HeaderMenu_Styles';

export const Menu: React.FC<{ items: Array<string> }> = (props: {
    items: Array<string>;
}) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <S.ListItem key={item[index]}>
                    <S.Link href="#">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.ListItem>
            ))}
        </ul>
    );
};
