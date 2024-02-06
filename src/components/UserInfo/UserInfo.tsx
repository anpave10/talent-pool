import Image from "next/image";
import UserAvatar from "../../assets/user-avatar.svg";
export const UserInfo = () => {
  return (
    <div className="flex gap-4">
      <div className="rounded-full">
        <Image src={UserAvatar} alt="user avatar" width={48} height={48} />
      </div>
      <div className="flex flex-col">
        <div>
          <h3
            className="font-semibold text-[
#101828] text-base"
          >
            Nombre
          </h3>
        </div>
        <div>
          <span className="text-[#667085] text-sm">Role</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
