/**
 * @jest-environment jsdom
 */

import { addOrRemoveFromFollowingArray } from '../cookies';

const followingArray = [{ id: 1 }];
const userIdToAdd = 2;
const userIdToRemove = 1;

test('adds user to following array', () => {
  expect(
    addOrRemoveFromFollowingArray(followingArray, userIdToAdd, () => {}),
  ).toStrictEqual([{ id: 1 }, { id: 2 }]);
});

test('removes user from following array', () => {
  expect(
    addOrRemoveFromFollowingArray(followingArray, userIdToRemove, () => {}),
  ).toStrictEqual([]);
});
