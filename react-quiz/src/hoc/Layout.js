import React, { Component } from 'react'
import style from './Layout.module.css'

class Layout extends Component{
    render(){
        return(
            <div className={style.Layout}>
                <main className={style.Layout}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout