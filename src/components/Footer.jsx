import React from "react";

export default function Footer() {
  return (
    <div className="w-screen  bg-gradient-to-r text-sm from-[#F28CC1] to-[#8E70B7] mt-40  flex flex-col md:flex-row gap-8 md:gap-0 justify-between  px-40 py-8 md:py-2">
     
     
      <div  className="text-left " >
        <ul>
          <li className="m-2 py-2">
            <h4>● Endereco do servico</h4>
          </li>
          <li className="m-2 py-2 " >
            <p>● Rua ABC</p>
          </li>
          <li className="m-2 py-2  "  >
            <p>● CEP 12345-000</p>
          </li>
          <li className="m-2  py-2" >
            <p>● Rio de Janeiro, RJ</p>
          </li>
        </ul>
      </div>



      <div >
        <ul >
          <li className="flex flex-row items-center py-2  gap-4"  >
            <img  className="w-[7%]" src="../public/fb.png" alt="fb" /> <p>Livro das faces</p>
          </li>
          <li className="flex flex-row items-center py-2 gap-4">
              <img  className="w-[7%]" src="../public/x.png" alt="fb" /> <p>Pio Pios</p>
          </li>
          <li className="flex flex-row items-center py-2 gap-4">
             <img   className="w-[7%]" src="../public/insta.png" alt="fb" /> <p className="italic" >"essa foto me deixa gordx?"</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
