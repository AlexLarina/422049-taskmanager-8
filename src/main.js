function getRandFromRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const FILTES_DATA = [
  {
    id: `filter__all`,
    state: `checked`,
    name: `ALL`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__overdue`,
    state: `disabled`,
    name: `OVERDUE`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__today`,
    state: `disabled`,
    name: `TODAY`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__favorites`,
    state: ``,
    name: `FAVOURITES`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__repeating`,
    state: ``,
    name: `Repeating`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__tags`,
    state: ``,
    name: `Tags`,
    count: getRandFromRange(0, 100)
  },
  {
    id: `filter__archive`,
    state: ``,
    name: `ARCHIVE`,
    count: getRandFromRange(0, 100)
  }
];

const filtersContainer = document.querySelector('.main__filter');

const createNode = (nodeType, parentNode, content, nodeClassList) => {
  const node = document.createElement(nodeType);
  node.classList.add(nodeClassList);
  node.innerHTML = content;
  parentNode.appendChild(node);
};

const createFilterTemplate = (id, state, name, count) => {
  const filterTemplate = `
  <input
    type="radio"
    id="${id}"
    class="filter__input visually-hidden"
    name="filter"
    ${state}
  />
  <label for="${id}" class="filter__label">
    ${name} <span class="filter__today-count">${count}</span>
  </label>
  `;

  return filterTemplate;
}

const renderFilters = (data) => {
  const filters = [];
  data.forEach((element) => {
    filters.push(createFilterTemplate(element.id, element.state, element.name, element.count));
  });

  console.log(filters.join(``));
  return filters.join(``);
}

var tpl = document.createElement(`template`);
tpl.innerHTML = renderFilters(FILTES_DATA);
filtersContainer.appendChild(tpl.content);
