import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {selectsFilter} from '../../AC/index'
import {connect} from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {selection} = this.props

        // TODO: сделать чтоб при удалении поста удалялся из селекта
        return (
            <Select options={options} value={selection}
                    onChange={this.handleSelectionChange}
                    multi={true}
            />
        )
    }

    handleSelectionChange = selection => {
        const {selectsFilter} = this.props

        selectsFilter(selection)

        return this.setState({selection})
    }
}

export default connect((selectState) => ({
    selection: selectState.selection
}), {selectsFilter})(SelectFilter)

