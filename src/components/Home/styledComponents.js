import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
}
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  margin: auto;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 15px;
  border-radius: 9px;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 18px;
  }
}
`
export const MainHeading = styled.h1`
  width: 30px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    width: 30px;
    font-size: 18px;
  }
`
export const ScoreBoard = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 20px;
  padding-left: 35px;
  padding-right: 35px;
  text-align: center;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    padding: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 8px;
  }
`
export const ScorePara = styled.p`
  padding: 0px;
  margin: 5px;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    margin: 2px;
    font-size: 16px;
  }
`
export const UlBgContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const UlContaier = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 0px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-left: auto;
`
export const ItemButton = styled.button`
  background-color: transparent;
  border: none;
`
export const ImageEl = styled.img`
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`
export const ResultImageDimensions = styled.img`
  width: 160px;
  @media screen and (max-width: 768px) {
    width: 130px;
  }
`
export const Head = styled.h1`
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
  text-align: center;
  color: #ffffff;
`
export const ResultListItem = styled.li`
  text-align: center;
  color: #ffffff;
`
export const ResultTextPara = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
`
export const PlayAgainButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 9px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 19px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  margin: 30px;
`
export const RulesImg = styled.img`
  width: 70%;
  height: 70%;
`
