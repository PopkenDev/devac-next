import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CameraIcon } from '@heroicons/react/16/solid';

import { FormItem } from '@/components/ui/form-item';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';

export const ProfileSettingsForm = () => {
  return (
    <div className="mt-12 w-1/2">
      <h2 className="mb-8 text-center text-3xl font-black text-black dark:text-gray-50">
        Profile
      </h2>
      <div className="dark-shadow w-full rounded-md bg-[#131313] p-8">
        <form className="flex flex-col gap-8">
          <figure className="relative h-32 w-32 rounded-full border-2 border-gray-600">
            <Image
              src="/profile-img.jpeg"
              alt="Avatar"
              width={400}
              height={400}
              className="h-full w-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#777] hover:bg-[#666]">
              <CameraIcon className="h-6 w-6 text-black" />
            </button>
          </figure>
          <FormItem>
            <FormLabel label="Name" variant="default" />
            <Input
              type="text"
              variant="no-icon"
              required={false}
              className="w-1/3"
            />
            <span className="text-xs text-gray-600">
              Your name will be visible on your profile.
            </span>
          </FormItem>
          <FormItem>
            <div>
              <FormLabel label="Show rank" variant="default" />
              <span className="ml-1 text-xs text-gray-600">(Senior)</span>
            </div>

            <fieldset className="flex flex-col items-start gap-2">
              <label
                htmlFor=""
                className="flex gap-x-2 text-sm font-semibold dark:text-gray-50"
              >
                <input
                  type="radio"
                  name="showRank"
                  value="yes"
                  className="rounded-full border-none"
                />
                Yes
              </label>
              <label
                htmlFor=""
                className="flex gap-x-2 text-sm font-semibold dark:text-gray-50"
              >
                <input
                  type="radio"
                  name="showRank"
                  value="no"
                  className="rounded-full border-none"
                />
                No
              </label>
            </fieldset>
          </FormItem>
          <FormItem>
            <FormLabel label="Bio" variant="default" />
            <textarea className="dark-shadow h-40 w-2/3 resize-none rounded-md bg-[#333] px-2 py-1.5 text-gray-50 outline-none ring-orange-500 focus:ring-2"></textarea>
          </FormItem>
        </form>
      </div>
    </div>
  );
};
