import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CameraIcon } from '@heroicons/react/16/solid';

import { FormItem } from '@/components/ui/form-item';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export const ProfileSettingsForm = () => {
  const [switchChecked, setSwitchChecked] = useState({
    name: false,
    url: false,
    rank: false,
  });
  return (
    <div className="mt-12 w-1/2 pb-8">
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
              Your name will {switchChecked.name ? '' : 'not'} be visible on
              your profile.
            </span>
            {/* <label
              htmlFor="hideName"
              className="flex items-center gap-x-1 text-xs text-gray-300"
            >
              <input type="checkbox" name="hideName" id="" />
              Hide name
            </label> */}
            <Switch
              onChange={() =>
                setSwitchChecked({
                  ...switchChecked,
                  name: !switchChecked.name,
                })
              }
              isChecked={switchChecked.name}
              label={switchChecked?.name ? 'Show' : 'Hide'}
            />
          </FormItem>
          <FormItem>
            <FormLabel label="Portfolio website" variant="default" />
            <div className="relative">
              <Input
                type="url"
                variant="no-icon"
                required={false}
                className="w-1/3 pl-14"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                https://
              </span>
            </div>
            <span className="text-xs text-gray-600">
              Your website url will be visible on your profile.
            </span>
            <Switch
              onChange={() =>
                setSwitchChecked({
                  ...switchChecked,
                  url: !switchChecked.url,
                })
              }
              isChecked={switchChecked.url}
              label={switchChecked?.url ? 'Show' : 'Hide'}
            />
          </FormItem>
          <FormItem>
            <div>
              <FormLabel label="Show rank" variant="default" />
              <span className="ml-1 text-xs text-gray-600">(Senior)</span>
            </div>
            <Switch
              onChange={() =>
                setSwitchChecked({
                  ...switchChecked,
                  rank: !switchChecked.rank,
                })
              }
              isChecked={switchChecked.rank}
              label={switchChecked?.rank ? 'Show' : 'Hide'}
            />
          </FormItem>
          <FormItem>
            <FormLabel label="Bio" variant="default" />
            <textarea
              className="dark-shadow h-40 w-2/3 resize-none rounded-md bg-[#333] px-2 py-1.5 text-sm text-gray-50 outline-none ring-orange-500 focus:ring-2"
              placeholder="Tell something about yourself..."
            ></textarea>
          </FormItem>
          <Button
            type="submit"
            label="Update profile"
            variant="outline"
            className="w-1/3"
          />
        </form>
      </div>
    </div>
  );
};
