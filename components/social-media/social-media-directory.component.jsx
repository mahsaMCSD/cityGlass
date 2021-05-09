import React from 'react'

import MenuItem from '../menu-item/menu-item.component'


class SocialMediaDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 1
                },
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 2
                },
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 3
                },
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 4
                },
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 5
                },
                {
                    imageUrl: '../image/default-square-img.svg',
                    id: 6
                }
            ]
        }
    }

    render() {
        return (
           <React.Fragment>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
           </React.Fragment>
        )
    }
}

export default SocialMediaDirectory;