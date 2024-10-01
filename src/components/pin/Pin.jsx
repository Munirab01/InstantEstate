import './pin.scss';
import { Link } from 'react-router-dom';
import { Marker,Popup} from 'react-leaflet';

function Pin({item}){
  return (
    <div className='pin'>
        <Marker position={[item.latitude , item.longitude]}>
    <Popup>
     <div className="popContainer">
        <img src={item.img} alt=""/>
        <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom}bedroom</span>
            <b>Rs {item.price}</b>
        </div>
     </div>
    </Popup>
  </Marker>
  </div>
  )
}

export default Pin;