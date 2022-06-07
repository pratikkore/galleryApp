import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from './Img/img1.jpg';
import Img2 from './Img/img2.jpg';
import Img3 from './Img/img3.jpg';
import Img4 from './Img/img4.jpg';
import Img5 from './Img/img5.jpg';
import Img6 from './Img/img6.jpg';


const Gallery = () => {


    let data = [
        {
            id: 1,
            imgSrc: Img1,
            imgBy: "Pratik"
        },
        {
            id: 2,
            imgSrc: Img2,
            imgBy: "Pratik"
        },
        {
            id: 3,
            imgSrc: Img3,
            imgBy: "Pratik"
        },
        {
            id: 4,
            imgSrc: Img4,
            imgBy: "Pratik"
        },
        {
            id: 5,
            imgSrc: Img5,
            imgBy: "Pratik"
        },
        {
            id: 6,
            imgSrc: Img6,
            imgBy: "Pratik"
        },

    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);



    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="error" />
                <CloseIcon onClick={() => setModel(false)} />


            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="error" style={{ width: '100%', height: "calc(100% - 35px)" }} />
                            <div style={{ textAlign: 'center' }}>
                                Image by: {item.imgBy}
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default Gallery;