import React from 'react'

const Modal = ({ title, nameModal, setCallModal, children}) => {

    const titleModal = (nameModal) => {
        switch(nameModal){
            case 'modal-detail':
            case 'modal-detail-program':
            case 'modal-detail-live':
                return (
                    title.map(item => {
                        return (
                            <p key={item.id} className='capitalize font-bold text-lg'>{item.subject || item.program}</p>
                        )
                    })
                )
            case 'modal-create-form':
            case 'modal-edit-form':
               return <p className='capitalize font-bold text-lg'>{title}</p>
            default:
                return null
        }
    }

    return (
        <div className='fixed z-10 inset-0 overflow-y-auto h-full w-full bg-gray-500 bg-opacity-70 transition-opacity' aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className='flex items-center justify-center h-full w-full py-4'>
                <div className='flex flex-col bg-white max-h-full overflow-y-auto h-auto w-1/2 rounded-xl'>
                    <div className='h-12 w-full z-10 px-4 flex bg-white items-center sticky top-0 justify-between py-2'>
                        { titleModal(nameModal) }
                        <button onClick={() => setCallModal({detail: false, create: false, edit: false})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='capitalize border-2 h-full w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal