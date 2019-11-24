import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions'

export class SearchForm extends Component {

    onchange = e => {//take value of the input and set to the search movie action
        this.props.searchMovie(e.target.value); //connect connect this prop
    }
    submit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} className="navbar-form" role="search">
                    <div className="input-group add-on">
                        <input className="form-control" onChange={this.onchange} placeholder="Search" name="srch-term" id="srch-term" type="text" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    text: state.movies.text
})
const mapActionToProps = {
    searchMovie: searchMovie,
    fetchMovies: fetchMovies,
    setLoading: setLoading
}

export default connect(mapStatesToProps, mapActionToProps)(SearchForm)