import Logo from "./Logo";
import LogoSymbol from "./LogoSymbol";

export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <LogoSymbol />
                    <div class="separador"></div>
                    <Logo />
                </div>

                <div class="logo-mobile">
                    <LogoSymbol />
                </div>

                <div class="instagram-mobile">
                    <Logo />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
      </div>
    );
}