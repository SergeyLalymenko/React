import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom'
import { fetchAlbums, fetchUserAlbums } from '../../store/actions/albums'
import './AlbumList.css'

function AlbumsList({list, fetchAlbums, fetchUserAlbums}) {

    const {url} = useRouteMatch();
    const userId = new URLSearchParams(useLocation().search).get('userId');

    useEffect(() => {
        userId ? fetchUserAlbums(userId) : fetchAlbums();
    }, [userId])

    return (
        <ul className="albums-list-ul">
            {list.map(({id, title}) => {
                return <li key={id} className="albums-list-li"><NavLink to={`${url}/${id}`}>{title}</NavLink></li>
            })}
        </ul>
    )
}

const mapStateToProps = ({albums: {list}}) => ({list})

const mapDispatchToProps = {
    fetchAlbums,
    fetchUserAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList)
