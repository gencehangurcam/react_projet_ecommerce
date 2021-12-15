import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function CustomMap({ google, locations = [], width, height }) {
    return (
        <Map
            google={google}
            containerStyle={{
                width: width,
                height: height,
                position: "relative"

            }}
            style={{
                width: width,
                height: height,
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {locations.map(
                coords => <Marker position={coords} />
            )}

        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(CustomMap);

