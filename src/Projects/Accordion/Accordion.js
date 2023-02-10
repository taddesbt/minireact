import React, { useEffect, useState } from 'react'
import './Accordion.css'
import data from './data'
import ListItem from './ListItem'




export default function Accordion() {


    const [post, setPost] = useState(data)






    return (
        <section>
            <div className="container">
                <h1>FAQs Section</h1>
                {post.map((item, index) => {
                    return <ListItem key={item.id} {...item} />
                })
                }
            </div>
        </section>
    )
}
