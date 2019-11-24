import React, { Component } from 'react'
import SearchForm from './SearchForm.js'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner.js';
import MovieContainer from './MovieContainer'

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Spinner /> : <MovieContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(Landing)