import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class Calendar extends React.Component {

    today = new Date();
    year = this.today.getFullYear();
    month = this.today.getMonth();
    MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    startDate;
    endDate;

    constructor(props) {
        super(props);
        let offset = 0; 
        if (props.monthOffset) {
            offset = props.monthOffset
        }
        this.state = {
            monthOffset: offset
        }
    }

    getNextMonth() {
        this.setState({monthOffset: this.state.monthOffset + 1});
    }

    getPreviousMonth() {
        this.setState({monthOffset: this.state.monthOffset - 1});
        if (this.state.monthOffset < 0) {
            this.setState({monthOffset: 0});
        }
    }


    getCalendar(lastDayOfMonth) {
        let weeks = [[], [], [], [], []]
        let wholeMonth = [];
        let curDay = new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), 1);
        
        for(let i = 0; i< weeks.length; i++) {
            for(let j = 0; j<= 6; j++) {
                const key = i.toString() + j.toString();
                if (curDay.getDay() > j) {
                    console.log('ADDING EMPTY COL')
                    weeks[i].push(<Col key={key}></Col>)
                } else {
                    weeks[i].push(<Col key={key}>{curDay.getDate()}</Col>)
                    curDay.setDate(curDay.getDate()+1);
                }
            }
            wholeMonth.push(<Row key={"week" + i}>{
                
                weeks[i]
                
                }</Row>)
        }
        console.log('WEEKS', weeks)
        return (
                <div>
                    <div>{this.MONTH_NAMES[lastDayOfMonth.getMonth()]} {lastDayOfMonth.getFullYear()}</div>
                    {wholeMonth}
                </div>
        )
    }

    render() {
        this.curMonth1 = new Date(this.year, this.month+this.state.monthOffset, 0);
        this.curMonth2 = new Date(this.year, this.month+this.state.monthOffset+1, 0);
        this.month1Cal = this.getCalendar(this.curMonth1);
        this.month2Cal = this.getCalendar(this.curMonth2);
        return (
            <Container>
                <Button onClick={this.getPreviousMonth.bind(this)}>Previous Month</Button>
                <Button onClick={this.getNextMonth.bind(this)}>Next Month</Button>
                {this.month1Cal}
                {this.month2Cal}
            </Container>
        )
    }
}

export { Calendar }