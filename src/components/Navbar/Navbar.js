import { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem, NavItemBtn, NavBtnLink } from './Navbar.elements'
import { FaBars, FaTimes } from "react-icons/fa"
import {Button} from '../../globalStyles'

const Navbar = () =>{

    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () =>{
        setClick(!click);
    }

    return(
        <>
            <IconContext.Provider value={{color : '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>
                            <NavIcon/> Ultra
                        </NavLogo>
                        <MobileIcon onclick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onclick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>Products</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar