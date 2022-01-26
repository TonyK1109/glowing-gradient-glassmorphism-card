import './glassmorphismCard.scss'
import CustomCard from './card'

const GlassmorphismCard = () => {
    return (
        <div className="container">
            <CustomCard 
            className="box"
            title="Card One"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hrefLink="#"
            />
            <CustomCard 
            className="box"
            title="Card Two"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hrefLink="#"
            />
            <CustomCard 
            className="box"
            title="Card Three"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hrefLink="#"
            />
        </div>
    )
}

export default GlassmorphismCard