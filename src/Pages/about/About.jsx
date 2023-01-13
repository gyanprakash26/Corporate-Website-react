import "./about.css"
import Button from 'react-bootstrap/Button';
export default function About() {
    return (
        <>
        <div id="about">
             <div className="a-heading">
                <h1>About Inext Softwares</h1>
            </div>
            <div className="a-containt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis libero molestiae maiores eaque, reprehenderit quaerat asperiores natus harum soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fugit?</p>
            </div>
            <div className="a-containt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis libero molestiae maiores eaque, reprehenderit quaerat asperiores natus harum soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, fugit?</p>
            </div>
            <div className="button">
                <Button>Read More</Button>{' '}
            </div>
        </div>
           
        </>
    )
}