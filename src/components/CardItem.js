import React from 'react';
import {Link} from 'react-router-dom';
import './ctitems.css';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Product Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h1 id="title" className='cards__item__text1'>{props.text}</h1>
                        <p id="seller" className='cards__item__text2'>Seller: {props.text2}</p>
                        <p id="price" className='cards__item__text3'>Price: ${props.text3}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
