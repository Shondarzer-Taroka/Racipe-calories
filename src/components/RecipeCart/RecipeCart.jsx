// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'; 

const RecipeCart = ({ selectRecipe, preparing, prepare }) => {
    // console.log(prepare);
   let time=0
   let calory=0

    // let d= prepare.map(v=> v.preparingTime)
    // console.log(d);
    prepare.forEach(element => {
       time+= element.preparingTime
       calory+=element.calories
    });

    console.log(time);


    // let {preparingTime,recipeName,calories}=selectRecipe
    //   let a=  selectRecipe.map(v=> v.recipeName)
    //   console.log(a);
    return (
        <section>
            <div className="card w-full md:w-[500px] lg:w-[500px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Want to cook: {selectRecipe.length}</h2>
                    <hr />
                    {/* table starts */}
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {selectRecipe.map((value, indx) => <tr key={indx}>  <th>{indx + 1}</th> <td>{value.recipeName}</td>  <td>{value.preparingTime} minutes </td> <td>{value.calories} calories </td>  <td> <button onClick={() => preparing(value)} className='btn-info btn'>preparing</button></td></tr>)}
                                {/* <tr>
                                    <th>1</th>
                                    <td>{'recipeName'}</td>
                                    <td>{'preparingTime'}</td>
                                    <td>Blue</td>
                                    <td> <button className='btn-info btn'>preparing</button></td>

                                </tr> */}
                                {/* row 2 */}

                            </tbody>
                        </table>
                    </div>
                    {/* table ends */}

                    {/* second table */}
                    <h1 className='text-2xl font-bold text-center'>Currently cooking:{prepare.length}</h1>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {/* <tr  className="bg-base-200">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                

                                </tr> */}
                                {prepare.map((value, indx) => <tr key={indx}>  <th>{indx + 1}</th> <td>{value.recipeName}</td> <td>{value.preparingTime} minutes </td> <td>{value.calories} calories </td></tr>)}
                                {/* row 2 */}

                                <tr>
                                    {/* {{let time=0}} */}
                                    <th></th>
                                    {/* <td>Total Time:{prepare.map((value,indx)=> <span>{value.preparingTime}</span> )}</td> */}
                                    <td></td>
                                    <td>Total Time= {time} minutes</td>
                                    <td>Total Calories= {calory} calories </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    {/* second table ends */}

                </div>
            </div>
            {/* <ToastContainer/> */}
        </section>
    );
};

export default RecipeCart;