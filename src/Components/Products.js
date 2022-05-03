import { useDispatch, useSelector } from "react-redux";

import Containt from "./Containt";
import styled from "styled-components";

function Home() {
  const dispatch = useDispatch();
  const { filterd ,status} = useSelector((state) => state.products);

  return (
    <div>
   { status ? ('Loading.....') :
    (<Grid>
      {
      filterd.map((item) => (
        <Containt
          item={item}
          category={item.category}
          title={item.title}
          img={item.image}
          price={item.price}
          key={item.id}
          dispatch={dispatch}
          id={item.id}
        />
      ))}
    </Grid>)
}
    </div>
  
  );

}

export default Home;

const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap:5px;
  align-items:center;
  text-align:center;
  justify-content: center;
`;
