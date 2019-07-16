import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import shopInfoBg from "../../assets/images/map-shop-info-bg.png";
import addressIcon from "../../assets/images/address-icon.png";
import mailIcon from "../../assets/images/mail-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import workHours from "../../assets/images/work-hours.png";
import pin1 from "../../assets/images/pin1.png";
import pin2 from "../../assets/images/pin2.png";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          latitude: 24.590719,
          longitude: 46.672717,
          storeNumber: 1,
          address: "Al-Suwaidi - Aisha bint Abi Baker St.",
          pin: pin1
        },
        {
          latitude: 24.664911,
          longitude: 46.682978,
          storeNumber: 2,
          address: "Awal Plaza - Takhassusi St.",
          pin: pin2
        },
        {
          latitude: 24.658227,
          longitude: 46.669399,
          storeNumber: 3,
          address: "Ash Sharafiyah - 6478 Al Yaseen Valley.",
          pin: pin2
        }
      ],
      storeNumber: 1,
      storeAddress: "Al-Suwaidi - Aisha bint Abi Baker St."
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          icon={store.pin}
          onClick={() =>
            this.setState({
              storeNumber: this.state.stores[index].storeNumber,
              storeAddress: this.state.stores[index].address
            })
          }
        />
      );
    });
  };

  render() {
    return (
      <div className="google-map-wrapper">
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={13}
          initialCenter={{ lat: 24.627408, lng: 46.652763 }}
        >
          {this.displayMarkers()}

          <div
            className="shop-info"
            style={{ backgroundImage: `url(${shopInfoBg})` }}
          >
            <h2 className="shop-info__title">
              mozzat <span>shop {this.state.storeNumber}</span>
            </h2>

            <div style={{ marginBottom: "40px" }}>
              <div style={{ marginBottom: "15px" }} className="flex">
                <div style={{ width: "40px" }}>
                  <div>
                    <img src={addressIcon} alt={addressIcon} />
                  </div>
                </div>
                <div>
                  <p style={{ marginBottom: "5px", fontSize: "20px" }}>
                    {this.state.storeAddress}
                  </p>
                  <p style={{ fontWeight: "600" }}>Saudi Arabia, Riyadh</p>
                </div>
              </div>
              <div style={{ marginBottom: "15px" }} className="flex">
                <div style={{ width: "40px" }}>
                  <div>
                    <img src={mailIcon} alt={mailIcon} />
                  </div>
                </div>
                <div style={{ fontWeight: "600" }}>office@mozzat.com.sa</div>
              </div>
              <div style={{ marginBottom: "15px" }} className="flex">
                <div style={{ width: "40px" }}>
                  <div>
                    <img src={phoneIcon} alt={phoneIcon} />
                  </div>
                </div>
                <div style={{ fontWeight: "600" }}>966-500600307</div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "20px" }}>
                <img src={workHours} alt={workHours} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "5px"
                  }}
                >
                  SATURDAY - WEDNESDAY
                </p>
                <p style={{ fontSize: "28px", fontWeight: "300" }}>
                  11:00AM <span style={{ margin: "0 10px" }}>-</span> 11:00PM
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "5px"
                  }}
                >
                  THURSDAY - FRIDAY
                </p>
                <p style={{ fontSize: "28px", fontWeight: "300" }}>
                  12:30AM <span style={{ margin: "0 10px" }}>-</span> 12:30PM
                </p>
              </div>
            </div>
          </div>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHUUMp7u5jykei6lbEkYyFKRbySijOYhM"
})(GoogleMap);
