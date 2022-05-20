import React, { FC } from "react";
import { Popup, useMap } from "react-leaflet";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Button } from "components";
interface IUserPopup {
  item: IUser;
}
export const UserPopUp: FC<IUserPopup> = ({ item }) => {
  const map = useMap();
  const closePopups = () => {
    map.closePopup();
  };
  const cld = new Cloudinary({
    cloud: {
      cloudName: "mrmz",
    },
  });
  const userImage = cld.image(item.publicId);
  return (
    <Popup position={item.location}>
      <div className=" rounded-md border-2 border-green-200 ">
        <div className="flex items-center text-[16px] h-[30px] text-green-600 bg-green-200">
          <h1 className="">Location Details</h1>
        </div>
        <h4 className="my-2">{item.locationName}</h4>
        <h4 className="my-2">{item.locationType}</h4>
        <AdvancedImage cldImg={userImage} plugins={[lazyload()]} />
        <div className="flex justify-end">
          <Button
            className="bg-yellow-500 text-white my-2"
            onClick={closePopups}
          >
            Close
          </Button>
        </div>
      </div>
    </Popup>
  );
};
