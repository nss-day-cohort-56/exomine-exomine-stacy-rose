import { Facilities } from "./Facilities.js";
import { Governors } from "./Governor.js";

export const Exomine = () => {
  return `
        <h1>Solar System Mining Marketplace</h1>
        
        <div class="choices">
            <section class="governorChoices">
                
                ${Governors()}
            </section>
        </div>
        <div class="choices">
            <section class="facilityChoices">
                
                ${Facilities()}
            </section>
        </div>
        
        <div class="flex-grid">
            <div class="col">
               <h2>Minerals at Facility</h2>
            </div>
            <div class="col">
               <h4>Cart</h4>
            </div>
        </div>
            `;
};
