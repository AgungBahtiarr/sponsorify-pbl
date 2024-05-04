import {db,Events} from "astro:db";

export const Event = {

    addEvent: async (name,description,rawDate,proposal,location,idUser) => {

    const startDate = new Date(rawDate.toString());
    await db.insert(Events).values({
      id: null,
      name: name.toString(),
      description: description.toString(),
      location: location.toString(),
      startDate: startDate,
      proposal: proposal.toString(),
      idUser:idUser,
    });
    return true
    },

    deteteEvent: async ()=>{
        
    }

} 


