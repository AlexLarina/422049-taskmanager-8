const getRandFromRange= (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const hashTagListTemplate =
`
<span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #repeat
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #cinema
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="repeat"
                            class="card__hashtag-hidden-input"
                          />
                          <button type="button" class="card__hashtag-name">
                            #entertaiment
                          </button>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>
`;

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

const CARDS_DATA = [
  {
    cardClasses: `card--edit card--black`,
    colorBarClass: ``,
    textAreaContent: `This is example of new task, you can add picture, set date and time, add tags.`,
    deadlineStatus: `disabled`,
    imgClass: `card__img-wrap--empty`,
    imgSrc: `img/add-photo.svg`,
    hashtagList: ``,
    repeatStatus: `disabled`
  },
  {
    cardClasses: `card--pink card--repeat`,
    colorBarClass: `card__color-bar-wave`,
    textAreaContent: `It is example of repeating task. It marks by wave.`,
    deadlineStatus: `disabled`,
    imgClass: `card__img-wrap--empty`,
    imgSrc: `img/add-photo.svg`,
    hashtagList: hashTagListTemplate,
    repeatStatus: `disabled`
  },
  {
    cardClasses: `card--yellow card--deadline`,
    colorBarClass: `card__color-bar-wave`,
    textAreaContent: `This is card with missing deadline`,
    deadlineStatus: `disabled`,
    imgClass: `card__img-wrap--empty`,
    imgSrc: `img/add-photo.svg`,
    hashtagList: hashTagListTemplate,
    repeatStatus: `disabled`
  },
  {
    cardClasses: `card--edit card--yellow card--repeat`,
    colorBarClass: `card__color-bar-wave`,
    textAreaContent: `Here is a card with filled data`,
    deadlineStatus: ``,
    imgClass: ``,
    imgSrc: `img/sample-img.jpg`,
    hashtagList: hashTagListTemplate,
    repeatStatus: ``
  },
  {
    cardClasses: `card--blue`,
    colorBarClass: `card__color-bar-wave`,
    textAreaContent: ``,
    deadlineStatus: `disabled`,
    imgClass: `card__img-wrap--empty`,
    imgSrc: `img/add-photo.svg`,
    hashtagList: hashTagListTemplate,
    repeatStatus: `disabled`
  },
  {
    cardClasses: `card--blue`,
    colorBarClass: `card__color-bar-wave`,
    textAreaContent: ``,
    deadlineStatus: ``,
    imgClass: ``,
    imgSrc: `img/sample-img.jpg`,
    hashtagList: hashTagListTemplate,
    repeatStatus: ``
  }
];

const filtersContainerElement = document.querySelector('.main__filter');
const cardsContainerElement = document.querySelector('.board__tasks');

const createFilterTemplate = (id, state, name, count) => {
  const filterTemplate =
  `
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

const createCardTemplate = (cardClasses, colorBarClass, textAreaContent, deadlineStatus,
  imgClass, imgSrc, hashTagList, repeatStatus) => {
  const cardTemplate =
  `
  <article class="card ${cardClasses}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="${colorBarClass}" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text">${textAreaContent}
          </textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">no</span>
            </button>

            <fieldset class="card__date-deadline" ${deadlineStatus}>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__date"
                  type="text"
                  placeholder="23 September"
                  name="date"
                />
              </label>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__time"
                  type="text"
                  placeholder="11:15 PM"
                  name="time"
                />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">no</span>
            </button>

            <fieldset class="card__repeat-days" ${repeatStatus}>
              <div class="card__repeat-days-inner">
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-mo-1"
                  name="repeat"
                  value="mo"
                />
                <label class="card__repeat-day" for="repeat-mo-1"
                  >mo</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-tu-1"
                  name="repeat"
                  value="tu"
                  checked
                />
                <label class="card__repeat-day" for="repeat-tu-1"
                  >tu</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-we-1"
                  name="repeat"
                  value="we"
                />
                <label class="card__repeat-day" for="repeat-we-1"
                  >we</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-th-1"
                  name="repeat"
                  value="th"
                />
                <label class="card__repeat-day" for="repeat-th-1"
                  >th</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-fr-1"
                  name="repeat"
                  value="fr"
                  checked
                />
                <label class="card__repeat-day" for="repeat-fr-1"
                  >fr</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  name="repeat"
                  value="sa"
                  id="repeat-sa-1"
                />
                <label class="card__repeat-day" for="repeat-sa-1"
                  >sa</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-su-1"
                  name="repeat"
                  value="su"
                  checked
                />
                <label class="card__repeat-day" for="repeat-su-1"
                  >su</label
                >
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">${hashTagList}</div>

            <label>
              <input
                type="text"
                class="card__hashtag-input"
                name="hashtag-input"
                placeholder="Type new hashtag here"
              />
            </label>
          </div>
        </div>

        <label class="card__img-wrap ${imgClass}">
          <input
            type="file"
            class="card__img-input visually-hidden"
            name="img"
          />
          <img
            src="${imgSrc}"
            alt="task picture"
            class="card__img"
          />
        </label>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            <input
              type="radio"
              id="color-black-1"
              class="card__color-input card__color-input--black visually-hidden"
              name="color"
              value="black"
              checked
            />
            <label
              for="color-black-1"
              class="card__color card__color--black"
              >black</label
            >
            <input
              type="radio"
              id="color-yellow-1"
              class="card__color-input card__color-input--yellow visually-hidden"
              name="color"
              value="yellow"
            />
            <label
              for="color-yellow-1"
              class="card__color card__color--yellow"
              >yellow</label
            >
            <input
              type="radio"
              id="color-blue-1"
              class="card__color-input card__color-input--blue visually-hidden"
              name="color"
              value="blue"
            />
            <label
              for="color-blue-1"
              class="card__color card__color--blue"
              >blue</label
            >
            <input
              type="radio"
              id="color-green-1"
              class="card__color-input card__color-input--green visually-hidden"
              name="color"
              value="green"
            />
            <label
              for="color-green-1"
              class="card__color card__color--green"
              >green</label
            >
            <input
              type="radio"
              id="color-pink-1"
              class="card__color-input card__color-input--pink visually-hidden"
              name="color"
              value="pink"
            />
            <label
              for="color-pink-1"
              class="card__color card__color--pink"
              >pink</label
            >
          </div>
        </div>
      </div>

      <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
      </div>
    </div>
  </form>
</article>
  `;

  return cardTemplate;
}

const renderFilters = (data) => {
  const filters = data.map((element) => {
    return createFilterTemplate(element.id, element.state, element.name, element.count);
  });
  return filters.join(``);
}

const renderCards = (data) => {
  const cards = data.map((element) => {
    return createCardTemplate(element.cardClasses, element.colorBarClass,
      element.textAreaContent, element.deadlineStatus, element.imgClass, element.imgSrc,
      element.hashtagList, element.repeatStatus);
  });
  console.log(cards.join(``));
  return cards.join(``);
}

const  filterTpl = document.createElement(`template`);
filterTpl.innerHTML = renderFilters(FILTES_DATA);
filtersContainerElement.appendChild(filterTpl.content);

const cardsTpl = document.createElement(`template`);
cardsTpl.innerHTML = renderCards(CARDS_DATA);
cardsContainerElement.appendChild(cardsTpl.content);
