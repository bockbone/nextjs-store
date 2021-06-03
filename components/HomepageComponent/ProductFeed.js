import Image from "next/image";

function ProductFeed({ productData }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-mainFont text-4xl uppercase font-black mb-4 sm:self-start sm:ml-12 sm:text-6xl lg:ml-28 md:ml-2 xl:ml-20 xl:text-7xl xl:mb-14">
        Products
      </h2>
      <div className="gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 md:px-3 xl:flex flex-wrap justify-center">
        {productData.map((data, i) => (
          <div
            key={i}
            className="group font-mainFont max-w-xxs cursor-pointer transition duration-200 ease-in transform sm:hover:-translate-y-1"
          >
            <div className="relative">
              <Image
                src={`/${data.imageUrl}`}
                width={270}
                height={350}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <h3 className="font-bold text-lg my-2">{data.title}</h3>
            <p className="text-sm font-light">{data.description}</p>
            <div className="flex justify-between my-2">
              <p className="font-black text-xl">{`RM${data.price}`}</p>
              <div className="flex">
                <div className="hover:text-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
        {/* {productData.map(data, (i) => {
          ;
        })} */}
      </div>
    </div>
  );
}

export default ProductFeed;
