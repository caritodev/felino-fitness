import { withRouter } from 'next/router';
import { useContext } from "react";
import { Context } from '../../context/Context';

  const Contacto = () => {
    const { test } = useContext(Context);
    
    return (
        <>Contacto</>
    )
  };
  
  export default withRouter(Contacto);
  