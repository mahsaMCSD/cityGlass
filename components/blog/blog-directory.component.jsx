import React from 'react'
import BlogItem from '../blog/blog-item.component'


class BlogDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    imageUrl: '../image/default-small-img.svg',
                    id: 1,
                    title:'step #1',
                    description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'
                },
                {
                    imageUrl: '../image/default-small-img.svg',
                    id: 2,
                    title:'step #2',
                    description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'
                },
                {
                    imageUrl: '../image/default-small-img.svg',
                    id: 3,
                    title:'step #3',
                    description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'
                }
               
            ]
        }
    }

    render() {
        return (
           <React.Fragment>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <BlogItem key={id} {...otherSectionProps} />
                ))}
           </React.Fragment>
        )
    }
}

export default BlogDirectory;