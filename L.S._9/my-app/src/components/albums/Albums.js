import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AlbumsList from './AlbumsList'
import AlbumPhotos from './AlbumPhotos'

function Albums() {

    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path = {`${path}/:id`}>
                <AlbumPhotos/>
            </Route>
            <Route path={path}>
                <AlbumsList/>
            </Route>
        </Switch>
    )
}

export default Albums
