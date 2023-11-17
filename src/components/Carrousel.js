import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/eth1.jpg"
          alt="Ethereum 1"
        />
        <Carousel.Caption>
          <h5>Ethereum 1</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/eth2.jpg"
          alt="Ethereum 2"
        />
        <Carousel.Caption>
          <h5>Ethereum 2</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/eth3.jpg"
          alt="Ethereum 3"
        />
        <Carousel.Caption>
          <h5>Ethereum 3</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;