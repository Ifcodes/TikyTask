import "./styles.scss";
import clsx from "clsx";
import defaultAvatar from "/images/Avatar.png";

interface AvatarPropType {
  imgUrl?: string;
  classNames?: string;
}
const Avatar = ({ imgUrl, classNames }: AvatarPropType) => {
  return (
    <div className={clsx(classNames, "avatar-container")}>
      <img src={imgUrl || defaultAvatar} alt="" />
    </div>
  );
};

export default Avatar;
