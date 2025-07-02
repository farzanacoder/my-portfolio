import React from 'react'

const Label = ({text,title}) => {
    return (
        <div>
            <label className="block text-drk mb-1">{title}</label>
            <input
                type="text"
                placeholder={text}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-light focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
        </div>
    )
}

export default Label