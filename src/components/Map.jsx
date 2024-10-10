import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
// import { Icon } from "leaflet"
// import customIconUrl from "../assets/icon-arrow.svg"

const Map = () => {
    const marker = [6.5244, 3.3792]

    

    // const customIcon = new Icon({
    //   iconUrl: "https://www.flaticon.com/free-icon/pin_484167?term=location&page=1&position=8&origin=search&related_id=484167",
    //   iconSize: [38, 38]
    // })
  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={13}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          // url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        />
        <Marker position={marker}>
          <Popup><h3>lol</h3></Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map