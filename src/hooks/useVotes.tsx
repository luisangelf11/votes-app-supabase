import { IFormVotes } from "../interface/votesInterface";

export const useVotes = (obj: IFormVotes) => {
    /* 
    * This fuction validate if the object paramas has equals properties 
    ! Return true for nor equals params and false for equals params
    */
  const validateVotes = () => {
    const values = Object.values(obj),
          valuesSet = new Set(values);
    return valuesSet.size === values.length;
  };
  /*
  * This function validate if a value is empty
  ! Return true if is empty and false if have data 
  */
  const validateEmptyVote =()=>{
    if(obj.first === "") return true;
    if(obj.second === "") return true;
    if(obj.third === "") return true;
    if(obj.fourth === "") return true;
    return false;
  }
  
  return {
    validateVotes,
    validateEmptyVote,
  };
};
