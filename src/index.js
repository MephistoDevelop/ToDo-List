/* eslint-disable import/no-duplicates */
import renderMainContainer from './DOMmodule';
import { allTasks, getListsFromStorage } from './Todos';


renderMainContainer();

(() => {
  const hash = [
    {
      id: 1,
      title: 'My Task 1',
      description: 'My Description Example',
      priority: '1',
      date: '2019-11-08',
      done: true,
    },
    {
      id: '2',
      title: 'My Task 2',
      description: 'My Description Example 2',
      priority: '2',
      date: '2020-02-01',
      done: false,
    },
    {
      id: '3',
      title: 'My Task 3',
      description: 'My Description Example 3',
      priority: '3',
      date: '2020-01-01',
      done: true,
    },
    {
      id: '4',
      title: 'My Task 4',
      description: 'My Description Example 4',
      priority: '1',
      date: '2019-12-10',
      done: false,
    },
  ];
  const hash2 = [
    {
      id: 1,
      title: 'My Task 1',
      description: 'My Description Example',
      priority: '3',
      date: '2019-03-21',
      done: false,
    },
    {
      id: '2',
      title: 'My Task 2',
      description: 'My Description Example 2',
      priority: '1',
      date: '2020-02-01',
      done: false,
    },
    {
      id: '3',
      title: 'My Task 3',
      description: 'My Description Example 3',
      priority: '1',
      date: '2020-01-01',
      done: true,
    },
    {
      id: '4',
      title: 'My Task 4',
      description: 'My Description Example 4',
      priority: '2',
      date: '2020-02-04',
      done: false,
    },
  ];
  localStorage.setItem('My project Example', JSON.stringify(hash));
  localStorage.setItem('My Personal List', JSON.stringify(hash2));
  getListsFromStorage();
  allTasks();
})();
