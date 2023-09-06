'use client';

import { useEffect, useState } from 'react';

import { toTitleCase } from '@/utils/toTitleCase';

import Image from 'next/image';
import SearchIcon from '@/assets/meta/SearchIcon';
import arrow from '@/assets/ui/arrow.png';

import enemies from '@/data/enemies';
import ENEMYTYPES from '@/constants/enemy';

export default function EnemyTable({ loadout }: { loadout: any }) {
  const [enemyRows, setEnemyRows] = useState(enemies);

  const TABLE_HEAD = ['Name', 'Health'];

  const [sortBy, setSortBy] = useState([
    {
      name: TABLE_HEAD[0],
      isAscending: true,
    },
    {
      name: TABLE_HEAD[1],
      isAscending: false,
    },
  ]);

  const [mostRecentSortTerm, setMostRecentSortTerm] = useState('Name');

  const [tableFilters] = useState([
    {
      id: 0,
      enemyType: ENEMYTYPES.BOSS,
      value: 'Boss',
      label: 'filter-boss',
      isToggled: false,
    },
    {
      id: 1,
      enemyType: ENEMYTYPES.DREAM,
      value: 'Dream',
      label: 'filter-dream',
      isToggled: false,
    },
    {
      id: 2,
      enemyType: ENEMYTYPES.MINI_BOSS,
      value: 'Mini Boss',
      label: 'filter-mini-boss',
      isToggled: false,
    },
  ]);

  const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleSort(sortValue: string) {
    setMostRecentSortTerm(sortValue);

    setEnemyRows(
      enemyRows.sort((a: any, b: any) => {
        if (sortValue === 'Name') {
          return (
            (sortBy[0].isAscending ? -1 : 1) * a.name.localeCompare(b.name)
          );
        } else {
          let aHealth = a.health.total;
          let bHealth = b.health.total;

          if (a.health?.nail != undefined) {
            aHealth = a.health.nail?.[loadout.nail.id];
          }

          if (b.health?.nail != undefined) {
            bHealth = b.health.nail?.[loadout.nail.id];
          }

          return (sortBy[1].isAscending ? -1 : 1) * (aHealth - bHealth);
        }
      })
    );

    setSortBy(
      sortBy.map((item) => {
        if (item.name === sortValue) {
          return {
            ...item,
            isAscending: !item.isAscending,
          };
        }
        return item;
      })
    );
  }

  function handleSearch(event: any) {
    setSearchTerm(event.target.value.toLowerCase().trim());
  }

  function handleToggle(id: number) {
    tableFilters[id].isToggled = !tableFilters[id].isToggled;

    let updatedFilters: string[] = [];

    tableFilters.map((filter) => {
      if (filter.isToggled) {
        updatedFilters.push(filter.enemyType);
      }
    });

    setActiveFilters(updatedFilters);
  }

  useEffect(() => {
    const applyFiltersAndSort = (enemiesList: any) => {
      let filteredEnemies = enemiesList;

      // Apply enemy type filters
      if (activeFilters.length > 0) {
        filteredEnemies = filteredEnemies.filter((enemy: any) => {
          if (Array.isArray(enemy.type)) {
            return enemy.type.some((type: any) => activeFilters.includes(type));
          } else {
            return activeFilters.includes(enemy.type);
          }
        });
      }

      // Filter by search
      if (searchTerm.length > 0) {
        filteredEnemies = filteredEnemies.filter((enemy: any) => {
          return enemy.name.includes(searchTerm);
        });
      }

      // Sort
      filteredEnemies.sort((a: any, b: any) => {
        const sortTermIndex = mostRecentSortTerm === 'Name' ? 0 : 1;
        const sortOrder = sortBy[sortTermIndex].isAscending ? 1 : -1;

        if (sortTermIndex === 0) {
          return sortOrder * a.name.localeCompare(b.name);
        } else {
          let aHealth = a.health.total;
          let bHealth = b.health.total;

          if (a.health?.nail != undefined) {
            aHealth = a.health.nail?.[loadout.nail.id];
          }

          if (b.health?.nail != undefined) {
            bHealth = b.health.nail?.[loadout.nail.id];
          }

          return sortOrder * (aHealth - bHealth);
        }
      });

      return filteredEnemies;
    };

    const updatedEnemyRows = applyFiltersAndSort(enemies);

    setEnemyRows(updatedEnemyRows);
  }, [activeFilters, searchTerm, mostRecentSortTerm, loadout]);

  useEffect(() => {
    // Scroll to top of table
    let tableContainer = document.getElementById('table-container');
    if (tableContainer != null) {
      tableContainer.scrollTop = 0;
    }
  }, [tableFilters, searchTerm, sortBy]);

  return (
    <>
      {/* Filters */}
      <div className="w-full flex flex-row flex-wrap gap-2">
        {tableFilters.map((toggle) => {
          return (
            <div key={toggle.id}>
              <label
                htmlFor={toggle.label}
                className={`flex items-center align-middle px-2 py-1 cursor-pointer rounded-lg border-2 border-zinc-100/50 ${
                  toggle.isToggled
                    ? 'opacity-100 border-zinc-50/100'
                    : 'opacity-70'
                } hover:opacity-100 hover:border-zinc-50 transition-[border-color]`}
              >
                <input
                  name="searchbar"
                  type="checkbox"
                  id={toggle.label}
                  className="mr-2"
                  onChange={() => {
                    handleToggle(toggle.id);
                  }}
                />
                <p className="font-medium">{toggle.value}</p>
              </label>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div
        id="search-bar"
        className="relative max-w-[15rem] flex items-center my-4"
      >
        <span className="absolute pl-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Enemy"
          className="w-full h-full pl-9 p-2 bg-inherit outline outline-2 outline-zinc-300/50 focus:outline-zinc-300 rounded-md"
          onChange={handleSearch}
        />
      </div>

      <code className="text-sm opacity-75">
        {`Showing ${enemyRows.length} ${
          enemyRows.length == 1 ? 'result' : 'results'
        }`}
      </code>

      {/* Table */}
      <div
        id="table-container"
        className="max-h-[40vh] md:max-h-[70vh] overflow-y-auto flex flex-wrap items-center gap-4"
      >
        <table className="w-full table-auto text-left mr-2">
          <thead className="sticky top-0 bg-zinc-950">
            <tr>
              {TABLE_HEAD.map((value, index) => {
                return (
                  <th
                    key={value}
                    className="cursor-pointer border-b-2 border-zinc-100/50 p-2"
                    onClick={() => handleSort(value)}
                  >
                    <span
                      className={`flex items-center gap-2 font-normal ${
                        index !== TABLE_HEAD.length - 1
                          ? 'justify-start'
                          : 'justify-end'
                      }`}
                    >
                      <Image
                        alt="arrow"
                        src={arrow}
                        className={`max-w-[20px] transform ${
                          sortBy[index].isAscending ? '' : 'rotate-180'
                        }`}
                      />
                      {value}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {enemyRows.map((enemy) => {
              return generateTableRow(enemy, loadout);
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function generateTableRow(enemy: any, loadout: any) {
  return (
    <tr key={enemy.name}>
      <td className="px-2 p-4 border-b-2 border-zinc-100/50">
        <div className="flex items-center gap-3">
          <Image
            src={enemy.icon}
            alt={enemy.name}
            className="max-w-[40px] lg:max-w-[60px]"
          />
          <div className="flex flex-col">
            <span className=" text-zinc-100">{toTitleCase(enemy.name)}</span>
          </div>
        </div>
      </td>
      <td className="px-0 p-4 border-b-2 border-zinc-100/50">
        <div className="flex flex-col text-right pr-4">
          <span className="font-bold text-xl">
            {enemy.health?.nail
              ? enemy.health.nail?.[loadout.nail.id]
              : enemy.health.total}
          </span>
        </div>
      </td>
    </tr>
  );
}
