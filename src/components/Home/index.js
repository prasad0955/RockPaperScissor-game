import {Component} from 'react'
import Popup from 'reactjs-popup'
import {
  HomeBgContainer,
  HeaderContainer,
  MainHeading,
  ScorePara,
  UlBgContainer,
  UlContaier,
  RulesButton,
  ItemButton,
  ImageEl,
  ResultImageDimensions,
  Head,
  ScoreBoard,
  ResultListItem,
  ResultTextPara,
  PlayAgainButton,
  PopupContainer,
  RulesImg,
} from './styledComponents'

class Home extends Component {
  state = {
    score: 0,
    gameOver: false,
    you: '',
    opponent: '',
    resultText: '',
  }

  getOptionstobeSelected = () => {
    const {choicesList} = this.props
    const checkResult = event => {
      console.log(event.target)
      const opponent = choicesList[Math.floor(Math.random() * 3)].id
      const you = event.target.id
      if (you === opponent) {
        this.setState({you, opponent, gameOver: true, resultText: 'IT IS DRAW'})
      } else if (
        (you === 'ROCK' && opponent === 'SCISSORS') ||
        (you === 'SCISSORS' && opponent === 'PAPER') ||
        (you === 'PAPER' && opponent === 'ROCK')
      ) {
        this.setState(prevstate => ({
          score: prevstate.score + 1,
          you,
          opponent,
          gameOver: true,
          resultText: 'YOU WON',
        }))
      } else {
        this.setState(prevstate => ({
          score: prevstate.score - 1,
          you,
          opponent,
          gameOver: true,
          resultText: 'YOU LOSE',
        }))
      }
    }
    return choicesList.map(item => (
      <li key={item.id}>
        <ItemButton
          data-testid={`${item.id.toLowerCase()}Button`}
          type="button"
          onClick={checkResult}
          id={item.id}
        >
          <ImageEl
            value={item.id}
            src={item.imageUrl}
            alt={item.id}
            id={item.id}
          />
        </ItemButton>
      </li>
    ))
  }

  result = () => {
    const {choicesList} = this.props
    const {you, opponent, resultText} = this.state
    const youItem = choicesList.filter(item => item.id === you)
    const opponentItem = choicesList.filter(item => item.id === opponent)
    const playAgain = () => {
      this.setState({gameOver: false})
    }
    return (
      <>
        <li className="result-li">
          <Head as="h3">YOU</Head>
          <ResultImageDimensions
            value={youItem[0].id}
            src={youItem[0].imageUrl}
            alt="your choice"
          />
        </li>
        <li className="result-li">
          <Head as="h3">OPPONENT</Head>
          <ResultImageDimensions
            value={opponentItem[0].id}
            src={opponentItem[0].imageUrl}
            alt="opponent choice"
          />
        </li>
        <ResultListItem>
          <ResultTextPara>{resultText}</ResultTextPara>
          <PlayAgainButton type="button" onClick={playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultListItem>
      </>
    )
  }

  render() {
    const {score, gameOver} = this.state
    return (
      <HomeBgContainer>
        <HeaderContainer>
          <div>
            <MainHeading>Rock Paper Scissors</MainHeading>
          </div>
          <ScoreBoard>
            <ScorePara>Score</ScorePara>
            <ScorePara>{score}</ScorePara>
          </ScoreBoard>
        </HeaderContainer>
        <UlBgContainer>
          <UlContaier>
            {gameOver ? this.result() : this.getOptionstobeSelected()}
          </UlContaier>
        </UlBgContainer>
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          <PopupContainer>
            <RulesImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        </Popup>
      </HomeBgContainer>
    )
  }
}
export default Home
