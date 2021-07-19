import logoImg from '../../assets/logo.svg'
import { Container } from './style'


export function Header(){
    return(
        <Container>
            <img src={logoImg} alt="dt monet" />
            <button type="button">
                Nova Transação
            </button>
        </Container>


    )
}