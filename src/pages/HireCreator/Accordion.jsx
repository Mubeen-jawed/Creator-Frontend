import React from "react";

const Accordion = () => {
  return (
    <div>
      <div class="px-5 mb-14">
        <div class="flex flex-col items-center">
          {/* <h2 class=" text-4xl mt-5">FAQ</h2> */}
          <p class=" text-xl mt-3">Frequenty asked questions</p>
        </div>
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What wiil be the next step?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows
                users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How does billing work?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a variety of billing options, including monthly and
                annual subscription plans, as well as pay-as-you-go pricing for
                certain services. Payment is typically made through a credit
                card or other secure online payment method.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I get a refund for my Campaign?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I cancel my subscription?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To cancel your We subscription, you can log in to your account
                and navigate to the subscription management page. From there,
                you should be able to cancel your subscription and stop future
                billing.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I try this platform for free?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a free trial of its platform for a limited time.
                During the trial period, you will have access to a limited set
                of features and functionality, but you will not be charged.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
