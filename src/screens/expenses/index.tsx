import Typography from '../../components/typography'

import Card from './components/card'
import { Container, Header, ScrollBox } from './styles'

const Expenses = () => {
  return (
   <Container>
     <Header>
       <Typography label='Histórico de gastos' fontColor='white' />
     </Header>

     <ScrollBox>
      <Card />
     </ScrollBox>
   </Container>
  )
}

export default Expenses
