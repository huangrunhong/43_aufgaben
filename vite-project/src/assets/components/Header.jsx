import Button from "./Button"
import './Header.css'
const Header=()=>{
    return(
        <header className="headerbox">
            <h1>
                Hi, I am <span>Runhong Huang.</span>
            </h1>
            <h2>A Front End Developer</h2>
            <p>Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p>
            <Button
             name= {'resume'}
             />
        </header>
       
    )
}
export default Header