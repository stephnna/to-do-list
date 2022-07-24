// jest.mock('./__mocks__/functions.js');
import {
  addTask, removeTask, editDescription, status, clearAllCompleted,
} from '../__mocks__/functions.js';

describe('[] AddItem and RemoveItem from todo array', () => {
  test('# add one item', () => {
    const todo = [];
    const record = {
      description: 'test value',
      completed: false,
      index: 1,
    };
    addTask(todo, record);
    expect(todo).toHaveLength(1);
  });

  test('# remove one item', () => {
    const todo = [{
      description: 'test value 1',
      completed: false,
      index: 0,
    }, {
      description: 'test value 2',
      completed: false,
      index: 1,
    }, {
      description: 'test value 3',
      completed: false,
      index: 2,
    }];
    removeTask(todo, 0);
    expect(todo).toHaveLength(2);
  });
});

describe('[] Test edit, status, clearAllCompleted', () => {
  test('# Check if text is editable', () => {
    const todo = [{
      description: 'test value 1',
      completed: false,
      index: 0,
    }, {
      description: 'test value 2',
      completed: false,
      index: 1,
    }, {
      description: 'test value 3',
      completed: false,
      index: 2,
    }];
    editDescription(todo, 1, 'editedText');
    expect(todo[1].description).toBe('editedText');
  });

  test('# Check the STATUS', () => {
    const todo = [{
      description: 'test value 1',
      completed: false,
      index: 0,
    }, {
      description: 'test value 2',
      completed: true,
      index: 1,
    }, {
      description: 'test value 3',
      completed: false,
      index: 2,
    }];
    status(todo, 1);
    expect(todo[1].completed).toBe(false);
  });

  test('# Clear All Completed', () => {
    const todo = [{
      description: 'test value 1',
      completed: true,
      index: 0,
    }, {
      description: 'test value 2',
      completed: true,
      index: 1,
    }, {
      description: 'test value 3',
      completed: false,
      index: 2,
    }];
    clearAllCompleted(todo);
    expect(todo).toHaveLength(1);
  });
});