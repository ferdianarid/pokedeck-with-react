import React from 'react'

const PokeCard = (props: any) => {
       const { id, name, image, type } = props
       return (
              <React.Fragment>
                     <div className=" bg-[#171527] relative rounded-md flex flex-col items-center">
                            <div className="px-2 py-4">
                                   <div className="py-1 px-2 text-xs font-bold text-center absolute top-2 left-2 bg-white rounded-full">#0{id}</div>
                                   <div className="mb-2 mt-5 place-items-center">
                                          <img src={image} className="h-[120px] w-[100px]" />
                                   </div>
                                   <div className="text-center mt-3">
                                          <h1 className="font-bold capitalize text-xl text-white">{name}</h1>
                                          <h5 className="font-medium text-xs text-white">Type : {type}</h5>
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default PokeCard