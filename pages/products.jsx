import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import ContentIcon from '../components/content-icon/content-icon.component'
import styles from './shop.module.scss'
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import FilterDirectory from '../components/filter-directory/filter-directory.component'
import axios from "axios";

const API_URL = "http://188.40.15.25";


const ShopPage = () => {
    const [collections, setCollections] = useState([])
    const [categories, setCategories] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isBoxVisible, setBoxVisible] = useState(true)
    const fetchCollections = (pageNumber) => (
        axios({
            method: 'get',
            url: `${API_URL}/products?skip=${pageNumber}&limit=10`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data;
                setCollections(collections => [...collections, ...data])
                setLoading(true)
            })
    )
    const fetchCategories = () => (
        axios({
            method: 'get',
            url: `${API_URL}/categories`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data;
                setCategories([data])
            })
    )
    useEffect(() => {

        fetchCategories();
    }, [])
    useEffect(() => {
        fetchCollections(pageNumber);

    }, [pageNumber])

    const loadMore = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
    const pageEnd = useRef();
    let num = 1;

    useEffect(() => {
        if (loading) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    num++;
                    loadMore();
                    if (num >= 5) {
                        observer.unobserve(pageEnd.current)
                        setBoxVisible(false)
                    }
                }
            }, { threshold: 1 });
            observer.observe(pageEnd.current)
        }
    }, [loading, num])
    return (
        <div>
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
                            <h5 className="col-md-5">محصولات شهر گلس (نمایش {collections.length} محصول)</h5>
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
<FilterDirectory categories={categories}/>
                                {/* {
                                    categories.map((category, index) => (
                                        category.data.map((cat, index) => (
                                            <ul key={index} className="list-group border-less mb-3">
                                                <h4 className="mb-2">{cat.parent.category}:</h4>
                                                {cat.subcategories.map((sub, i) => (
                                                    <li key={i} className="list-group-item px-0"><a className="text-secondary text-decoration-none" href="">{sub.category}</a></li>
                                                ))
                                                }
                                            </ul>
                                        ))
                                    ))
                                }  */}
                                                            
                              
                            </div>
                            {/* PRODUCT LIST */}
                            <div className="col-md-9">
                                <div className="row">
                                    {
                                        <CollectionPreview collections={collections} />
                                    }
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img className={`${isBoxVisible ? "" : "visibilityHide"}`} width="200" src="/image/ShahrGlassLoading.gif" alt="" />
                                </div>
                                <h3 ref={pageEnd}>{collections.length}</h3>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default ShopPage;
