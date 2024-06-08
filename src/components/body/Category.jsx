import { useNavigate } from "react-router-dom";

// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/9875/9875334.png",
    name: "Property",
  },
  {
    image: "https://cdn-icons-png.freepik.com/512/3674/3674465.png",
    name: "Furnitures",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3097/3097144.png",
    name: "Cars",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2554/2554396.png",
    name: "Mobile and Laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/6020/6020634.png",
    name: "Home Appliances",
  },
  {
    image:
      "https://cdn0.iconfinder.com/data/icons/vehicles-in-green-and-brown-shades/1536/motorcycle-512.png",
    name: "Two Wheelers",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/9321/9321345.png",
    name: "Services",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3460/3460335.png",
    name: "Pets",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082008.png",
    name: "Fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5209/5209031.png",
    name: "Books,Sports",
  },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col my-5 p-1">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-3 lg:px-10"
                  onClick={() => navigate(`/category/${index}`)}
                >
                  {/* Image  */}
                  <div className=" w-12 h-12 lg:w-16 lg:h-16 max-w-xs rounded-full transition-all bg-white hover:bg-blue-500  border-2 border-blue-500 cursor-pointer mb-1 mt-1 ">
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-xs lg:text-[16px] text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
