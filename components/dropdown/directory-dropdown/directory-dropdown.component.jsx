import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import styles from '../directory-dropdown/directory-dropdown.module.scss'
import axios from "axios";

const API_URL = "http://188.40.15.25";

class DirectoryDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
       
    }
    componentDidMount() {
        this.getData();
        
    }
    getData = () => {
        axios({
            url: API_URL + "/categories",
        })
            .then((response) => {
                this.setState({ categories: response.data.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Menu className={styles.menuWidth} menuButton={<MenuButton className="btn btn-dark nav-link w-100 rounded-0"><img src="/image/justify.svg" alt="" /> دسته بندی</MenuButton>}>
         {

         }               
            </Menu>
        );
    }
}

export default DirectoryDropdown;