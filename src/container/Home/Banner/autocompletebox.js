import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
];

export default function AutoCompleteBox() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1 grow sm:min-w-0 min-w-full">
        <div className="relative w-full cursor-default overflow-hidden text-left">
          <Combobox.Button className="text-left">
            <label className="block truncate text-black text-[15px] font-semibold leading-[21px] sm:pl-3">
              Find in and around…
            </label>
            <Combobox.Input
              className="w-full border-none outline-0 sm:pl-3 pr-10 text-[14px] leading-5 text-gray-500 focus:ring-0 placeholder:text-gray-500 font-Lato"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2"></div>
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-[18px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `py-2 px-6 hover:bg-green/10 text-[14px] text-black/80 cursor-pointer ${
                      active ? "bg-green/10 text-black" : "text-black/80"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
