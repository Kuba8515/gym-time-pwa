import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { pathToFileURL } from 'url';
import {
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  ChevronDownIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
  DuplicateActiveIcon,
  DuplicateInactiveIcon,
  EditActiveIcon,
  EditInactiveIcon,
  MoveActiveIcon,
  MoveInactiveIcon,
} from '../../components/Icons';
import Layout from '../../components/Layout';

export default function Exercises(props) {
  return (
    <Layout username={props.username}>
      <h1 className="font-bold text-2xl text-center mt-4">
        Databank for exercises
      </h1>
      <div className="w-56 text-right fixed top-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Filter by body parts
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={props.bodyPart}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}{' '}
                      o Chest
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DuplicateActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <DuplicateInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Arms
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ArchiveActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArchiveInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Back
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <MoveActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <MoveInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Legs
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <DeleteInactiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Shoulders
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="md:mb-0 pr-4 mt-10">
        <ul className="m-4 align-center p-8 align-center ml-32 gap-2">
          {props.exercises.map((exercise) => {
            return (
              <li key={`exercise-li-${exercise.id}`}>
                <Link href={`/exercises/${exercise.id}`}>
                  <a>{exercise.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getExercises } = await import('../../util/database');
  const exercises = await getExercises(context.query.id);
  // const { getExercisesbyBodypart } = await import('../../util/database');
  // const part = await getExercisesbyBodypart(context.query.bodyPart);
  return {
    props: {
      exercises,
    },
  };
}
