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

async function addCabin(newCabin) {

    const imgName = `${Math.random()}-${newCabin.imgUrl.name}}`;
    const imgUrl = `${supabaseUrl}/storage/v1/object/public/cabin-img/${imgName}`;
    const { data: cabin, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, imgUrl }]);

    if (error) {
        throw new Error("Error: Unable to add cabin");
    }


    const { error: storageError } = await supabase
        .storage
        .from('cabin-img')
        .upload(imgName, newCabin.imgUrl);

    if (storageError) {
        await supabase.from('cabins').delete().eq('id', cabin.id);
        throw new Error("Error: Unable to upload image");

    }

    return cabin;

}

export { getCabins, deleteCabin, addCabin };