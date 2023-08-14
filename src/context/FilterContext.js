import { createContext } from "react";

const FilterContext = createContext({
  form: {
    per_page: "25",
    beer_name: null,
    abv_gt: null,
    abv_lt: null,
    ibu_gt: null,
    ibu_lt: null,
    ebc_gt: null,
    ebc_lt: null,
    yeast: null,
    brewed_before: null,
    brewed_after: null,
    hops: null,
    malt: null,
    food: null,
    ids: null
  },
  setForm: () => { },
});

export default FilterContext;
