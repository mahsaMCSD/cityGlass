import React from 'react'


const BlogItem = ({ imageUrl,title,description}) => (
    <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center p-5">
              <div className="card-image">
                <img className="mx-auto mb-4" width="30" src={imageUrl} alt=""/>
              </div>
              <div className="card-body">
                <h4 className="m-3">{title}</h4>
                <p className="card-text">{description}</p>
              </div>
            </div>

          </div>
        </div>      
);

export default BlogItem;