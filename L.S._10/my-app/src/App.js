import React, { useEffect } from 'react'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStickers, changeStickerLocal, changeSticker, deleteSticker, addSticker, saveSticker } from './store/actions/sticker'
import Sticker from './components/Sticker/Sticker'
import Button from './components/Button/Button'
import StickerForm from './components/StickerForm/StickerForm'


function App({stickers, fetchStickers, changeStickerLocal, changeSticker, deleteSticker, addSticker, saveSticker}) {

  let shiftX;
  let shiftY;
  let selectedSticker;

  useEffect(fetchStickers, []);

  function onSaveBtnClick(values, id){
    id ? changeSticker(values, id, stickers) : addSticker(values);
  }

  function onStickerDown(e){
    if(e.target.classList.contains('move-element')){
      selectedSticker = stickers.find((item) => item.id === e.target.parentElement.nextElementSibling.children[0].id);
      shiftX = e.pageX - selectedSticker.x;
      shiftY = e.pageY - selectedSticker.y;
      document.addEventListener('mousemove', onStickerMove);
      document.addEventListener('mouseup', onStickerUp);
    }
  }

  function onStickerMove(e){
    changeStickerLocal(e, selectedSticker, shiftX, shiftY);
  }

  function onStickerUp(){
    document.removeEventListener('mousemove', onStickerMove);
    document.removeEventListener('mouseup', onStickerUp);
    saveSticker(selectedSticker.id);
  }



  return (
    <div>
      <Router>
          <Switch>
            <Route path='/form/:id'>
              <StickerForm onSaveBtnClick={onSaveBtnClick} stickers={stickers}/>
            </Route>
            <Route path="/form">
              <StickerForm onSaveBtnClick={onSaveBtnClick}/>
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
          <Button/>
            {stickers.map((sticker) => {
              return <Sticker
                      key={sticker.id}
                      sticker={sticker}
                      onStickerDelete={deleteSticker}
                      onStickerDown={onStickerDown}
                    />
              })}
      </Router>
    </div>
  );
}

const mapStateToProps = ({stickers}) => ({stickers})

const mapDispatchToProps = {
  fetchStickers,
  changeStickerLocal,
  changeSticker,
  deleteSticker,
  addSticker,
  saveSticker,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)