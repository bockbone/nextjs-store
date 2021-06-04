import Link from "next/link";
import TopBar from "./topBar";
import CustomButton from "../CustomButton";
import { PencilAltIcon } from "@heroicons/react/outline";

function ProfileDashboardContent() {
  return (
    <div className="flex-auto font-mainFont max-h-screen overflow-auto">
      <div className="flex flex-col">
        <TopBar nav="Profile" />
      </div>
      <div className="mx-16 my-10 ">
        <Link href="/dashboard/profile/edit">
          <a>
            <CustomButton insideText="Edit profile" Icon={PencilAltIcon} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileDashboardContent;
