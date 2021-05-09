import React from 'react'
const SearchInput = () => (
    <form className="d-flex">
        <input className="form-control rounded-0" type="search"
            placeholder="مدل دستگاه یا محافظ صفحه نمایش مد نظرخود را  جست و جو کنید" aria-label="Search" />
        <button className="btn btn-light" type="submit"><img className="w-50" src="/image/search.svg" alt="" /></button>
    </form>
)
export default SearchInput;