import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function ContactSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:max-w-none md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a href="tel:260772773447">+26 (077) 277 3447</a>
                  <p className="mt-1">Mon-Fri 9am to 5pm CAT</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a href="mailto:mentalhealthalliancezm@gmail.com">
                    mentalhealthalliancezm@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
