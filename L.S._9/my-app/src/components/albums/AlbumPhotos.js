import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPhotos } from '../../store/actions/photos'

function AlbumPhotos({list, fetchPhotos}) {

    const {id} = useParams();

    useEffect(() => fetchPhotos(id), [fetchPhotos, id])

    return (
        <ul>
            {list.map(({id, thumbnailUrl}) => {
                return <li key={id}><img src={thumbnailUrl} alt="img"/></li>
            })}
        </ul>
    )
}

const mapStateToProps = ({photos: {list}}) => ({list})

const mapDispatchToProps = {
    fetchPhotos,
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos)
