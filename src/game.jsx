import { Scene } from './components/Scene'
import { Player } from './components/Player'
import { Map } from './components/Map'
import { Score } from './components/Score'
import { Controls } from './components/Control'
import { Result } from './components/result'
import './game.css'

export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Score />
      <Controls />
      <Result />
    </div>
  )
}
