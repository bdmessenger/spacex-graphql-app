import React from 'react'
import rocket from '../../images/rocket.png'
import './index.css'

const Loader = () => (
    <div className="row mt-5">
        <div className="col-10 col-md-8 col-lg-5 mx-auto">
            <img id="rocket" alt="rocket" style={{width: '100%'}} src={rocket}/>
        </div>
        <div className="col-12 text-center">Loading...</div>
    </div>
)

export default Loader

