import supabase from "./supabase";

export async function getSettings(){
    const { data, error } = await supabase
        .from('settings').select("*").single();
    
    if(error) throw new Error("Unable to load settings!");
    return data;   
}

export async function updateSettings(newSetting
    ){
    const { data, error } = await supabase
        .from('settings').update(newSetting).eq("id", 1).single();
    
    if(error) throw new Error("Unable to update settings!");
    return data;   
}