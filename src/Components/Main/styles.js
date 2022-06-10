import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Contaier = styled.div `
  width: 100%;
  height: auto;
  padding: 20px;
  position: relative;
  
  ${bp.desktop} {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SwitchContainer = styled.div `
  width: auto;
  height: auto;
  margin: 0 auto 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--light-grayish-blue);
  }

  ${bp.desktop} {
    position: absolute;
    top: 0;
  }
`

const Switch = styled.div `
  width: 60px;
  height: 30px;
  position: relative;
  margin: 0 16px;
  display: flex;
  align-items: center;
  background: linear-gradient(to left, var(--dark-purple), var(--purple));
  border-radius: 15px;

  i {
    width: 30px;
    height: 30px;
    position: absolute;
    left: ${props => props.switchLeft ? '0px' : '30px'};
    border-radius: 50%;
    transform: scale(0.9);
    transition: 0.5s;
    background-color: var(--very-light-grayish-blue);
    cursor: pointer;
  }
`

const BasicCard = styled.div `
  width: auto;
  max-width: 800px;
  height: auto;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.title === 'Professional' ?  'linear-gradient(to right bottom, var(--purple), var(--dark-purple))' : 'white'};
  color: ${props => props.title === 'Professional' ? 'white' : 'var(--dark-blue)'};
  border-radius: 12px;
  transition: 0.5s;

  ${bp.desktop} {
    width: 400px;
    height: ${props => props.title === 'Professional' ? '500px' : '460px'};
    justify-content: center;
    margin-top: 80px;
    display: inline-flex;
  }
`

const CardTitle = styled.h1 `
  tex-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`

const CardPrice = styled.h3 `
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 4rem;
  border-bottom: 1px solid ${props => props.title === 'Professional' ? 'var(--very-light-grayish-blue)' : 'var(--light-grayish-blue)'};

  ::before {
    content: '$';
    margin-right: 4px;
    font-size: 2.4rem;
  }

  ${bp.desktop} {
    font-size: 5rem;

    ::before {
      font-size: 3rem;
    }
  }
`

const AdditionalInfo = styled.div `
  width: 100%;
  height: auto;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.title === 'Professional' ? 'var(--very-light-grayish-blue)' : 'var(--light-grayish-blue)'};

  h3 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
  }
`

const Button = styled.button `
  width: 100%;
  height: 54px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.title !== 'Professional' ?  'linear-gradient(to right, var(--purple), var(--dark-purple))' : 'white'};
  border: none;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: ${props => props.title !== 'Professional' ? 'var(--very-light-grayish-blue)' : 'var(--dark-purple)'};
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }

  ${bp.desktop} {
    :hover {
      background: ${props => props.title === 'Professional' ?  'var(--darkpurple)' : 'white'};
      color: ${props => props.title === 'Professional' ? 'var(--very-light-grayish-blue)' : 'var(--dark-purple)'};
      border: 2px solid ${props => props.title === 'Professional' ? 'var(--very-light-grayish-blue)' : 'var(--blue)'}
    }
  }
`
export { Contaier, SwitchContainer, Switch, BasicCard,  CardTitle, CardPrice, AdditionalInfo, Button}