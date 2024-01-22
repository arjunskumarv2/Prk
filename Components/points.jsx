import { IoIosMan } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiProjectorScreenChart } from "react-icons/pi";
import { RiShieldStarFill } from "react-icons/ri";

const Points = () => {
  return (
    <div className="bg-orange-500 w-full h-60vh mt-10 flex flex-col sm:flex-row justify-around items-center text-white">
      {/* Column 1 */}
      <div className="flex flex-col items-center m-4">
        <div className="m-4"><RiShieldStarFill size={60} /></div>
        <div className="text-3xl font-bold m-4">120 +</div>
        <div className="m-4">Customers Served</div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center m-4">
        <div className="m-4"><PiProjectorScreenChart size={60} /></div>
        <div className="text-3xl font-bold m-4">80 +</div>
        <div className="m-4">Ongoing Projects</div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center m-4">
        <div className="m-4"><MdOutlineSupportAgent size={60} /></div>
        <div className="text-3xl font-bold m-4">90 %</div>
        <div className="m-4">Customer Retention Rate</div>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col items-center m-4">
        <div className="m-4"><IoIosMan size={60} /></div>
        <div className="text-3xl font-bold m-4">3,500 +</div>
        <div className="m-4">Total Manpower</div>
      </div>
    </div>
  );
};

export default Points;
