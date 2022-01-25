import './EightBall.css';
import {useState} from 'react';

const EightBall = ({answers}) => {
    const [text,setText] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    
    const getRandomNum = () => {
        return Math.floor(Math.random()*answers.length);
    };

    const animate = () => {
        const button = document.getElementById('eight-ball');
        button.classList.toggle('shaking');
        setTimeout(()=>{
            button.classList.toggle('shaking');
        },500);
    }

    const shakeBall = () => {
        animate();
        const idx = getRandomNum();
        const answer = answers[idx];
        setColor(answer.color);
        setTimeout(()=> {
            setText(answer.msg);
        },1500);
    };

    return (
        <button id='eight-ball' onClick={shakeBall} className={color}>
            <p className="EightBall-text">{text}</p>
        </button>
    )
};

export default EightBall;