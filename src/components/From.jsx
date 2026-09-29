import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
const From = ({setFormData,setToggle,formData,updateData,setUpdateData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange",
                  defaultValues:updateData,
   });
  const fromSubmit = (data) => {
 if (updateData) {
  const updated = formData.map((val) => {
    return val.id === updateData.id
      ? { ...val, ...data }
      : val;
  });

  setFormData(updated);

  localStorage.setItem(
    "detailProduct",
    JSON.stringify(updated)
  );

  setUpdateData(null);
  setToggle(true);
   }else{
     let arr=[...formData,{...data,id:nanoid()}];
    setFormData(arr);
    localStorage.setItem("detailProduct",JSON.stringify(arr));
   }
    // setFormData(prev=>[...prev,data]);
    setToggle(true);
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-xl font-bold">ADD Product </h1>
      <form
        onSubmit={handleSubmit(fromSubmit)}
        action=""
        className="flex flex-col border border-black w-90 p-4 gap-2 rounded"
      >
        <input
          {...register("quantityProduct", {
            required: "Fill this quantity",
            min: {
              value: 1,
              message: "Minmum 1  quatity",
            },
            max: {
              value: 99,
              message: "Max 99 quatity",
            },
          })}
          className="p-2 border-2 border-black outline-0 rounded"
          type="text"
          placeholder="Quantity"
        />
        {errors.quantityProduct && (
          <p className="text-red-900">{errors.quantityProduct.message}</p>
        )}
        <input
          {...register("price")}
          className="p-2 border-2 border-black outline-0 rounded"
          type="number"
          placeholder="Price"
        />
        <input
          {...register("imageIteam")}
          className="p-2 border-2 border-black outline-0 rounded"
          type="url"
          placeholder="Image"
        />
        <input
          {...register("nameIteam")}
          className="p-2 border-2 border-black outline-0 rounded"
          type="text"
          placeholder="Name"
        />
        <div>
          <button
          // onClick={()=>setToggle(prev=>!prev)} 
          className="p-2 bg-blue-400 rounded w-full text-white">
            ADD Iteam
          </button>
        </div>
      </form>
    </div>
  );
};

export default From;
