import { Facilities } from "./Facilities.js"
import { Governors } from "./Governor.js"

export const Exomine = () => {
  return `
        <h1>Solar System Mining Marketplace</h1>
        ;
        <article class="choices">
            <section class="governorChoices">
                
                ${Governors()}
            </section>
            <article class="choices">
            <section class="facilityChoices">
                
                ${Facilities()}
            </section>`
};
