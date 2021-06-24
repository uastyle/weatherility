import React from 'react';

const DataSet = ({

	precipitation, 

	humidity, 

	cloudcover, 
	uvindex, 
	uvindextext
}) => {

    if (!humidity || !cloudcover || !precipitation) {
		return null
	}

    return (
        <section className='dataset'>

            <div className='precipitation'>
                <dl>
                    <dt>Деталі</dt>
                    <dd className={`percentage percentage-${humidity}`}><span className="text">Вологість: {humidity}%</span></dd>
                    <dd className={`percentage percentage-${cloudcover}`}><span className="text">Хмарний покрив: {cloudcover}%</span></dd>
                    <dd className={`percentage percentage-${uvindex}`}><span className="text">Максимальний індекс УФ: {uvindex} ({uvindextext})</span></dd>
                    <dd className={`percentage percentage-${Number(precipitation.Value) ? precipitation.Value : '0'}`}><span className="text">Опади: {Number(precipitation.Value) ? precipitation.Value : '0'} мм</span></dd>
                </dl>
            </div>
        
            <figure>
                <ul className="sparklist">
                    <li>
                        {/* <a href="#">:)</a> */}
                        <span className="sparkline">
                        <span className="index"><span className="count" style={{height: 27 + '%'}} >(60,</span> </span>
                        <span className="index"><span className="count" style={{height: 98 + '%'}} >220,</span> </span>
                        <span className="index"><span className="count" style={{height: 56 + '%'}} >140,</span> </span>
                        <span className="index"><span className="count" style={{height: 17 + '%'}} >80,</span> </span>
                        <span className="index"><span className="count" style={{height: 67 + '%'}} >110,</span> </span>
                        <span className="index"><span className="count" style={{height: 100 + '%'}} >90,</span> </span>
                        <span className="index"><span className="count" style={{height: 7 + '%'}} >180,</span> </span>
                        <span className="index"><span className="count" style={{height: 27 + '%'}} >140,</span> </span>
                        <span className="index"><span className="count" style={{height: 40 + '%'}} >120,</span> </span>
                        <span className="index"><span className="count" style={{height: 89 + '%'}} >160,</span> </span>
                        <span className="index"><span className="count" style={{height: 66 + '%'}} >175,</span> </span>
                        <span className="index"><span className="count" style={{height: 21 + '%'}} >225,</span> </span>
                        <span className="index"><span className="count" style={{height: 2 + '%'}} >175,</span> </span>
                        <span className="index"><span className="count" style={{height: 87 + '%'}} >125)</span> </span>
                        </span>
                    </li>
                </ul>
                <figcaption>Hours Of Sun per a Day</figcaption>
            </figure>

        </section>
    )
}

export default DataSet;