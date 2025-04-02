import { Routes, Route, NavLink} from 'react-router-dom'
import Musical from './Musical'
import Theater from './Theater'
import Exhibit from './Exhibit'

const Tab=()=> {
    return (
        <>
            <section className="tab">
                <h2>HOT! 인기 공연/전시</h2>
                <ul className="tab_btn">
                    <li><NavLink to="/" activeClassName="active-link">뮤지컬</NavLink></li>
                    <li><NavLink to="/Theater" activeClassName="active-link">연극</NavLink></li>
                    <li><NavLink to="/Exhibit" activeClassName="active-link">전시/행사</NavLink></li>
                </ul>

                <div className="tab_list">
                    <Routes>
                        <Route path='/' element={<Musical />}></Route>
                        <Route path='/Theater' element={<Theater />}></Route>
                        <Route path='/Exhibit' element={<Exhibit />}></Route>
                    </Routes>
                </div>
            </section>
        </>
    )
}

export default Tab