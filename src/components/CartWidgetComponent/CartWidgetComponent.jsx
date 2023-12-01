import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {

    const icon_style = {
        fontSize: '1.25rem',
        paddingRight: '0.5rem'
    };

    return (
        <div>
            <FontAwesomeIcon style={icon_style} icon={faCartShopping} />
            <span style={{fontSize: '1.25rem'}}>10</span>
        </div>
    );
};

export default CartWidgetComponent;
