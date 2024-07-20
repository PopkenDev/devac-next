import { Button } from '@/components/ui/button';
import { FormItem } from '@/components/ui/form-item';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';
import {
  faClose,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const AccountSettingsForm = () => {
  return (
    <div className="mt-12 w-1/2">
      <h2 className="mb-8 text-center text-3xl font-black text-black dark:text-gray-50">
        Account Settings
      </h2>
      <div className="mb-4 flex items-start gap-x-4 rounded-md border border-yellow-600/70 bg-yellow-600/30 p-4 py-3">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="mt-1 h-4 w-4 text-yellow-500"
        />
        <p className="text-sm leading-7 text-gray-300">
          Your email address has not been verified yet. To fully access all
          features of our application, please check your inbox and follow the
          verification link we sent you. If you did not receive the email, you
          can request a new verification link.{' '}
          <Link
            href="#"
            className="text-orange-600 underline underline-offset-2"
          >
            Resend verification email
          </Link>
          .
        </p>
      </div>
      <div className="dark-shadow w-full rounded-md bg-[#131313] p-8">
        <div className="flex flex-col gap-y-8">
          <div>
            <h2 className="text-xl text-gray-50">Change username</h2>
            <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
            <div className="flex flex-col gap-y-2">
              <Button
                label="Change username"
                variant="settings"
                type="button"
              />

              <span className="text-xs text-gray-600">
                You can only change your username once.
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-gray-50">Password & authentication</h2>
            <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <Button
                  label="Change password"
                  variant="settings"
                  type="button"
                />
                <Button
                  label="Enable two-factor authentication"
                  variant="settings"
                  type="button"
                  className="bg-orange-700"
                />
              </div>

              <span className="text-xs text-gray-600">
                Choose a strong password to keep your account secure.
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-gray-50">Email settings</h2>
            <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold">Email address:</span>{' '}
                    thefox1337@gmail.com
                  </p>
                  <p className="flex items-center gap-x-2 text-sm text-gray-300">
                    Verified:{' '}
                    <span>
                      <FontAwesomeIcon
                        icon={faClose}
                        className="mt-1.5 h-4 w-4 text-red-500"
                      />
                    </span>
                  </p>
                </div>
                <Button label="Change email" variant="settings" type="button" />
              </div>

              <span className="text-xs text-gray-600">
                You can change your email address at any time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
