import React from 'react'

const AddNewRemarks_modal = ({handleAddNewModal,data}) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Remarks
              </h3>
              <button
              onClick={handleAddNewModal}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
                <div className='grid md:grid-cols-2'>
                    <label className='font-medium'>Date: <label className='text-gray-700 font-normal'>{data.date}</label></label>
                    <label className='font-medium'>Judge Name: <label className='text-gray-700 font-normal'>{data.judge_name}</label></label>
                </div>
            </div>
             {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Remarks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNewRemarks_modal
