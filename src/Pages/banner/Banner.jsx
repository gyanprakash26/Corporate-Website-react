import Button from 'react-bootstrap/Button';
import './banner.css'
export default function Banner() {
    return (
        <div className="banner">
            <div className="containor">
                <div className="bannerHeading">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                </div>
                <div className="hDeatail">
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                <div className='b-button'>
                    <div className="button">
                        <Button>Read More</Button>{' '}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}