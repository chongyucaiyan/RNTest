import { useState } from 'react'
import { View, MovableArea, MovableView } from '@tarojs/components'

import './index.scss'

export default function Index() {
  const [state, setState] = useState({
    x: 0,
    y: 0
  })

  const onDragStart = (e) => {
    console.log('onDragStart, ', e)
  }

  const onDragEnd = (e) => {
    console.log('onDragEnd, ', e)
    setState({
      x: 100,
      y: 100
    })
  }

  console.log('x: ', state.x, ', y: ', state.y)

  return (
    <View>
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all' x={state.x} y={state.y} onDragStart={onDragStart} onDragEnd={onDragEnd}></MovableView>
      </MovableArea>
    </View>
  )
}
