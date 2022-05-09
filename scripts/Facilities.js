import { getFacilities, getMinerals } from "./database.js";


const facilities = getFacilities()
const minerals = getMinerals()

export const Facilities = () => {

        let html = "<h2>Facility</h2>"
    
        html += '<select id="facility">'
        html += '<option value="0">Select a facility</option>'
    
        const arrayOfOptions = facilities.map( (facility) => {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        )
            html += arrayOfOptions.join("")
        html += "</select>"
        return html
    }

    export const Minerals = () => {
        let html = `<ul>
        ${
            minerals.map(mineral => {
                return `<li>
                            <input type="radio" class="minerals" value="${mineral.id}" /> ${mineral.name}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}

        

    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "facility") {
                
                // for each facility selected:
                for (const facility of facilities);
                
                  if (facilities.id === minerals.FacilityId)
                    
                    console.log(minerals.name)
                    


               
                    // search database for for matching mineral.facilityID
                    // display found minerals in selected div




            }
        }
    )   