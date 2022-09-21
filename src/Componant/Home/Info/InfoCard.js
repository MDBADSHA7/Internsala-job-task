import React from 'react';
const InfoCard = ({ img, cardTittle, bgclass, cardInfo }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgclass}`}>
            <figure className='pl-5 pb-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 className="card-title">{cardTittle}</h2>
                <h3 className='cardInfo'>{cardInfo}</h3>
            </div>
        </div>
    );
};

export default InfoCard;