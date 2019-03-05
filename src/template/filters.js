export const createFiltersTemplate = (filters) => (
  filters
    .map((filter) => (
      `<label for="${filter.id}" class="filter__label">
        ${filter.name.toUpperCase()} <span class="filter__all-count">${filter.count}</span>
      </label>
      <input
        type="radio"
        id="filter__${filter.name}"
        class="filter__input visually-hidden"
        name="filter"
        ${filter.state}
      />`
    ))
    .join(``)
);
