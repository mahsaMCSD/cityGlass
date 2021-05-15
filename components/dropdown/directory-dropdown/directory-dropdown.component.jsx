import React from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
import styles from '../directory-dropdown/directory-dropdown.module.scss'
import axios from "axios";
import API_URL from '../../../configurations/environment';

class DirectoryDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            catFilterkeybaseds: [],
            catSubFilterkeybaseds: [],
            catSelectedfk: "",
            catSelectedSfk: "",
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.catSelectedfk !== this.state.catSelectedfk) {
            this.fetchCategoriesWithFilterkey(this.state.catSelectedfk)
        }
        if (prevState.catSelectedSfk !== this.state.catSelectedSfk) {
            this.fetchCategoriesSubWithFilterkey(this.state.catSelectedSfk)
        }
    }
    componentDidMount() {
        this.fetchCategories()
    }
    fetchCategories = () => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?parent=root`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data[0].subcategories;
                this.setState({ categories: data })
            })
    }
    fetchCategoriesWithFilterkey = (catSelectedfk) => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?filter_key=${catSelectedfk}`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data[0].subcategories;
                let catFilterkeybaseds = [...this.state.catFilterkeybaseds];
                catFilterkeybaseds[catSelectedfk] = data
                this.setState({ catFilterkeybaseds: catFilterkeybaseds })
            })
    }
    fetchCategoriesSubWithFilterkey = (catSelectedSfk) => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?filter_key=${catSelectedSfk}`,
            responseType: 'stream'
        })
            .then((response) => {
                if (response.data.data.length !== 0) {
                    const data = response.data.data[0].subcategories;
                    let catSubFilterkeybaseds = [...this.state.catSubFilterkeybaseds];
                    catSubFilterkeybaseds[catSelectedSfk] = data
                    this.setState({ catSubFilterkeybaseds: catSubFilterkeybaseds })
                }
            })
    }
    handleRootSelect = (catSelectedrootfk) => {
        this.setState({ catSelectedfk: catSelectedrootfk })
    }
    handleSubSelect = (catSelectedSubfk) => {
        this.setState({ catSelectedSfk: catSelectedSubfk })
        console.log('catSelectedSubfk',catSelectedSubfk)
        console.log('catSelectedSfk',this.state.catSelectedSfk)
    }
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={`${styles.menuWidth} btn btn-dark nav-link w-100 rounded-0`}>
                    <img src="/image/justify.svg" alt="" /> دسته بندی
            </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    {
                        this.state.categories.map((cat, idx) => (
                            <DropdownButton
                                className={`${styles.menuWidth} btn bg-light w-100 rounded-0 customized-drp-btn`}
                                key={idx}
                                size="lg"
                                drop="left"
                                title={cat.category}
                                onClick={() => this.handleRootSelect(cat.filter_key)}
                            >
                                {
                                    this.state.catFilterkeybaseds[cat.filter_key] && this.state.catFilterkeybaseds[cat.filter_key].map((catFilterkeybased, index) => {
                                        return <Dropdown key={index}>
                                            <DropdownButton
                                                className={`${styles.menuWidth} btn bg-light text-secondary customized-drp-btn w-100 rounded-0`}
                                                size="lg"
                                                key="left"
                                                drop="left"
                                                title={catFilterkeybased.category}
                                                onClick={() => this.handleSubSelect(catFilterkeybased.filter_key)}
                                            >
                                                {
                                                    this.state.catSubFilterkeybaseds[catFilterkeybased.filter_key] && this.state.catSubFilterkeybaseds[catFilterkeybased.filter_key].map((catSubFilterkeybased, i) => {
                                                        return <Dropdown.Item eventKey="4" key={i}>{catSubFilterkeybased.category}</Dropdown.Item>
                                                    })
                                                }
                                            </DropdownButton>
                                        </Dropdown>
                                    })
                                }
                            </DropdownButton>
                        ))
                    }

                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DirectoryDropdown;