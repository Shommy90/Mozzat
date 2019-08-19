import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

import img01 from "../../../assets/images/t-bone-beef.png";
import img02 from "../../../assets/images/striplion-wagyu.png";
import img03 from "../../../assets/images/lamb-rack.png";
import img04 from "../../../assets/images/beef-burger.png";
import img05 from "../../../assets/images/beef-ribs.png";
import img06 from "../../../assets/images/beef-jucy-lucy.png";
import img07 from "../../../assets/images/awsal-beef.png";

import img01Modal from "../../../assets/images/modal-t-bone-beef.png";
import img02Modal from "../../../assets/images/modal-striplion-wagyu.png";
import img03Modal from "../../../assets/images/modal-lamb-rack.png";
import img04Modal from "../../../assets/images/modal-beef-burger.png";
import img05Modal from "../../../assets/images/modal-beef-ribs.png";
import img06Modal from "../../../assets/images/modal-beef-jucy-lucy.png";
import img07Modal from "../../../assets/images/modal-awsal-beef.png";

const imagesList = [
  { smallImg: img01, bigImg: img01Modal, name: "t-bone-beef" },
  { smallImg: img02, bigImg: img02Modal, name: "striplion-wagyu" },
  { smallImg: img03, bigImg: img03Modal, name: "lamb-rack" },
  { smallImg: img04, bigImg: img04Modal, name: "beef-burger" },
  { smallImg: img05, bigImg: img05Modal, name: "beef-ribs" },
  { smallImg: img06, bigImg: img06Modal, name: "beef-jucy-lucy" },
  { smallImg: img07, bigImg: img07Modal, name: "awsal-beef" }
];

class GallerySection extends React.Component {
  constructor() {
    super();
    this.state = {
      images: imagesList,
      showModal: false,
      selectedImage: null
    };
  }

  handleOpenModal = i => {
    this.setState({
      showModal: true,
      selectedImage: i
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  renderImages = () => {
    return this.state.images.map((img, i) => {
      return (
        <li
          key={i}
          style={{ backgroundImage: `url(${img.smallImg})` }}
          onClick={() => this.handleOpenModal(i)}
        >
          <div className="gallery__li-inner" />
          <div className="gallery__bottom-name">{img.name}</div>
        </li>
      );
    });
  };

  renderModal = () => {
    if (this.state.selectedImage !== null) {
      const image = this.state.images[this.state.selectedImage];

      return (
        <div className="modal-img-holder">
          <img src={image.bigImg} alt="modal img" style={{ width: "100%" }} />
        </div>
      );
    }
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="gallery-section">
        <ul className="gallery-section__list">
          {this.renderImages()}
          <li
            className="flex align-center justify-center"
            style={{ backgroundColor: "#f2f2f2", padding: "20px" }}
          >
            <Link to="/gallery" className="link-btn gallery-section">
              view gallery
            </Link>
          </li>
        </ul>

        <ReactModal
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          {this.renderModal()}

          <span className="close-modal-btn" onClick={this.handleCloseModal}>
            <i className="fas fa-times" />
          </span>
        </ReactModal>
      </div>
    );
  }
}

export default GallerySection;
