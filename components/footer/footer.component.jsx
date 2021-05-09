import React from 'react';
import styles from './footer.module.scss'
const Footer = () => (
    <footer>
       {/* FOOTER */}
  <div className="container-fluid p-0">
    {/* TOP FOOTER */}
    <div className={styles.map}>
      <div className="container" style={{height:"inherit"}}>
        <div className="content-box p-5 d-flex align-items-center justify-content-center mx-5" style={{height:"inherit"}}>
          <h4 className="right-10rem me-2 fw-normal">آدرس فروشگاه شهر گلس به وسعت یک شهر </h4>
          <button href="" type="button" className="btn btn-outline-secondary rounded-0">
            مسیریابی
          </button>
        </div>
      </div>


    </div>
    {/* FOOTER */}
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row p-5">
          <div className="col-md-7">
            <h3 className="mb-3 fw-normal">بیا تا باهم در تبادل اطلاعات آخرین اخبار و محصولات باشیم</h3>
            <h5 className="mx-5 fw-normal">اخبار و محصولات جدید شهر گلس مستقیم به ایمیلت ارسال میشه</h5>
            <form className="d-flex p-3 px-0 pb-0">
              <input className="form-control rounded-0 bg-dark text-white w-75" type="text"
                placeholder="ایمیل خود را وارد نمایید" aria-label="NewsLetter"/>
              <button className="btn btn-outline-light btn-lg" type="submit">اشتراک خبرنامه</button>
            </form>
            <h6 className="fw-normal mb-4 mt-2">حریم خصوصی شما همیشه طبق قوانین گوگل حفظ میشود</h6>
            <ul className={`${styles.footer_list} list-group list-group-horizontal border-less ${styles.menu_footer_list}`}>
              <li className="list-group-item p-0 px-2">درباره ما</li>
              <li className="list-group-item p-0 px-2">ارتباط امور مشتریان</li>
              <li className="list-group-item p-0 px-2">ارتباط با واحد فروشگاه</li>
              <li className="list-group-item p-0 px-2">صندوق شکایات و پیشنهادات</li>
              <li className="list-group-item p-0 px-2">فروشگاه شهر گلس</li>
              <li className="list-group-item p-0 px-2">وبلاگ</li>
              <li className="list-group-item p-0 px-2">تماس با ما</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3 className="mb-2 fw-normal">خدمات ما</h3>
            <ul className={`${styles.footer_list} list-group border-less bg-dark footer-list`}>
              <li className="list-group-item px-0">درباره ما</li>
              <li className="list-group-item px-0">ارتباط امور مشتریان</li>
              <li className="list-group-item px-0">ارتباط با واحد فروشگاه</li>
              <li className="list-group-item px-0">صندوق شکایات و پیشنهادات</li>

            </ul>

          </div>
          <div className="col-md-3">
            <h3 className="mb-2 fw-normal">محافظ صفحه نمایش</h3>
            <ul className={`${styles.footer_list} list-group border-less bg-dark footer-list`}>
              <li className="list-group-item px-0">درباره ما</li>
              <li className="list-group-item px-0">ارتباط امور مشتریان</li>
              <li className="list-group-item px-0">ارتباط با واحد فروشگاه</li>
              <li className="list-group-item px-0">صندوق شکایات و پیشنهادات</li>

            </ul>
          </div>
        </div>
        <div className="content-box text-center">
     
          {/* FOOTER SOCIAL MEDIA */}

          <ul className={`${styles.footer_list} list-group list-group-horizontal footer-list border-less justify-content-center`}>
            <li className="list-group-item"><img width="100" src="../image/paypal.svg" alt=""/></li>
            <li className="list-group-item"><img width="100" src="../image/visa.svg" alt=""/></li>
            <li className="list-group-item"><img width="100" src="../image/paypal.svg" alt=""/></li>
            <li className="list-group-item"><img width="100" src="../image/paypal.svg" alt=""/></li>
            <li className="list-group-item"><img width="100" src="../image/paypal.svg" alt=""/></li>
            <li className="list-group-item"><img width="100" src="../image/paypal.svg" alt=""/></li>

          </ul>

        </div>
      </div>

    </div>
  </div>   
    </footer>
);

export default Footer;