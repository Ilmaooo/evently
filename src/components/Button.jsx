

const Button = () => {
  return (
    <div>
        <button
        onClick={() => {
            window.location.href = `/evently/register`;
        }}        
        className="bg-[#9B62C5] text-white px-5 mr-4 rounded-2xl border-white border border-solid font-Montserrat tracking-wide py-1 ">Get started</button>
    </div>
  )
}

export default Button
