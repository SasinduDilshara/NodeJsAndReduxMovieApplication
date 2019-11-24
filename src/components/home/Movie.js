import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'
export class Movie extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }

    render() {

        return (
            <React.Fragment>
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img className="w-100 mb-2" src={this.props.movie.Poster} alt="Movie Cover" />
                        <h5 className="text-light card-title">
                            {this.props.movie.Title} - {this.props.movie.Year}
                        </h5>

                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state =>
    ({
        loading: state.movies.loading,
        movie: state.movies.movie
    })

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie)
