import { supabase } from "../supabase/client";

export function useLogin(){
    const loginUser =async(registration: string): Promise<boolean>=>{
        try {
            const {data}= await supabase.from('members').select('*').eq('registration', registration);
            //console.log(data)
            if(data?.length) return true;
            else return false
        } catch (error) {
            if(error instanceof Error)
                console.error(error.message);
            return false;
        }
    }
    return {
        loginUser
    };
}