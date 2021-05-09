import React from 'react';
import styles from './header.module.scss';
import { Dropdown } from 'react-bootstrap';
import SearchInput from '../search/search.component'
import DirectoryDropdown from '../dropdown/directory-dropdown/directory-dropdown.component'

const dropdownStyle = { right: '100%', minWidth: '50rem !important', transform: 'translateY(-5rem)' }

const Header = () => (
    <div className="container">
        <header className="header my-5">
            <div className="top-header row">
                <div className="col-md-3 logo">
                    <img width="40" src="../image/Group163.jpg" alt="لوگو شهر گلس" />
                </div>
                <div className="col-md-9 d-flex justify-content-end align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle className="btn-light" id="dropdown-profile">
                            <img width="30" src="../image/person.svg" alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={`${styles.headerdbd_profile} ${styles.user_menu} bg-light`}>
                            <Dropdown.Item href="#/action-1" className="border-bottom px-0">
                                <div className={styles.user_menu__user}>
                                    <img width="60" src="../image/circle.svg" alt="" />
                                    <div className="details me-0 w-100">
                                        <div id="profile-name">
                                            <h3>کسرا کیانفر</h3>
                                        </div>
                                        <div id="profile-footer">
                                            <h6> مشاهده حساب کاربری &gt;</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.user_menu__account}>
                                    <div className={styles.user_menu__account__item}>

                                        <span className="mx-2">0912518 50 80</span>

                                    </div>
                                    <div className={styles.user_menu__account__item}>
                                        <span className="mx-2">باشگاه مشتریان شهرگلس</span>

                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className='nav-link border-bottom'>
                                <span className="me-2"><img width="25" src="../image/order.svg" alt="" /></span><span
                                    className="font-title-md">پیگیری سفارش های من</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className='nav-link border-bottom'>
                                <span className="me-2"><img width="25" src="../image/location.svg" alt="" /></span><span
                                    className="font-title-md">آدرس های منتخب</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4" className='nav-link border-bottom'>
                                <span className="me-2"><img width="25" src="../image/email.svg" alt="" /></span><span
                                    className="font-title-md">پیام ها دریافتی</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-5" className='nav-link'>
                                <span className="me-2"><img width="25" src="../image/exit.svg" alt="" /></span><span
                                    className="font-title-md">خروج از حساب کاربری</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="divider"></div>
                    <div className="shopping-cart">
                        <a>
                            <img width="30" src="../image/shopping-cart.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="w-100">
                            <ul className="navbar-nav me-auto col-md-12 d-flex flex-row">
                                <li className="nav-item col-md-2 me-2">
                                    <DirectoryDropdown />
                                </li>
                                <li className="nav-item col-md-2 me-2">

                                    <button type="button" className="btn btn-dark nav-link w-100 rounded-0"><img
                                        src="../image/shopping-cart-wt.svg" width="32" height="19" alt="35" />فروشگاه</button>
                                </li>
                                <li className="nav-item col-md-6 me-2">
                                    <SearchInput />
                                    <ul className="list-group list-group-horizontal border-less">
                                        <li className="list-group-item list-group-item-dark rounded-0">سرویس شهرگلس</li>
                                        <li className="list-group-item list-group-item-dark rounded-0">تخفیفات و پیشنهادات
                    </li>
                                        <li className="list-group-item list-group-item-dark rounded-0">محصولات جدید</li>
                                        <li className="list-group-item list-group-item-dark rounded-0 clip-path-left">سوالی
                      دارید؟</li>
                                    </ul>
                                </li>

                                <li className="nav-item col-md-2">
                                    <button href="" type="button" className="btn btn-outline-secondary w-100 nav-link rounded-0">پنل شعب و
                    همکاران</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>

        </header>
    </div>

);

export default Header;