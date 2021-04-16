import React, {useRef} from 'react';

const Headline = ({
    Text: text
}) => {
    const refMarkee = useRef(null);
    const bodyWidth = document.body.offsetWidth;
    const markeeWidth = refMarkee.current ? refMarkee.current.offsetWidth : 0;

    

    return (
        <aside className='headline'>
            <div className='headline-inner'>
                <div className={`${ markeeWidth > bodyWidth ? 'active' : ''} markee`} ref={refMarkee}>
                    <p>{text}</p>
                </div>
            </div>
        </aside>
    )
}

export default Headline;