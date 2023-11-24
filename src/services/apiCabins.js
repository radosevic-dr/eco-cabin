import supabase from "./supabase";

async function getCabins() {

    let { data: cabins, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        throw new Error("Error: Unable to load cabins");
    }

    return cabins;
}

export { getCabins };