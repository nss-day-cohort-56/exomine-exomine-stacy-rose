import { getGovernors } from "./database.js";


const governors = getGovernors()

export const Governors = () => {

        let html = "<h2>Governors</h2>"
    
        html += '<select id="governor">'
        html += '<option value="0">Select a Governor</option>'
    
        const arrayOfOptions = governors.map( (governor) => {
                return `<option value="${governor.id}">${governor.name}</option>`
            }
        )
            html += arrayOfOptions.join("")
        html += "</select>"
        return html
    }