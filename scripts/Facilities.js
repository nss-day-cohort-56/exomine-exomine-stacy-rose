import { getFacilities } from "./database.js";


const facilities = getFacilities()

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


    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "facility") {
                console.log("facility selected")
            }
        }
    )   