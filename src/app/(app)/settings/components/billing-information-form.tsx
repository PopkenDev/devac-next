import { Button } from '@/components/ui/button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BillingInformationForm = () => {
  return (
    <div className="mt-12 w-1/2 pb-8">
      <h2 className="mb-8 text-center text-3xl font-black text-black dark:text-gray-50">
        Billing information
      </h2>
      <div className="dark-shadow flex w-full flex-col gap-y-8 rounded-md bg-[#131313] p-8">
        <div>
          <h2 className="text-xl text-gray-50">Current plan</h2>
          <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
          <div className="dark-shadow mt-5 rounded-md">
            <div className="flex w-full items-center justify-between bg-gray-700/10 p-4">
              <h3 className="text-sm font-semibold text-gray-50">Free plan</h3>
              <div className="flex items-center gap-x-4">
                <Button label="See plans" variant="settings" type="button" />
                <Button
                  label="Upgrade"
                  variant="default"
                  type="button"
                  className="bg-orange-600"
                />
              </div>
            </div>
            <ul className="p-4 text-sm leading-7 text-gray-50">
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 1
              </li>
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 2
              </li>
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 3
              </li>
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 4
              </li>
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 5
              </li>
              <li className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-4 w-4 text-green-500"
                />
                Feature 6
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-gray-50">
            Billing / Payment information
          </h2>
          <div className="mb-5 mt-4 h-px w-full bg-white/10"></div>
          <div className="mb-8 flex items-start justify-between">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-semibold text-gray-50">
                Billing information
              </h2>
              <ul className="text-sm leading-6 text-gray-300">
                {/* user info */}
                <li className="mb-2">Herman Popken</li>
                <li>1 Franklin St Suite</li>
                <li>New York, NY 10013</li>
                <li>United States</li>
              </ul>
            </div>
            <Button
              label="Edit"
              variant="settings"
              type="button"
              className="border border-white/5"
            />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-semibold text-gray-50">Payment method</h2>
              <ul className="text-sm leading-6 text-gray-300">
                {/* user info */}
                <li className="mb-2">Credit card</li>
                <li>**** **** **** 9404</li>
                <li>Expires 1/2028</li>
              </ul>
            </div>
            <Button
              label="Edit"
              variant="settings"
              type="button"
              className="border border-white/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
