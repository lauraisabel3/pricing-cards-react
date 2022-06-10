import React, {useState} from "react";
import { Contaier, SwitchContainer, Switch, BasicCard, CardTitle, CardPrice, AdditionalInfo, Button} from './styles'

const monthly = [
  {
    id: 1,
    title: 'Basic',
    price: '19.99',
    storage: '500 GB Storage',
    users: '1 Users Allowed',
    send: 'Send up to 3 GB',
  },
  {
    id: 2,
    title: 'Professional',
    price: '24.99',
    storage: '1 TB Storage',
    users: '5 User Allowed',
    send: 'Send up to 10 GB',
  },
  {
    id: 3,
    title: 'Master',
    price: '39.99',
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    send: 'Send up to 20 GB'
  }
]

const annually = [
  {
    id: 1,
    title: 'Basic',
    price: '199.99',
    storage: '500 GB Storage',
    users: '1 User Allowed',
    send: 'Send up to 3 GB',
  },
  {
    id: 2,
    title: 'Professional',
    price: '249.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 10 GB' 
  },
  {
    id: 3,
    title: 'Master',
    price: '399.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 20 GB'
  }
]
const Main = () => {
  const [switchLeft, setSwitchLeft] = useState(true);

  const handleClick = () => {
    setSwitchLeft(!switchLeft)
  }

  console.log(switchLeft)
  return (
    <Contaier>
      <SwitchContainer>
        <h3>Annually</h3>
        <Switch switchLeft={switchLeft}><i onClick={handleClick}/></Switch>
        <h3>Monthly</h3>
      </SwitchContainer>
      {switchLeft ? 
      annually.map(el => (
        <BasicCard key={el.id} title={el.title}>
          <CardTitle>{el.title}</CardTitle>
          <CardPrice title={el.title}>{el.price}</CardPrice>
          <AdditionalInfo title={el.title}>
            <h3>{el.storage}</h3>
          </AdditionalInfo>
          <AdditionalInfo title={el.title}>
            <h3>{el.users}</h3>
          </AdditionalInfo>
          <AdditionalInfo title={el.title}>
            <h3>{el.send}</h3>
          </AdditionalInfo>
          <Button title={el.title}>LEARN MORE</Button>
        </BasicCard>
      )) :
      monthly.map(el => (
        <BasicCard key={el.id} title={el.title}>
          <CardTitle>{el.title}</CardTitle>
          <CardPrice title={el.title}>{el.price}</CardPrice>
          <AdditionalInfo title={el.title}>
            <h3>{el.storage}</h3>
          </AdditionalInfo>
          <AdditionalInfo title={el.title}>
            <h3>{el.users}</h3>
          </AdditionalInfo>
          <AdditionalInfo title={el.title}>
            <h3>{el.send}</h3>
          </AdditionalInfo>
          <Button title={el.title}>LEARN MORE</Button>
        </BasicCard>
      ))
      }
      
    </Contaier>
  )
}

export default Main