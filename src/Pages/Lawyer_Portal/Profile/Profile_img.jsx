import React from 'react'

const Profile_img = ({formData,setFormData}) => {
    const uploadImage = (e) => {
        let file = e.target.files[0];
        file = URL.createObjectURL(file);
        console.log(file)
        setFormData({ ...formData, profile: { ...formData.profile,profile_img_url: file } });
      };
      
  return (
    <div>
          {formData.profile.profile_img_url ? (
                  <img
                    className="object-cover object-top w-40 h-40"
                    src={formData.profile.profile_img_url}
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
                  className="inline-flex items-center w-40 px-8 text-center py-2.5 mt-2 sm:mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800"
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
  )
}

export default Profile_img
