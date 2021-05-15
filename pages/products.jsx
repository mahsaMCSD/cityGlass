import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import ContentIcon from '../components/content-icon/content-icon.component'
import styles from './shop.module.scss'
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import FilterDirectory from '../components/filter-directory/filter-directory.component'
import axios from "axios";
import API_URL from '../configurations/environment';

const ShopPage = () => {
    const [collections, setCollections] = useState([])
    const [categories, setCategories] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [allCollectionSLength, setAllCollectionSLength] = useState(1)
    const [selectedCat, setSelectedCat] = useState("نانو")
    const [selectedBrand, setSelectedBrand] = useState("اپل")
    const [selectedDevice, setSelectedDevice] = useState("")
    const [loading, setLoading] = useState(false)
    const [isBoxVisible, setBoxVisible] = useState(true)
    const fetchCollections = (pageNumber) => (
        axios({
            method: 'get',
            url: `${API_URL}/products?query=brand:"${selectedBrand}"&skip=${pageNumber}&limit=10`,            
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data;
                setAllCollectionSLength(data.length)
                setCollections(collections => [...collections, ...data])
                console.log('collectionbefore', allCollectionSLength)
                setLoading(true)
            })
    )
    useEffect(() => {
        console.log('fetch')
        fetchCategories();
    }, []);
    const fetchCategories = () => {
        axios({
            method: 'get',
            url: `${API_URL}/categories?parent=root`,
            responseType: 'stream'
        })
            .then((response) => {
                const data = response.data.data[0].subcategories;
                setCategories(data)

            })
    }
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
  const handleSelectedBrand=(event)=>(
      
        console.log('event',event.target.value)
        // setSelectedBrand(brand)
    )
    return (
        <div>
            <div>
                <Head>
                    <title>فروشگاه شهر گلس</title>
                </Head>
                <main>
                    <div className="container-fluid p-0">
                        <img className="img-fluid" height="400" src="/image/banner.svg" alt="" />
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
                                <FilterDirectory categories={categories} brand={selectedBrand} handleSelectedBrand={handleSelectedBrand}/>

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




// class ShopPage extends React.Component {

//     constructor() {
//         super();
//         this.pageEnd = React.createRef();


//         this.state = {
//             collections: [],
//             categories: [],
//             pageNumber: 1,
//             loading: false,
//             isBoxVisible: true,
//             selectedCat: "",
//             IsFilterBoxVisible: false,

//         }
//     }
//     // componentDidUpdate() {
//     //     this.fetchCollections(this.state.pageNumber)
//     // }
//     componentDidMount() {
//         this.fetchCollections(this.state.pageNumber)
//     }

//     componentDidUpdate(loading) {
//         let num = 1;
//         if (loading) {
//             const observer = new IntersectionObserver(entries => {
//                 if (entries[0].isIntersecting) {
//                     num++;
//                     this.loadMore();
//                     if (num >= 5) {
//                         observer.unobserve(this.pageEnd.current)
//                     }
//                 }
//             }, { threshold: 1 });
//             observer.observe(this.pageEnd.current)
//         }
//     }

//     fetchCollections = (pageNumber) => {
//         axios({
//             method: 'get',
//             url: `${API_URL}/products?skip=${pageNumber}&limit=10`,
//             responseType: 'stream'
//         })
//             .then((response) => {
//                 const data = response.data.data;

//                 // const filtered =
//                 //     this.state.selectedCat && this.state.selectedCat.parent_id
//                 //         ? data.filter(m => m.subcategories.parent_id === selectedCat.parent_id)
//                 //         : data;
//                 this.setState({ collections: data})
//                 this.setState({ loading: true })
//             })
//     }
//     fetchCategories = () => {
//         axios({
//             method: 'get',
//             url: `${API_URL}/categories?parent=root`,
//             responseType: 'stream'
//         })
//             .then((response) => {
//                 const data = response.data.data[0].subcategories;
//                 this.setState({ categories: data })
//             })
//     }

//     loadMore = () => {
//         this.setState((prevState) => ({
//             pageNumber: prevState.pageNumber + 1
//         }))

//     }
//     render() {
//         return (
//             <div>
//                 <Head>
//                     <title>فروشگاه شهر گلس</title>
//                 </Head>
//                 <main>
//                     <div className="container-fluid p-0">
//                         <img className="img-fluid" height="200" src="/image/banner.svg" alt="" />
//                     </div>
//                     <div className="container">
//                         {/* SECURITY CUSTOMER */}
//                         <div className={`${styles.security_customer} my-5`}>
//                             <ContentIcon />
//                         </div>
//                         {/* PRODUCT LIST */}
//                         <div className="content-box d-flex p-5 px-0 col-md-6 loadingObserve">
//                             <h5 className="col-md-5">محصولات شهر گلس (نمایش {this.state.collections.length} محصول)</h5>
//                             <select className="form-select" aria-label="Default select example">
//                                 <option defaultValue>دسته بندی بر اساس</option>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                             </select>
//                         </div>
//                         <div className="row">
//                             {/* FILTER */}
//                             <div className="col-md-3">
//                                 <div className="border-devider-horizental mb-3">
//                                     <h3 className="">گروه بندی محصولات</h3>
//                                 </div>
//                                 <FilterDirectory categories={this.state.categories} />
//                             </div>
//                             {/* PRODUCT LIST */}
//                             <div className="col-md-9">
//                                 <div className="row">
//                                     {
//                                         <CollectionPreview collections={this.state.collections} />
//                                     }
//                                 </div>

//                                 <div className="d-flex justify-content-center">
//                                     <img className={`${this.state.isBoxVisible ? "" : "visibilityHide"}`} width="200" src="/image/ShahrGlassLoading.gif" alt="" />
//                                 </div>
//                                 <h3 ref={this.pageEnd}>{this.state.collections.length}</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         )
//     }
// }


// export default ShopPage;
