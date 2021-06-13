import { ArrowSmUpIcon } from "@heroicons/react/outline";
import TopBar from "./topBar";

const people = [
  {
    name: "Jane Cooper",
    product: "Regional Paradigm Technician",
    purchaseDate: "11 Oct 2021",
    paidStatus: true,
    shippingStatus: false,
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    product: "Regional Paradigm Technician",
    purchaseDate: "11 Oct 2021",
    paidStatus: true,
    shippingStatus: true,
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    product: "Regional Paradigm Technician",
    purchaseDate: "11 Oct 2021",
    paidStatus: false,
    shippingStatus: null,
    email: "jane.cooper@example.com",
  },
];

function DashboardContent() {
  return (
    <div className="flex-auto font-mainFont max-h-screen overflow-auto">
      <div className="flex flex-col">
        <TopBar nav="Dashboard" />

        <div className="flex space-x-4 mx-16 text-white my-4">
          <div className="flex bg-mainColor p-6 space-x-8 items-center rounded-md cursor-pointer transition hover:bg-[#413a80] ">
            <div>
              <p className="text-xm">Today sales</p>
              <p className="text-5xl font-bold">5465</p>
            </div>
            <div className="flex items-center text-sm">
              31% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-[#d1a95a] p-6 space-x-8 items-center rounded-md cursor-pointer transition hover:bg-[#d89e2a] ">
            <div>
              <p className="text-xm">Today orders</p>
              <p className="text-5xl font-bold">156</p>
            </div>
            <div className="flex items-center text-sm">
              20% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-[#2B8BE3] p-6 space-x-8 items-center rounded-md cursor-pointer transition hover:bg-[#1D6EBA] ">
            <div>
              <p className="text-xm">Total revenue</p>
              <p className="text-5xl font-bold">10000</p>
            </div>
            <div className="flex items-center text-sm">
              21% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-mainColor p-6 space-x-8 items-center rounded-md cursor-pointer transition hover:bg-[#413a80]">
            <div>
              <p className="text-xm">Total order</p>
              <p className="text-5xl font-bold">200</p>
            </div>
            <div className="flex items-center text-sm">
              21% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mx-16 my-10 ">
          <div className="flex items-center space-x-6">
            <p className="text-base font-bold text-gray-400">Latest purchase</p>
          </div>
          <div className="flex flex-col my-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name (
                          <span className="italic">
                            Total - {people.length}
                          </span>
                          )
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Purchase Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Shipping Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {people.map((person) => (
                        <tr key={person.email} className="hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {person.product}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.purchaseDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.paidStatus ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Paid
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Unpaid
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.shippingStatus && person.paidStatus ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Shipped
                              </span>
                            ) : person.paidStatus && !person.shippingStatus ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                In-process
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Not Available
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
