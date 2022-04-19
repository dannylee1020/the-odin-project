
const personalInfo = () => {

    return (
        <div className = 'flex flex-col gap-y-3 ml-16 mt-20 w-2/3' >
            <input type='text' placeholder='Name' className='text-3xl font-medium placeholder:text-black hover:bg-slate-200 rounded-md py-2'></input>
            <input type='text' placeholder='Location' className='text-base font-medium placeholder:text-black hover:bg-slate-200 rounded-md py-2'></input>
            <input type='text' placeholder='Phone' className='text-base font-medium placeholder:text-black hover:bg-slate-200 rounded-md py-2'></input>
            <input type='Email' placeholder='Email' className='text-base font-medium placeholder:text-black hover:bg-slate-200 rounded-md py-2'></input>
        </div>
    )
}

export default personalInfo