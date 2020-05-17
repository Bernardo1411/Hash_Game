import React, {Component} from 'react'
import './App.css'
import Block from './components/block'
import Header from './components/header'
import Button from './components/button'

const initialSate = {value0:'-', value1:'-', value2:'-', value3:'-', value4:'-', value5:'-', value6:'-', value7:'-', value8:'-', status: true, end: false}

const change = (val, status) => {
    let value = val
    let stato = status

    if(value === '-'){ 
        value = (status) ? 'X':'O'
        stato = status ? false : true
    }
    
    return {value, stato}
}

export default class Hash extends Component{
    
    constructor(props){
        super(props)
        this.changeState = this.changeState.bind(this)
        this.restart = this.restart.bind(this)
    }

    state = {...initialSate}

    changeState(name){
       if(!this.state.end){
            let val = null
            for(let i=0; i<9; i++){
                if(name.includes(i)) val = change(this.state[`value${i}`], this.state.status)
            }

            if(name.includes(0)){ 
                this.setState({
                    value0: val.value
              }, e => this.endGame(this.state))
            }else if(name.includes(1)){
                this.setState({
                    value1: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(2)){
                this.setState({
                    value2: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(3)){
                this.setState({
                    value3: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(4)){
                this.setState({
                    value4: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(5)){
                this.setState({
                    value5: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(6)){
                this.setState({
                    value6: val.value
                }, e => this.endGame(this.state))
            }else if(name.includes(7)){
                this.setState({
                    value7: val.value
                }, e => this.endGame(this.state))
            }else{
                this.setState({
                    value8: val.value
                }, e => this.endGame(this.state))
            }

            this.setState({status: val.stato})

        }
    }

    endGame(actualState){
        const actualStatetArray = Object.values(actualState)
        actualStatetArray.pop()
        actualStatetArray.pop()
    
        let sum = 0
    
        for(let i=0; i<7; i+=3){
            sum = 0
            for(let j=i+1; j<i+3; j++){
                if(actualStatetArray[i]===actualStatetArray[j] && actualStatetArray[i]!=='-'){
                    ++sum;
                    if(sum === 2){
                        this.setState({end:true})
                        return
                    }
                }
            }
        } 
        for(let i=0; i<3; i++){
            sum = 0
            for(let j=3+i; j<i+7; j+=3){
                if(actualStatetArray[i]===actualStatetArray[j] && actualStatetArray[i]!=='-'){
                    ++sum;
                    if(sum === 2){
                        this.setState({end:true})
                        return
                    }
                }
            }
        }
        sum = 0
        for(let j=4; j<9; j+=4){
            if(actualStatetArray[0]===actualStatetArray[j] && actualStatetArray[0]!=='-'){
                ++sum;
                if(sum === 2){
                    this.setState({end:true})
                    return
                }
            }
        }
        sum = 0
        for(let j=4; j<7; j+=2){
            if(actualStatetArray[2]===actualStatetArray[j] && actualStatetArray[2]!=='-'){
                ++sum;
                if(sum === 2){
                    this.setState({end:true})
                    return
                }
            }
        }
    }

    restart(){
        this.setState({...initialSate})
    }

    render(){
        return(
           <div className="hash">
               <Header className='header' name={this.state.status} end={this.state.end}/>
                <Block name={`${this.state.value0}0`} click={this.changeState} />
                <Block name={`${this.state.value1}1`} click={this.changeState}/>
                <Block name={`${this.state.value2}2`} click={this.changeState}/>
                <Block name={`${this.state.value3}3`} click={this.changeState}/>
                <Block name={`${this.state.value4}4`} click={this.changeState}/>
                <Block name={`${this.state.value5}5`} click={this.changeState}/>
                <Block name={`${this.state.value6}6`} click={this.changeState}/>
                <Block name={`${this.state.value7}7`} click={this.changeState}/>
                <Block name={`${this.state.value8}8`} click={this.changeState}/>
                <Button className='button' click={this.restart}/>
           </div>
        )
    }
}