import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { Map, Button } from "components";
import { useUser } from "hooks";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

export const GetLocForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm();

  const { onAddUser, userState } = useUser();
  const onSubmit = (inputData: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", inputData.logo[0]);
    formData.append("upload_preset", "l7q6wyoh");
    axios
      .post("https://api.cloudinary.com/v1_1/mrmz/upload", formData)
      .then((res) => {
        const { data } = res;
        if (data.public_id) {
          const userData: IUser = {
            id: uuidv4(),
            locationName: inputData.locationName,
            location: {
              lat: inputData.location.lat,
              lng: inputData.location.lng,
            },
            publicId: data.public_id,
            locationType: inputData.locationType,
          };
          onAddUser(userData);
          toast.success("The user has been successfully added");
          reset();
        }
      })
      .catch(() => {
        toast.error("An error occured");
      })
      .finally(() => setLoading(false));
  };

  const options = [
    { value: "business", label: "business" },
    { value: "residential", label: "residential" },
  ];

  return (
    <div className="flex justify-center  ">
      <div className=" rounded-[5px]   border-blue-500 border-2">
        <div className="p-2  bg-blue-500 rounded-t-[5px] text-white font-bold">
          <h3 className="text-[18px]">Share location</h3>
        </div>
        <form
          className="px-8 py-4 grid grid-cols-[150px,1fr] gap-y-2  w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="locationName">Location Name:</label>
          <input
            className="h-[38px] border-gray-400 focus:outline-none border-2 rounded-md pr-2 focus:border-blue-400"
            type="text"
            {...register("locationName", {
              required: "Please enter location name",
            })}
          />

          <label htmlFor="location">Location On Map:</label>
          <div className="h-[100px] w-full">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Map
                  onChange={(data) => {
                    field.onChange(data);
                  }}
                />
              )}
            />
          </div>

          <label htmlFor="locationType">Location Type:</label>
          <Controller
            name="locationType"
            control={control}
            rules={{ required: "Please select location type" }}
            render={({ field }) => (
              <Select
                options={options}
                onChange={(data) => {
                  field.onChange(data?.value);
                }}
              />
            )}
          />
          <label htmlFor="logo">Logo:</label>
          <input
            type="file"
            {...register("logo", { required: "Please upload an image" })}
          />
          <div />
          <div className="flex justify-self-end mt-2">
            <Button
              className=" mr-2 bg-gray-400 text-white h-[30px] rounded-md hover:bg-gray-600 transition-all"
              onClick={() => {
                reset();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className=" bg-blue-400 text-white px-2  h-[30px] rounded-md hover:bg-blue-600 transition-all"
              loading={loading}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
