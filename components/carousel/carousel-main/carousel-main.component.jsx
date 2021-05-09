import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselMain = () => (
    //    MAIN SLIDER
    <Carousel>
        <Carousel.Item>
            <div className="row">
                <div className="col-md-6">
                    <div className="content-box p-5">
                        <h1 className="display-6 mb-4 fw-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                        حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                  گیرد.</p>
                        <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                            <button type="button" className="btn btn-outline-secondary w-50 me-5 rounded-0">button</button>
                            <button type="button" className="btn btn-dark w-50 rounded-0">button</button>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img width="200" src="../image/iphone.svg" alt="" />
                </div>


            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="row">
                <div className="col-md-6">
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <img width="200" className="main-carousel_img" src="../image/iphone.svg" alt="" />
                        <img className="position-absolute right-20rem" width="100" src="../image/apple-watch.svg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content-box">
                        <h1 className="display-6 mb-4 fw-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                        حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                  گیرد.</p>
                        <ul className="list-group border-less">
                            <li className="list-group-item d-flex justify-content-start align-items-center px-0 mb-3">
                                <img width="25" className="me-5" src="../image/check-round.svg" alt="" />
                                <span className="text-right">Here goes feature number 1</span>

                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center px-0 mb-3">
                                <img width="25" className="me-5" src="../image/check-round.svg" alt="" />
                                <span className="text-right">Here goes feature number 1</span>

                            </li>
                            <li className="list-group-item d-flex justify-content-start align-items-center px-0">
                                <img width="25" className="me-5" src="../image/check-round.svg" alt="" />
                                <span className="text-right">Here goes feature number 1</span>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </Carousel.Item>
    </Carousel>
)

export default CarouselMain