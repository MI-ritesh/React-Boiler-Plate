import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSomeData } from '../../Redux/Features/ApiSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.someApiFeature);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(getSomeData());
        }
      }, [status, dispatch]);

      console.log(data)

  return (
    <div>
        <h1>Products</h1>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && (
           <table class="table">
           <thead>
             <tr>
               <th scope="col">Id</th>
               <th scope="col">Title</th>
               <th scope="col">Category</th>
               <th scope="col">Price</th>
               <th scope="col">Ratings</th>
             </tr>
           </thead>
           <tbody>
            {data.map((item)=>(
                 <tr>
                 <th scope="row">{item.id}</th>
                 <td>{item.title}</td>
                 <td>{item.category}</td>
                 <td>{item.price}</td>
                 <td>{item.rating.rate}</td>
               </tr>
            ))}
            
           </tbody>
         </table>
      )}
    </div>
  )
}

export default Products