import React from 'react';
import "../Components/HerroSection.css"

const Footer= ()=> {
    return (
        <div className="main-footer">
            <div className="container-fluid">
                <div className="row">
                    {/*Colum1 */}
                    <div className="col">
                        <h4>Footer</h4>
                        <ul className="list-unstyled">
                           <li> 555-12345  </li>
                           <li> Russia  </li>
                           <li>  123-456 South Carolina </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
