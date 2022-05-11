import React, { Fragment } from 'react'
import moment from 'moment'
import LabelControl from '../form/label/LabelControl'

const valuesLabel = [
    { control: 'label', text: 'Program:' ,values: (item) => item.program },
    { control: 'label', text: 'Created Date:' ,values: (item) => moment(item.date).format('D-M-YYYY, H:mm') },
    { control: 'label', text: 'Onduty:' ,values: (item) => item.onduty.map((onduty, index) => {
                                                                return <p key={index} className='w-full'>{onduty}</p>
                                                            })  },
                                                            { control: 'label', text: 'Pukul:' ,values: (item) => moment(item.pukul).format('H:mm') },
    { control: 'label', text: 'Onair:' ,values: (item) => item.onair },
    { control: 'label', text: 'Dalet:' ,values: (item) => item.dalet },
    { control: 'label', text: 'PD:' ,values: (item) => item.pd },
    { control: 'label', text: 'Description:' ,values: (item) => item.description }
]

const ProgramDetail = ({ programById }) => {

    const renderedDetail = programById.map(item => {
        return (
            <Fragment key={item.id}>
                {
                    valuesLabel.map((value, index) => {
                        return (
                            <LabelControl
                                key={index}
                                control={value.control}
                                text={value.text}
                                lineBreak={value.lineBreak}
                            >
                                {value.values(item)}
                            </LabelControl>
                        )
                    })
                }
            </Fragment>
        )
    })

    return (   
        <div className='flex flex-col items-center justify-between h-full w-full py-2 space-y-2 px-4'>
            {renderedDetail}
        </div>
    )
}

export default ProgramDetail