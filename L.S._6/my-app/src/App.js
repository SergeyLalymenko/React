import React, { useState, useEffect } from 'react'
import Sticker from './components/Sticker/Sticker'
import Button from './components/Button/Button'
import stickersService from './stickersService'


function App() {

  const [stickers, setStickers] = useState([]);
  let shiftX;
  let shiftY;
  let selectedSticker;


  useEffect(() => {
    stickersService.get('/')
      .then(({data}) => setStickers(data));
  }, [])

  function onHandleTextareaChange(e){//
    const newStickers = stickers.map((item) => {
      if(item.id === e.target.id){
        return {
          ...item,
          description: e.target.value,
        }
      } else {
        return item;
      }
    })
    setStickers(newStickers);
  }

  function onStickerBlur(e){//
    const savedSticker = stickers.find((item) => item.id === e.target.id);
    stickersService.put('/' + e.target.id, savedSticker);
  }

  function onStickerDelete(id){//
    const newStickers = stickers.filter((item) => item.id !== id);
    setStickers(newStickers);
    stickersService.delete('/' + id);
  }

  function onAddButtonClick(){//
    const newSticker = {
      x: 100,
      y: 100,
      width: 120,
      height: 80,
      description: 'Новый стикер!',
    }
    stickersService.post('/', newSticker)
      .then(({data}) => setStickers([...stickers, data]));
  }

  function onStickerDown(e){
      if(e.target.classList.contains('sticker-container')){
      selectedSticker = stickers.find((item) => item.id === e.target.children[1].id);
      shiftX = e.pageX - selectedSticker.x;
      shiftY = e.pageY - selectedSticker.y;
      document.addEventListener('mousemove', onStickerMove);
      document.addEventListener('mouseup', onStickerUp);
    }
  }

  function onStickerMove(e){
    const newStickers = stickers.map((item) => {
      if(selectedSticker.id !== item.id){
        return item;
      } else {
        return selectedSticker = {
          ...item,
          x: e.pageX - shiftX,
          y: e.pageY - shiftY,
        }
      }
    })
    setStickers(newStickers);
  }

  function onStickerUp(){
    document.removeEventListener('mousemove', onStickerMove);
    document.removeEventListener('mouseup', onStickerUp);
    stickersService.put('/' + selectedSticker.id, selectedSticker);
  }



  return (
    <div>
      <Button onAddButtonClick={onAddButtonClick}/>
      {stickers.map((sticker) => {
        return <Sticker
                key={sticker.id}
                sticker={sticker}
                onHandleTextareaChange={onHandleTextareaChange}
                onStickerBlur={onStickerBlur}
                onStickerDelete={onStickerDelete}
                onStickerDown={onStickerDown}
              />
      })
      }
    </div>
  );
}

export default App;
