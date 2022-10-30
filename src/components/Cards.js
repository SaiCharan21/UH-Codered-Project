import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
    return (
        <div className='cards'>
            <h1>Check out these FEATURED Products!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        {props.data.map((product) => {
                            return <CardItem
                                src='images/img-3.jpg'
                                text={product.title}
                                text2={product.username}
                                label='Featured'
                                // path='/services'
                            />
                        })}
                        {/*<CardItem*/}
                        {/*    src='images/img-3.jpg'*/}
                        {/*    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'*/}
                        {/*    label='Mystery'*/}
                        {/*    path='/services'*/}
                        {/*/>*/}
                        {/*<CardItem*/}
                        {/*    src='images/img-4.jpg'*/}
                        {/*    text='Experience Football on Top of the Himilayan Mountains'*/}
                        {/*    label='Adventure'*/}
                        {/*    path='/products'*/}
                        {/*/>*/}
                        {/*<CardItem*/}
                        {/*    src='images/img-8.jpg'*/}
                        {/*    text='Ride through the Sahara Desert on a guided camel tour'*/}
                        {/*    label='Adrenaline'*/}
                        {/*    path='/sign-up'*/}
                        {/*/>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;