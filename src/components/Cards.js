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
                                src='images/test34.jpeg'
                                text={product.title}
                                text2={product.username}
                                text3={product.price}

                                label='Featured'
                                path='/product/:id'
                            />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;