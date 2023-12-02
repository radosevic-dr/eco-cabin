import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {

    let { data: cabins, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        throw new Error("Error: Unable to load cabins");
    }

    return cabins;
}

async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error("Error: Unable to delete cabin");
    }

    return data;

}

{ 'https://lurzufojalloulfozkms.supabase.co/storage/v1/object/public/cabin-img/cabFour.avif?t=2023-11-28T10%3A04%3A02.370Z'; }

async function addCabin(newCabin) {
    const imgName = `${newCabin.imgUrl.name}`.replaceAll("/", "");
    const imgUrl = `${supabaseUrl}/storage/v1/object/public/cabin-img/${imgName}`;
  
    // eslint-disable-next-line no-useless-catch
    try {
      const { data: cabin, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, imgUrl }]);
  
      if (error) {
        throw new Error("Error: Unable to add cabin");
      }
  
      // Upload image to Supabase Storage
      const { error: storageError } = await supabase
        .storage
        .from('cabin-img')
        .upload(imgName, newCabin.imgUrl);
  
      if (storageError) {
        // If image upload fails, delete the previously added cabin record
        await supabase.from('cabins').delete().eq('id', cabin.id);
        throw new Error("Error: Unable to upload image");
      }
  
      return cabin;
    } catch (error) {
      throw error;
    }
  }
  

  async function editCabin(id, updatedCabin) {
    const { data, error } = await supabase
        .from('cabins')
        .update({ ...updatedCabin })
        .eq('id', id);

    if (error) {
        throw new Error("Error: Unable to update cabin");
    }

    return data[0]; // Return the updated cabin data from Supabase
}

export { getCabins, deleteCabin, addCabin, editCabin };