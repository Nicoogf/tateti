import './ScoreBoard.css'

const ScoreBoard = ( {scoreX, ScoreO}) =>(

    <div className='score-board'>

        <div> {scoreX} </div>

        <div> {ScoreO} </div>

    </div>

)

export default ScoreBoard ;