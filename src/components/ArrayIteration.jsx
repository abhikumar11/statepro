const ArrayIteration = () => {
     const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
     return (
          <div>
               <h1>Array Elements</h1>
               <div>{arr.map((item) => item%2!==0?<p>{item}</p>:<></>)}</div>
          </div>
     );
};
export default ArrayIteration;
