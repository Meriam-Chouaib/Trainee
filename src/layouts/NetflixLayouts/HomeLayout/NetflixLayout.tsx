import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Container, StackOutlet } from '../../../components/Stack/StackStyled.style'
import { StackNetflix } from './NetflixLayout.style'


export function NetflixLayout() {
    return (
    <StackNetflix>
        <Container>
   <Header />
   <StackOutlet>
    <Outlet />
    </StackOutlet>
    </Container>

    </StackNetflix>
  )
}

