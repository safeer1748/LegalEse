import React from "react";
const Profile_img = ({ formData, setFormData}) => {
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5e6) {
        window.alert("Please upload a file smaller than 5 MB");
        return false;
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        setFormData({
          ...formData,
          profile: { ...formData.profile, profile_img: e.target.result },
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      {formData.profile.profile_img ? (
        <img
          className="object-cover object-top w-40 h-40"
          src={formData.profile.profile_img}
          alt="Profile Image"
        />
      ) : (
        <img
          className="object-cover w-40 h-40"
          src="/src/assets/profile_img.jpg"
          alt="Profile Image"
        />
      )}
      <label
        htmlFor="input_file"
        className="inline-flex items-center w-40 px-8 text-center py-2.5 mt-2 sm:mt-4 text-sm font-medium text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-700"
      >
        Change Image
      </label>
      <input
        type="file"
        accept="image/jpeg, img/png, image/jpg"
        id="input_file"
        className="hidden"
        onChange={uploadImage}
      />
    </div>
  );
};

export default Profile_img;
