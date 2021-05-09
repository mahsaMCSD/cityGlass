import React from 'react'
import CarouselProductItem from '../carousel-product-item/carousel-product-item.component'
import { Carousel } from 'react-bootstrap'

class CarouselProductDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 1
                },
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 2
                },
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 3
                },
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 4
                },
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 5
                },
                {
                    imageUrl: '../image/default-rectang-img.svg',
                    id: 6
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>               
                <Carousel className="carousel-product mb-5">                 
                        {this.state.sections.map(({ id, imageUrl }) => (
                            <Carousel.Item key={id}>
                            <div className="row">
                               <div className="col-md-6">
                                 <img className="img-fluid" src={imageUrl} alt="Image"/>
                               </div>
                               <div className="col-md-6">
                                 <img className="img-fluid" src={imageUrl} alt="Image"/>
                               </div>
                             </div>
                             </Carousel.Item>
                        ))}                 
                </Carousel>
            </React.Fragment>
        )
    }
}
export default CarouselProductDirectory;