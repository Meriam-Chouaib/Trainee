import { Outlet } from 'react-router-dom'
import { StackOutlet } from '../../components/Stack/StackStyled'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export function PrincipalLayout() {
    return (
    <>
   <Header />
   <StackOutlet>
    <Outlet />
    </StackOutlet>
    <Footer />

    </>
  )
}

