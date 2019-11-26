import React from 'react';

var items = [
    {
        name: 'Preke1',
        price: '10.00'
    }, {
        name: 'Preke2',
        price: '3.00'
    }, {
        name: 'Preke3',
        price: '4.00'
    }, {
        name: 'Preke4',
        price: '6.00'
    }, {
        name: 'Preke5',
        price: '7.00'
    }, {
        name: 'Preke6',
        price: '8.00'
    }
];

function Row1() {
    return (
        <div className="container row">
            {populateRow(items)}
        </div>
    );
}

function populateRow(items) {
    return items.map(item => {
        return (
            <div className="card container col-3" styleName="width: 18rem;" key={item.name}>
                <div className="card-body">
                    <h5 className="card-title">Card for {item.name} which costs {item.price}</h5>
                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>);
            });
        }

        export default Row1;