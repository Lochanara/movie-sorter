import { useState } from 'react'
import { useDispatch } from "react-redux";
import { removeMovie } from "../features/MovieSlice";

//type for movieCard UI
interface MovieCardType {
  MovieTitle: string;
}

function MovieCard({ MovieTitle }: MovieCardType) {

  //dispatch
  const dispatch = useDispatch();
  //const to make title editiable or not
  const [TitleNotEditable, setTitleNotEditable] = useState(true);
  //const to control edit/done buttons visibility
  const [EditBtnVisible, setEditBtnVisible] = useState(true);

  return (
    <div>
      {/* input field to show title, diabled by default */}
      <input value={MovieTitle} disabled={TitleNotEditable}></input>

      {/* two seperate buttons to control edit function */}
      {EditBtnVisible && <button onClick={() =>{
        setTitleNotEditable(!TitleNotEditable);
        setEditBtnVisible(false);
      }}>Edit</button>}
      {!EditBtnVisible && <button onClick={() =>{
        setTitleNotEditable(!TitleNotEditable);
        setEditBtnVisible(true)
      }}>Done</button>}

      {/* button to delete movie */}
      <button onClick={() => {
        dispatch(removeMovie(MovieTitle));
      }}> Delete </button>

    </div>
  );
}

export default MovieCard;