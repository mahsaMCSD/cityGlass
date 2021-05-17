import React from 'react'
import axios from "axios";
import CustomToggle from '../filter-item/filter-item.component'
import { Accordion, Card } from 'react-bootstrap'
import API_URL from '../../configurations/environment';

class FilterDirectory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            catFilterkeybaseds: [],
            catSubFilterkeybaseds: [],
            catSelectedfk: "",
            catSelectedSubfk: "",
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.catSelectedfk !== this.state.catSelectedfk) {
            this.fetchCategoriesWithFilterkey(this.state.catSelectedfk)
        }
        if (prevState.catSelectedSubfk !== this.state.catSelectedSubfk) {
            this.fetchCategoriesSubWithFilterkey(this.state.catSelectedSubfk)
        }
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
    fetchCategoriesSubWithFilterkey = (catSelectedSubfk) => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?filter_key=${catSelectedSubfk}`,
            responseType: 'stream'
        })
            .then((response) => {
                if (response.data.data.length !== 0) {
                    const data = response.data.data[0].subcategories;
                    let catSubFilterkeybaseds = [...this.state.catSubFilterkeybaseds];
                    catSubFilterkeybaseds[catSelectedSubfk] = data
                    this.setState({ catSubFilterkeybaseds: catSubFilterkeybaseds })
                }
            })
    }
    handleRootSelect = (catSelectedrootfk) => {
        this.setState({ catSelectedfk: catSelectedrootfk })
    }

    handleSubSelect = (catSelectedSubfk) => {
        this.setState({ catSelectedSubfk: catSelectedSubfk })
    }

    render() {  
        return (
            <React.Fragment>
                {
                    this.props.categories.map((cat, idx) => (
                            <Accordion key={idx}>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey={cat.filter_key} sendDatatoParent={data => this.setState({ catSelectedfk: data })}>{cat.category}</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={cat.filter_key}>
                                        <Card.Body>
                                            {
                                                this.state.catFilterkeybaseds[cat.filter_key] && this.state.catFilterkeybaseds[cat.filter_key].map((catFilterkeybased, index) => {
                                                    return <Accordion key={index}>
                                                        <Card>
                                                            <Card.Header>
                                                                <CustomToggle eventKey={catFilterkeybased.filter_key} sendDatatoParent={data => this.setState({ catSelectedSubfk: data })}>{catFilterkeybased.category}</CustomToggle>
                                                            </Card.Header>
                                                            <Accordion.Collapse eventKey={catFilterkeybased.filter_key}>
                                                                <Card.Body>
                                                                    <ul>
                                                                        {
                                                                            this.state.catSubFilterkeybaseds[catFilterkeybased.filter_key] && this.state.catSubFilterkeybaseds[catFilterkeybased.filter_key].map((catSubFilterkeybaseds, i) => {
                                                                                return <Card key={i}>
                                                                                    <Card.Header>
                                                                                        <span onClick={this.props.handleChangeCategory}>{catSubFilterkeybaseds.category}</span>
                                                                                    </Card.Header>
                                                                                    

                                                                                </Card>



                                                                            })
                                                                        }
                                                                    </ul>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                })
                                            }

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                    ))
                }
            </React.Fragment>
        )
    }
}

export default FilterDirectory;



