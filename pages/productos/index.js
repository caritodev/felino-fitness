import { withRouter } from 'next/router';
import { useContext } from "react";
import { Context } from '../../context/Context';

  const Productos = () => {
    const { test } = useContext(Context);
    return (
        <>Productos</>
    )
  };
  
  export default withRouter(Productos);
  