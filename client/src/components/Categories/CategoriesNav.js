import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { ImCogs } from 'react-icons/im'
import { GiMaterialsScience, GiSoapExperiment, GiPaintBrush } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { FcBiomass } from 'react-icons/fc'
import { CgMathPercent } from 'react-icons/cg'

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1 style={{textAlign: "center", color: '#FFFFFF'}}>SECTIONS</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/properties">
                <Button variant="dark" id="properties"><CgMathPercent/>Math</Button>{' '}
            </Link>
            <Link to="/categories/auto">
                <Button variant="dark" id="auto"><GiMaterialsScience />Physics</Button>{' '}
            </Link>
            <Link to="/categories/home">
                <Button variant="dark" id="home"><GiSoapExperiment />Chemistry</Button>{' '}
            </Link>
            <Link to="/categories/electronics">
                <Button variant="dark" id="electronics"><FcBiomass/>Biology</Button>{' '}
            </Link>
            <Link to="/categories/clothes">
                <Button variant="dark" id="clothes"><ImCogs />Engineering</Button>{' '}
            </Link>
            <Link to="/categories/new">
                <Button variant="dark" id="new"><GiPaintBrush />Arts</Button>{' '}
            </Link>
           
        </div>
    )
}

export default CategoriesNav;