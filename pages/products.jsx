import React from 'react'
import Head from 'next/head'
import ContentIcon from '../components/content-icon/content-icon.component'
import styles from './shop.module.scss'
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import FilterDirectory from '../components/filter-directory/filter-directory.component'
import Accordion from 'react-bootstrap/Accordion'
import { Collapse } from 'react-bootstrap'
import axios from "axios";

const API_URL = "http://188.40.15.25";

class ShopPage extends React.Component {

    constructor() {
        super();
        this.pageEnd = React.createRef();

        this.state = {
            collections: [],
            categories: [],
            catFilterkeybaseds: [],
            pageNumber: 1,
            loading: true,
            isBoxVisible: true,
            catSelectedfk: "",
            selectedCat: "iphone",
            IsFilterBoxVisible: false
        }
    }
    componentDidMount() {
        console.log('this.state.pageNumber', this.state.pageNumber)
        this.fetchCollections(this.state.pageNumber, this.state.selectedCat)
        this.fetchCategories()


    }
    componentDidUpdate(prevProps, prevState) {
        

        if (prevState.catSelectedfk !== this.state.catSelectedfk) {
            this.fetchCategoriesWithFilterkey(this.state.catSelectedfk)
        }
    }

    // componentDidUpdate() {
    //     let num = 1;
    //     // this.fetchCollections(this.state.pageNumber,this.state.selectedCat)
    //     this.fetchCategoriesWithFilterkey(this.state.catSelectedfk)
    //     if (this.state.loading) {
    //         const observer = new IntersectionObserver(entries => {
    //             if (entries[0].isIntersecting) {
    //                 num++;
    //                 this.loadMore();
    //                 if (num >= 5) {
    //                     observer.unobserve(this.pageEnd.current)
    //                     this.state.isBoxVisible = false
    //                 }
    //             }
    //         }, { threshold: 1 });
    //         observer.observe(this.pageEnd.current)
    //     }
    // }

    fetchCollections = (Number, selectedCat) => {
        axios({
            method: 'get',
            url: `${API_URL}/products?query=name:${selectedCat}&skip=${Number}&limit=10`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data;

                // const filtered =
                //     this.state.selectedCat && this.state.selectedCat.parent_id
                //         ? data.filter(m => m.subcategories.parent_id === selectedCat.parent_id)
                //         : data;
                this.setState({ collections: data })
                this.setState({ loading: false })
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
    fetchCategoriesWithFilterkey = (catSelectedfk) => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?filter_key=${catSelectedfk}`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data[0].subcategories;
                this.setState({ catFilterkeybaseds: data })
                console.log('catFilterkeybaseds', this.state.catFilterkeybaseds)
            })
    }

    handleCategorySelect = (category) => {
        // this.setState((prevState)=>({prevState.selectedCat:category}))
        this.setState({ selectedCat: category.filter_key });
        console.log('selectedCat', this.state.selectedCat)
    };
    handleRootSelect = (catSelectedrootfk) => {
        this.setState({IsFilterBoxVisible:true})
        this.setState({ catSelectedfk: catSelectedrootfk })
    }
    loadMore = () => {
        this.setState((prevState) => ({

            pageNumber: prevState.pageNumber + 1

        }))

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
                                {/* <FilterDirectory categories={categories}/>                     */}
                                <Accordion>
                                    {
                                        this.state.categories.map((cat, i) => (
                                            <React.Fragment>
                                                <h4 onClick={() => { this.handleRootSelect(cat.filter_key) }}>{cat.category}</h4>
                                                <ul>
                                                        {
                                                            console.log(this.state.catFilterkeybaseds)
                                                            // console.log('catFilterkeybasedsfrom',this.state.catFilterkeybaseds.map((cat)=>(
                                                            //      cat.category
                                                            // )))
                                                            // this.state.catFilterkeybaseds.map((catFilterkeybased,i)=>{
                                                            //     <li key={i}>{catFilterkeybased.category}</li>

                                                            // })
                                                        }
                                                    </ul>
                                                {/* <div className={`${this.state.IsFilterBoxVisible ? "" : "visibilityHide"}`}>
                                                 
                                                </div> */}
                                            </React.Fragment>


                                        ))
                                    }
                                </Accordion>

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
