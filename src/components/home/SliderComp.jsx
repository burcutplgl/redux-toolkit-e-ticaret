
import SliderModule from "react-slick";

const Slider = SliderModule.default;

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="flex items-center justify-between bg-gray-100 px-10 min-h-100 gap-5">
            <div className="w-1/2">
              <div className="text-6xl font-bold">
                En Kaliteli Ayakkabılar Burada
              </div>

              <div className="text-lg my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque necessitatibus doloribus itaque. Minus, sint.
              </div>

              <div className="border rounded-full cursor-pointer text-3xl w-100 h-16 flex justify-center items-center bg-gray-200">
                İncele
              </div>
            </div>

            <img
              className="w-100 h-100 object-contain"
              src="https://9b6e8d-barcin.akinoncloudcdn.com/products/2024/02/05/1180554/d3d0c87b-a9c8-4b68-b911-484882969df6_size3840x3840_cropCenter.jpg"
              alt="Nike ayakkabı"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between bg-gray-100 px-10 min-h-100 gap-5">
            <div className="w-1/2">
              <div className="text-3xl font-bold">
                En Kaliteli Ayakkabılar Burada
              </div>

              <div className="text-lg my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque necessitatibus doloribus itaque. Minus, sint.
              </div>

              <div className="border rounded-full cursor-pointer text-3xl w-50 h-16 flex justify-center items-center bg-gray-100">
                İncele
              </div>
            </div>

           <img
              className="w-100 h-100 object-contain"
              src="https://9b6e8d-barcin.akinoncloudcdn.com/products/2024/02/05/1180554/d3d0c87b-a9c8-4b68-b911-484882969df6_size3840x3840_cropCenter.jpg"
              alt="Nike ayakkabı"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
