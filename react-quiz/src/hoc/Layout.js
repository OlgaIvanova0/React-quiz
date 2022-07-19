import React, { Component } from 'react'
import style from './Layout.module.css'
import MenuToggle from '../components/Navigation/MenuToggle'
import Drawer from '../components/Navigation/Drawer'

class Layout extends Component{
    state ={
        menu: false
    }

    toggleMenuHandler =()=>{
        this.setState({
            menu:!this.state.menu
        })
    }


    render(){
        return(
            <div className={style.Layout}>
                <Drawer 
                isOpen={this.state.menu}/>
                <MenuToggle 
                   onToggle={this.toggleMenuHandler}
                   isOpen={this.state.menu}
                />
                <main className={style.Layout}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout