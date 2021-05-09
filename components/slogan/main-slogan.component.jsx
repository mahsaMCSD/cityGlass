import React from 'react'
import TextLoop from "react-text-loop";
const MainSlogan = () => {

  return (
    // SLOGAN
    <div className="col-md-12 p-5 mx-auto">
      <h3 className="text-center mb-4">.Photo is  <TextLoop className="bg-dark text-white">
        <span>especially</span>
        <span>really</span>
        <span>beautiful</span>
      </TextLoop>{" "}
        beautiful and fully responsive</h3>
      <p className="p-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
      است،
      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
      نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصته
      </p>
      <div className="row">
        <div className="col-md-6">

          <img className="w-100" src="/image/default-img.svg" alt="" />


        </div>
        <div className="col-md-6">

          <img className="w-100" src="/image/default-img.svg" alt="" />


        </div>
      </div>
    </div>
  )


};

export default MainSlogan