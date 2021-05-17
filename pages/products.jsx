import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import ContentIcon from '../components/content-icon/content-icon.component'
import styles from './shop.module.scss'
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import FilterDirectory from '../components/filter-directory/filter-directory.component'
import axios from "axios";
import API_URL from '../configurations/environment';

class ShopPage extends React.Component {

    constructor() {
        super();
        this.pageEnd = React.createRef();

        this.state = {
            collections: [],
            categories: [],
            pageNumber: 1,
            loading: true,
            isBoxVisible: true,
            IsFilterBoxVisible: false,
            selectedBrand: "",
            selectedCategory: "",
            allCollectionSLength: 1
        }
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    componentDidMount() {
        this.fetchCategories();
        this.fetchCollections(this.state.pageNumber, this.state.selectedCategory)
        let num = 1;
        if (this.state.loading) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    num++;
                    this.loadMore();
                    if (num >= 5) {
                        observer.unobserve(this.pageEnd.current)
                        this.setState({ isBoxVisible: false })
                    }
                }
            }, { threshold: 1 });
            observer.observe(this.pageEnd.current)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.pageNumber !== this.state.pageNumber) {
            this.fetchCollections(this.state.pageNumber, this.state.selectedCategory)
        }
         
    }

    fetchCollections = (pageNumber, selectedCategory) => {
        axios({
            method: 'get',
            url: `${API_URL}/products?query=category:"${selectedCategory}"&skip=${pageNumber}&limit=10`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data;
                this.setState({ collections: [...this.state.collections, ...data] })
                this.setState({ loading: true })
                // console.log('loadingi ke fetch ', this.state.loading)
            })
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

    loadMore = () => {
        this.setState((prevState) => ({
            pageNumber: prevState.pageNumber + 1
        }))
    }
    handleChangeCategory = (event) => {
        const data = event.target.innerText
        console.log('event', data)
        this.setState({selectedCategory:data})
        console.log('stateSelectedCat',this.state.selectedCategory)
        this.fetchCollections(this.state.pageNumber, this.state.selectedCategory)

    }
 
    render() {
        return (
            <div>
                <Head>
                    <title>فروشگاه شهر گلس</title>
                </Head>
                <main>
                    <div className="container-fluid p-0">
                        <img className="img-fluid" height="200" src="/image/banner.svg" alt="" />
                    </div>
                    <div className="container">
                        {/* SECURITY CUSTOMER */}
                        <div className={`${styles.security_customer} my-5`}>
                            <ContentIcon />
                        </div>
                        {/* PRODUCT LIST */}
                        <div className="content-box d-flex p-5 px-0 col-md-6 loadingObserve">
                            <h5 className="col-md-5">محصولات شهر گلس (نمایش {this.state.collections.length} محصول)</h5>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue>دسته بندی بر اساس</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="row">
                            {/* FILTER */}
                            <div className="col-md-3">
                                <div className="border-devider-horizental mb-3">
                                    <h3 className="">گروه بندی محصولات</h3>
                                </div>

                                <FilterDirectory categories={this.state.categories} handleChangeCategory={this.handleChangeCategory} />
                            </div>
                            {/* PRODUCT LIST */}
                            <div className="col-md-9">
                                <div className="row">
                                    {
                                        <CollectionPreview collections={this.state.collections} />
                                    }
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img className={`${this.state.isBoxVisible ? "" : "visibilityHide"}`} width="200" src="/image/ShahrGlassLoading.gif" alt="" />
                                </div>
                                <h3 ref={this.pageEnd}>{this.state.collections.length}</h3>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default ShopPage;
