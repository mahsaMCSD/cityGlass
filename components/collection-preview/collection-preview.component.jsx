import React from 'react';
import styles from './collection-preview.module.scss'

const CollectionPreview = (props) => (
  <React.Fragment>
    {
      props.collections.map((collection, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className={styles.hovereffect}>
            <div className={`card ${styles.product_img}`}>
              <img className="img-fluid card-img" src="/image/default-square-img.svg" alt="" />
              <div className="card-img-overlay top-less d-flex flex-column justify-content-center">
                <h3 className="mb-2 fw-normal">{collection.name}</h3>
                <p className="card-text">لورم ایپسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <div className={`${styles.overlay} d-flex w-100 justify-content-space-between align-items-center`}>
              <div className={`btn-group shop-btn d-flex justify-content-space-between w-100 ${styles.shop_btn}`} role="group"
                aria-label="Basic example">
                <button type="button" className="btn btn-dark"><img className="img-fluid"
                  src="/image/heart.svg" alt="" />
                </button>
                <button type="button" className="btn btn-dark">توضیحات و خرید محصول</button>
                <button type="button" className="btn btn-dark"><img className="img-fluid"
                  src="/image/search-wt.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </React.Fragment>
);

export default CollectionPreview;
