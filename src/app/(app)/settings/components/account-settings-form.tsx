import { Button } from '@/components/ui/button';
import { FormItem } from '@/components/ui/form-item';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { StatusDisplay } from '@/components/ui/status-display';
import {
  faClose,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

export const AccountSettingsForm = ({ user }: any) => {
  const [modal, setModal] = useState({ show: false, id: 0 });

  const openModal = (id: number) => {
    setModal({ show: true, id });
  };

  const closeModal = (id: number) => {
    setModal({ show: false, id });
    console.log('Modal closed');
  };
  return (
    <div className="mt-12 w-1/2 pb-8">
      <h2 className="mb-8 text-center text-3xl font-black text-black dark:text-gray-50">
        Account Settings
      </h2>

      <StatusDisplay variant="warning" className="mb-4">
        Your email address has not been verified yet. To fully access all
        features of our application, please check your inbox and follow the
        verification link we sent you. If you did not receive the email, you can
        request a new verification link.{' '}
        <Link href="#" className="text-orange-600 underline underline-offset-2">
          Resend verification email
        </Link>
        .
      </StatusDisplay>
      <div className="dark-shadow w-full rounded-md bg-[#131313] p-8">
        <div className="flex flex-col gap-y-8">
          <div>
            <h2 className="text-xl text-gray-50">Change username</h2>
            <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
            <div className="flex flex-col gap-y-2">
              <Button
                onClick={() => openModal(0)}
                label="Change username"
                variant="settings"
                type="button"
              />
              {modal.show && modal.id === 0 && (
                <Modal
                  close={() => closeModal(0)}
                  title="Are you sure you want to change your username?"
                >
                  <StatusDisplay variant="warning">
                    With your current plan you can only change your username
                    once.
                  </StatusDisplay>
                  <form>
                    <FormItem className="w-full">
                      <FormLabel label="New username" variant="default" />
                      <Input
                        required={true}
                        variant="no-icon"
                        type="text"
                        placeholder="Enter new username"
                        className="w-2/4"
                      />
                    </FormItem>
                    <FormItem className="mt-4 w-full">
                      <FormLabel
                        label={`To confirm, type "Change my username" in the box below`}
                        variant="default"
                      />
                      <Input
                        required={true}
                        variant="no-icon"
                        type="text"
                        className="w-full border border-red-700"
                      />
                    </FormItem>
                    <div className="mt-8 flex items-center justify-center gap-x-4">
                      <Button
                        label="I am sure, change my username!"
                        variant="danger"
                        type="submit"
                        className="w-full"
                      />
                    </div>
                  </form>
                </Modal>
              )}
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
                  onClick={() => openModal(1)}
                  label="Change password"
                  variant="settings"
                  type="button"
                />
                {modal.show && modal.id === 1 && (
                  <Modal
                    close={() => closeModal(1)}
                    title="Are you sure you want to change your username?"
                  >
                    <StatusDisplay variant="warning">
                      You have to login again after changing your password.
                    </StatusDisplay>
                    <form>
                      <div className="flex items-center gap-x-4">
                        <FormItem className="w-full">
                          <FormLabel label="Old password" variant="default" />
                          <Input
                            required={true}
                            variant="no-icon"
                            type="text"
                            className="w-full"
                          />
                        </FormItem>
                        <FormItem className="w-full">
                          <FormLabel label="New password" variant="default" />
                          <Input
                            required={true}
                            variant="no-icon"
                            type="text"
                            className="w-full"
                          />
                        </FormItem>
                      </div>
                      <FormItem className="mt-4 w-full">
                        <FormLabel
                          label={`To confirm, type "Change my password" in the box below`}
                          variant="default"
                        />
                        <Input
                          required={true}
                          variant="no-icon"
                          type="text"
                          className="w-full border border-red-700"
                        />
                      </FormItem>
                      <div className="mt-8 flex items-center justify-end gap-x-4">
                        <Button
                          label="Update password"
                          variant="danger"
                          type="submit"
                          className="w-full"
                        />
                      </div>
                    </form>
                  </Modal>
                )}
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
                    {user?.email}
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
                <Button
                  label="Change email"
                  variant="settings"
                  type="button"
                  onClick={() => openModal(2)}
                />
                {modal.show && modal.id === 2 && (
                  <Modal
                    close={() => closeModal(2)}
                    title="Are you sure you want to change your email address?"
                  >
                    <StatusDisplay variant="warning">
                      You have to verify your email address after changing your
                      email.
                    </StatusDisplay>
                    <form>
                      <FormItem className="w-full">
                        <FormLabel
                          label="New email address"
                          variant="default"
                        />
                        <Input
                          required={true}
                          variant="no-icon"
                          type="email"
                          className="w-2/4"
                        />
                      </FormItem>
                      <FormItem className="mt-4 w-full">
                        <FormLabel
                          label={`To confirm, type "Change my email adress" in the box below`}
                          variant="default"
                        />
                        <Input
                          required={true}
                          variant="no-icon"
                          type="text"
                          className="w-full border border-red-700"
                        />
                      </FormItem>
                      <div className="mt-8 flex items-center justify-center gap-x-4">
                        <Button
                          label="I am sure, change my email adress"
                          variant="danger"
                          type="submit"
                          className="w-full"
                        />
                      </div>
                    </form>
                  </Modal>
                )}
              </div>

              <span className="text-xs text-gray-600">
                You can change your email address at any time.
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-700">
              Delete account
            </h2>
            <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <Button
                  label="Delete your account"
                  variant="danger"
                  type="button"
                />
              </div>

              <span className="text-xs text-gray-600">
                Once you delete your account, there is no going back. Please be
                certain.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
