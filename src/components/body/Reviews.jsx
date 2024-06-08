/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-blue-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                  Selling my items was effortless! A great platform for
                  connecting buyers and sellers.{" "}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Devvrat Singh
                </h2>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                  Simple interface, seamless sales experience, highly
                  recommended for connecting sellers with buyers effortlessly!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Rahul
                </h2>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                  Listing and selling items is a breeze! No transaction or
                  delivery stress, just a fantastic platform connecting sellers
                  and buyers smoothly.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Aashish{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
