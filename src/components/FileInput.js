const FileInput = () => {

    return (
        <div className="w-full pb-3 flex justify-center">
            <div className="relative h-36 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer w-full ">
                <div className="absolute">
                    <div className="flex flex-col items-center ">
                        <span className="block text-gray-400 font-normal">Attach you files here</span>
                        <span className="block text-gray-400 font-normal">or</span>
                        <span className="block text-blue-400 font-normal">Browse files</span>
                    </div>
                </div>
                <input type="file" className="cursor-pointer h-full w-full opacity-0" name=""></input>
            </div>
        </div>
    )
}

export default FileInput