import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import '../../styles/Slider.css';

type SlidePropsType = {
    text: string;
    userName: string;
};
const Slide: React.FC<SlidePropsType> = (props) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    );
};

const items = [
    <Slide
        text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }
        userName={'ivan ivanow'}
    />,
    <Slide
        text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque accusantium ea necessitatibus in a, ipsam corrupti animi et, nihil minima.'
        }
        userName={'petr petrow'}
    />,
    <Slide
        text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reiciendis repellendus deserunt placeat cupiditate quod sunt distinctio consectetur voluptatum nihil dolore aspernatur aliquid!'
        }
        userName={'sergey sergeyew'}
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel mouseTracking items={items} />
    </S.Slider>
);
