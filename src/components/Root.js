import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider, connect} from 'react-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        articles: PropTypes.array
    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <App articles={this.props.articles}/>
            </Provider>
        )
    }
}

export default connect((state) => ({
    articles: state.articles
}))(Root)