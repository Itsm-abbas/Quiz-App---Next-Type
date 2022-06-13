import { Fragment, useContext, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { QuizContext } from "../context/category";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
type Props = {
  data: any[];
  label: string;
};
export default function ListBox({ data, label }: Props) {
  const { setCategory, setAmount, setDifficulty } = useContext(QuizContext);

  let [selected, setSelected] = useState(data[0]);
  if (selected === "General Knowledge") {
    setCategory(9);
  }

  if (selected === "Books") {
    setCategory(10);
  }
  if (selected === "Film") {
    setCategory(11);
  }
  if (selected === "Music") {
    setCategory(12);
  }
  if (selected === "Musicals and Theatres") {
    setCategory(13);
  }
  if (selected === "Television") {
    setCategory(14);
  }
  if (selected === "Video games") {
    setCategory(15);
  }
  if (selected === "Board games") {
    setCategory(16);
  }
  if (selected === "Science and Nature") {
    setCategory(17);
  }
  if (selected === "Computers") {
    setCategory(18);
  }
  if (selected === "Mathematics") {
    setCategory(19);
  }
  if (selected === "Mythology") {
    setCategory(20);
  }
  if (selected === "Sports") {
    setCategory(21);
  }
  if (selected === "Geography") {
    setCategory(22);
  }
  if (selected === "History") {
    setCategory(23);
  }
  if (selected === "Politics") {
    setCategory(24);
  }
  if (selected === "Art") {
    setCategory(25);
  }
  if (selected === "Celebrities") {
    setCategory(26);
  }
  if (selected === "Animals") {
    setCategory(27);
  }
  if (selected === "Vehicles") {
    setCategory(28);
  }
  if (selected === "Comics") {
    setCategory(29);
  }
  if (selected === "Gadgets") {
    setCategory(30);
  }
  if (selected === "Cartoons and Animations") {
    setCategory(31);
  }
  useEffect(() => {
    if (label === "Select Category:") {
      setCategory(selected);
    } else if (label === "No of Questions:") {
      setAmount(selected);
    } else if (label === "Select Difficulty:") {
      setDifficulty(selected);
    }
  }, [label, selected, setCategory, setDifficulty, setAmount]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mb-1 mt-2">
            <Listbox.Label className="text-sm pl-1">{label}</Listbox.Label>
          </div>
          <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md  border-2 border-pink-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          {open && (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 w-11/12 md:w-3/4 py-1 text-base bg-white rounded-md shadow-lg h-auto ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((value, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? "text-amber-900 bg-pink-100" : "text-gray-900"
                      }`
                    }
                    value={value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {value}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon
                              className="w-5 h-5 text-pink-500"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          )}
        </>
      )}
    </Listbox>
  );
}
