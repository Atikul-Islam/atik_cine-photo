import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../../../assets/images/galary/galary1.webp'
import img2 from '../../../assets/images/galary/galary2.jpg'
import img3 from '../../../assets/images/galary/galary3.jpg'
import img4 from '../../../assets/images/galary/galary4.jpg'
import img5 from '../../../assets/images/galary/galary5.jpg'
import img6 from '../../../assets/images/galary/galary6.jpg'

const Galary = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-20">Galary</h1>
        <PhotoProvider>
        <div className="container grid grid-cols-3 gap-2 mx-auto mb-20 foo">
    <div className="w-full rounded">
         <PhotoView src={img1}>
        <img src={img1} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
    <div className="w-full rounded">
         <PhotoView src={img6}>
        <img src={img6} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
    <div className="w-full rounded">
         <PhotoView src={img2}>
        <img src={img2} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
    <div className="w-full rounded">
         <PhotoView src={img3}>
        <img src={img3} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
    <div className="w-full rounded">
         <PhotoView src={img5}>
        <img src={img5} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
    <div className="w-full rounded">
         <PhotoView src={img4}>
        <img src={img4} style={{objectFit:'cover'}} alt="" />
         </PhotoView>
    </div>
</div>
        </PhotoProvider>

        </div>

    );
};

export default Galary;