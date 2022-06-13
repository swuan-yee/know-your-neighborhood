import React, { Component } from 'react';
import  {viewStore}  from '../../service/StoreService';
import './store.css';

class Store extends Component {
    constructor(props) {
        super(props)

        this.state = {
             key: this.props.match.params.key,
             stores: []
        }
    }

    componentDidMount(){
        viewStore()
        .then((response) => {
            console.log(response)

            this.setState({
                stores: response
           })
        })
    }
    render() {
        return (
            <div className="home-container">
                <div className ="">
                    <h1 className="home-title ">Stores in your Neighbourhood</h1>
                </div>

                <div className="store-container">
                    <table>
                        <tr>
                            <th>Store Name</th>
                            <th>Store Contact</th>
                            <th>Store Location</th>
                            <th>Store Description</th>
                        </tr>
                    {
                        this.state.stores.map(store =>
                        <tr>
                            <td>{store.storeName}</td>
                            <td>{store.storeContact}</td>
                            <td>{store.storeLocation}</td>
                            <td>{store.storeDesc}</td>
                        </tr>
                        )
                    }
                    </table>
                </div>
            </div>
        )
    }
}

export default Store;